import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  formatParentRequestMessage,
  sendMessage,
} from "@/lib/whatsapp";
import { parentConfirmationEmail } from "@/lib/emailTemplates";

export const runtime = "edge";

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
    childName: sanitise(body.childName),
    gradeLevel: sanitise(body.gradeLevel),
    subjects: sanitiseArray(body.subjects),
    goal: sanitise(body.goal),
    lessonFormat: sanitise(body.lessonFormat),
    area: sanitise(body.area),
  };

  if (!data.parentName || !data.phone || !data.email || !data.childName) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 422 });
  }

  const emailHtml = `
    <h2>New Parent Request</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><b>Parent</b></td><td>${data.parentName}</td></tr>
      <tr><td><b>Phone</b></td><td>${data.phone}</td></tr>
      <tr><td><b>Email</b></td><td>${data.email}</td></tr>
      <tr><td><b>Child</b></td><td>${data.childName}</td></tr>
      <tr><td><b>Grade</b></td><td>${data.gradeLevel}</td></tr>
      <tr><td><b>Subjects</b></td><td>${data.subjects.join(", ")}</td></tr>
      <tr><td><b>Goal</b></td><td>${data.goal}</td></tr>
      <tr><td><b>Format</b></td><td>${data.lessonFormat}</td></tr>
      <tr><td><b>Area</b></td><td>${data.area}</td></tr>
    </table>
  `;

  const from = process.env.RESEND_FROM_EMAIL ?? "Bridge <noreply@bridgetutoring.co.za>";

  const [emailResult, , waResult] = await Promise.allSettled([
    resend.emails.send({
      from,
      to: process.env.NOTIFY_EMAIL ?? "support@bridgetutoring.co.za",
      subject: `New tutor request — ${data.childName} (${data.gradeLevel})`,
      html: emailHtml,
    }),
    resend.emails.send({
      from,
      to: data.email,
      subject: "We've received your request — Bridge Tutoring",
      html: parentConfirmationEmail({
        parentName: data.parentName,
        childName: data.childName,
        subjects: data.subjects,
        gradeLevel: data.gradeLevel,
      }),
    }),
    sendMessage(formatParentRequestMessage(data)),
  ]);

  console.log("Email result:", JSON.stringify(emailResult));
  console.log("WhatsApp result:", waResult.status);

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
