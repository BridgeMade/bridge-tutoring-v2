import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  formatTutorApplicationMessage,
  sendMessage,
} from "@/lib/whatsapp";
import { tutorConfirmationEmail } from "@/lib/emailTemplates";

export const runtime = "edge";

function sanitise(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/[<>]/g, "").trim().slice(0, 1000);
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
    firstName: sanitise(body.firstName),
    lastName: sanitise(body.lastName),
    phone: sanitise(body.phone),
    email: sanitise(body.email),
    subjects: sanitiseArray(body.subjects),
    gradeLevels: sanitiseArray(body.gradeLevels),
    qualification: sanitise(body.qualification),
    institution: sanitise(body.institution),
    area: sanitise(body.area),
    teachingFormat: sanitise(body.teachingFormat),
    experience: sanitise(body.experience),
    motivation: sanitise(body.motivation),
  };

  if (!data.firstName || !data.lastName || !data.phone || !data.email) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 422 });
  }

  const emailHtml = `
    <h2>New Tutor Application</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><b>Name</b></td><td>${data.firstName} ${data.lastName}</td></tr>
      <tr><td><b>Phone</b></td><td>${data.phone}</td></tr>
      <tr><td><b>Email</b></td><td>${data.email}</td></tr>
      <tr><td><b>Subjects</b></td><td>${data.subjects.join(", ")}</td></tr>
      <tr><td><b>Grade levels</b></td><td>${data.gradeLevels.join(", ")}</td></tr>
      <tr><td><b>Qualification</b></td><td>${data.qualification}</td></tr>
      <tr><td><b>Institution</b></td><td>${data.institution || "N/A"}</td></tr>
      <tr><td><b>Area</b></td><td>${data.area}</td></tr>
      <tr><td><b>Format</b></td><td>${data.teachingFormat}</td></tr>
      <tr><td><b>Experience</b></td><td>${data.experience}</td></tr>
      <tr><td><b>Motivation</b></td><td>${data.motivation}</td></tr>
    </table>
  `;

  const from = process.env.RESEND_FROM_EMAIL ?? "Bridge <noreply@bridgetutoring.co.za>";

  const [emailResult, , waResult] = await Promise.allSettled([
    resend.emails.send({
      from,
      to: process.env.NOTIFY_EMAIL ?? "support@bridgetutoring.co.za",
      subject: `New tutor application — ${data.firstName} ${data.lastName}`,
      html: emailHtml,
    }),
    resend.emails.send({
      from,
      to: data.email,
      subject: "Your application is in — Bridge Tutoring",
      html: tutorConfirmationEmail({
        firstName: data.firstName,
        subjects: data.subjects,
        gradeLevels: data.gradeLevels,
      }),
    }),
    sendMessage(
      formatTutorApplicationMessage({
        ...data,
        institution: data.institution || undefined,
      })
    ),
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
