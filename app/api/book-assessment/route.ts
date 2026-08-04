import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  formatAssessmentBookingMessage,
  sendMessage,
} from "@/lib/whatsapp";
import { assessmentBookingConfirmationEmail } from "@/lib/emailTemplates";

export const runtime = "nodejs";

function sanitise(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/[<>]/g, "").trim().slice(0, 500);
}

function sanitiseArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((v) => typeof v === "string")
    .map((v) => sanitise(v))
    .filter(Boolean)
    .slice(0, 20);
}

interface TimeOption {
  date: string;
  time: string;
}

function sanitiseTimeOptions(value: unknown): TimeOption[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((v): v is Record<string, unknown> => typeof v === "object" && v !== null)
    .map((v) => ({ date: sanitise(v.date), time: sanitise(v.time) }))
    .filter((v) => v.date && v.time)
    .slice(0, 3);
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }

  const data = {
    parentName: sanitise(body.parentName),
    phone: sanitise(body.phone),
    email: sanitise(body.email),
    area: sanitise(body.area),
    address: sanitise(body.address),
    childName: sanitise(body.childName),
    gradeLevel: sanitise(body.gradeLevel),
    subjects: sanitiseArray(body.subjects),
    lessonFormat: sanitise(body.lessonFormat),
    timeOptions: sanitiseTimeOptions(body.timeOptions),
    notes: sanitise(body.notes),
  };

  if (!data.parentName || !data.phone || !data.email || !data.childName || !data.area) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 422 });
  }

  if (data.lessonFormat === "in-person" && !data.address) {
    return NextResponse.json(
      { message: "Please add an address for the home visit" },
      { status: 422 }
    );
  }

  if (data.timeOptions.length < 3) {
    return NextResponse.json(
      { message: "Please provide 3 date and time options" },
      { status: 422 }
    );
  }

  const timeOptionsHtml = data.timeOptions
    .map((o, i) => `Option ${i + 1}: ${o.date} — ${o.time}`)
    .join("<br>");

  const emailHtml = `
    <h2>Free Assessment Requested</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><b>Parent</b></td><td>${data.parentName}</td></tr>
      <tr><td><b>Phone</b></td><td>${data.phone}</td></tr>
      <tr><td><b>Email</b></td><td>${data.email}</td></tr>
      <tr><td><b>Child</b></td><td>${data.childName}</td></tr>
      <tr><td><b>Grade</b></td><td>${data.gradeLevel}</td></tr>
      <tr><td><b>Subject</b></td><td>${data.subjects.join(", ")}</td></tr>
      <tr><td><b>Format</b></td><td>${data.lessonFormat}</td></tr>
      <tr><td><b>Area</b></td><td>${data.area}</td></tr>
      <tr><td><b>Address</b></td><td>${data.address || "N/A (online)"}</td></tr>
      <tr><td><b>Date/time options</b></td><td>${timeOptionsHtml}</td></tr>
      <tr><td><b>Notes</b></td><td>${data.notes || "None"}</td></tr>
    </table>
  `;

  const from = process.env.RESEND_FROM_EMAIL ?? "Bridge <noreply@bridgetutoring.co.za>";

  const [emailResult, , waResult] = await Promise.allSettled([
    resend.emails.send({
      from,
      to: process.env.NOTIFY_EMAIL ?? "support@bridgetutoring.co.za",
      subject: `Assessment requested — ${data.childName} (${data.gradeLevel})`,
      html: emailHtml,
    }),
    resend.emails.send({
      from,
      to: data.email,
      subject: "Your free assessment — Bridge Tutoring",
      html: assessmentBookingConfirmationEmail({
        parentName: data.parentName,
        childName: data.childName,
        gradeLevel: data.gradeLevel,
        subjects: data.subjects,
        lessonFormat: data.lessonFormat,
        area: data.area,
        address: data.address,
        timeOptions: data.timeOptions,
      }),
    }),
    sendMessage(formatAssessmentBookingMessage(data)),
  ]);

  console.log("Email result:", JSON.stringify(emailResult));
  console.log("WhatsApp result:", waResult.status);
  if (waResult.status === "rejected") {
    // Non-fatal: the notification email is the source of truth. But surface the
    // reason so a broken WhatsApp integration doesn't fail silently.
    console.error("WhatsApp error:", waResult.reason);
  }

  if (emailResult.status === "rejected") {
    console.error("Email error:", emailResult.reason);
    return NextResponse.json(
      { message: "Failed to send email notification. Please try again." },
      { status: 500 }
    );
  }

  if (emailResult.status === "fulfilled" && emailResult.value.error) {
    console.error("Resend API error:", emailResult.value.error);
    return NextResponse.json(
      { message: `Email error: ${emailResult.value.error.message}` },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
