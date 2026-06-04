export function parentConfirmationEmail(data: {
  parentName: string;
  childName: string;
  subjects: string[];
  gradeLevel: string;
}): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="background:#0d9488;padding:32px 40px;">
            <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Bridge</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 40px 32px;">
            <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#171717;">
              We've received your request, ${data.parentName}!
            </h1>
            <p style="margin:0 0 24px;font-size:15px;color:#525252;line-height:1.6;">
              Thanks for reaching out to Bridge. We're on it — our team will review your request
              and get back to you within <strong>24 hours</strong> with a tutor match for ${data.childName}.
            </p>

            <!-- Summary box -->
            <table width="100%" cellpadding="0" cellspacing="0"
              style="background:#f0fdfa;border-radius:12px;padding:20px 24px;margin-bottom:24px;">
              <tr>
                <td>
                  <p style="margin:0 0 4px;font-size:12px;font-weight:700;color:#0d9488;text-transform:uppercase;letter-spacing:0.5px;">
                    Your request summary
                  </p>
                  <p style="margin:8px 0 0;font-size:14px;color:#404040;line-height:1.8;">
                    <strong>Child:</strong> ${data.childName}<br>
                    <strong>Grade:</strong> ${data.gradeLevel}<br>
                    <strong>Subjects:</strong> ${data.subjects.join(", ")}
                  </p>
                </td>
              </tr>
            </table>

            <p style="margin:0 0 16px;font-size:15px;color:#525252;line-height:1.6;">
              While you wait, feel free to reply to this email if you have any questions or want to add anything to your request.
            </p>
            <p style="margin:0;font-size:15px;color:#525252;line-height:1.6;">
              — The Bridge Team
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px 32px;border-top:1px solid #e5e5e5;">
            <p style="margin:0;font-size:12px;color:#a3a3a3;line-height:1.6;">
              Bridge Tutoring · Pretoria &amp; Johannesburg, South Africa<br>
              Questions? Reply to this email or contact us at
              <a href="mailto:support@bridgetutoring.co.za" style="color:#0d9488;">support@bridgetutoring.co.za</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();
}

export function tutorConfirmationEmail(data: {
  firstName: string;
  subjects: string[];
  gradeLevels: string[];
}): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="background:#9333ea;padding:32px 40px;">
            <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Bridge</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 40px 32px;">
            <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#171717;">
              Application received, ${data.firstName}!
            </h1>
            <p style="margin:0 0 24px;font-size:15px;color:#525252;line-height:1.6;">
              Thanks for applying to tutor with Bridge. We review every application personally
              and will be in touch within a <strong>few business days</strong>.
            </p>

            <!-- Summary box -->
            <table width="100%" cellpadding="0" cellspacing="0"
              style="background:#faf5ff;border-radius:12px;padding:20px 24px;margin-bottom:24px;">
              <tr>
                <td>
                  <p style="margin:0 0 4px;font-size:12px;font-weight:700;color:#9333ea;text-transform:uppercase;letter-spacing:0.5px;">
                    Your application summary
                  </p>
                  <p style="margin:8px 0 0;font-size:14px;color:#404040;line-height:1.8;">
                    <strong>Subjects:</strong> ${data.subjects.join(", ")}<br>
                    <strong>Grade levels:</strong> ${data.gradeLevels.join(", ")}
                  </p>
                </td>
              </tr>
            </table>

            <p style="margin:0 0 16px;font-size:15px;color:#525252;line-height:1.6;">
              In the meantime, if you have any questions or want to update your application, just reply to this email.
            </p>
            <p style="margin:0;font-size:15px;color:#525252;line-height:1.6;">
              — The Bridge Team
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px 32px;border-top:1px solid #e5e5e5;">
            <p style="margin:0;font-size:12px;color:#a3a3a3;line-height:1.6;">
              Bridge Tutoring · Pretoria &amp; Johannesburg, South Africa<br>
              Questions? Reply to this email or contact us at
              <a href="mailto:support@bridgetutoring.co.za" style="color:#9333ea;">support@bridgetutoring.co.za</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();
}
