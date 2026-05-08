type RegistrationEmailInput = {
  fullName: string
  ticketType: string
}

type AttendanceEmailInput = {
  fullName: string
}

const ticketLabels: Record<string, string> = {
  digital: "Digital Pass",
  physical: "Physical Delegate Pass",
  founder: "Founder Pass",
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function layout({
  title,
  preview,
  children,
}: {
  title: string
  preview: string
  children: string
}) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>${title}</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #f6f7fb;
        color: #1f2937;
        font-family: Arial, Helvetica, sans-serif;
      }
      .wrapper {
        padding: 40px 20px;
      }
      .container {
        max-width: 620px;
        margin: 0 auto;
        overflow: hidden;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        background: #ffffff;
      }
      .header {
        padding: 34px 32px;
        background: #111827;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        color: #ffffff;
        font-size: 24px;
        line-height: 1.25;
      }
      .header p {
        margin: 10px 0 0;
        color: #f5c451;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }
      .content {
        padding: 34px 32px;
        line-height: 1.65;
      }
      .content h2 {
        margin: 0 0 16px;
        color: #111827;
        font-size: 22px;
      }
      .panel {
        margin: 24px 0;
        padding: 18px;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        background: #f9fafb;
      }
      .label {
        margin: 0 0 4px;
        color: #6b7280;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .value {
        margin: 0;
        color: #111827;
        font-size: 15px;
        font-weight: 700;
      }
      .footer {
        padding: 24px 32px;
        background: #f9fafb;
        color: #6b7280;
        font-size: 12px;
        text-align: center;
      }
      a {
        color: #3346d3;
      }
    </style>
  </head>
  <body>
    <span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;">${preview}</span>
    <div class="wrapper">
      <div class="container">
        <div class="header">
          <h1>Innovation 5.0</h1>
          <p>Unlocking the Power of You</p>
        </div>
        <div class="content">${children}</div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Innovation Conference. Organised by Cornerstone International Foundation.</p>
          <p>Alakija Folorunsho Hall, Law Faculty, Ajayi Crowther University, Oyo.</p>
        </div>
      </div>
    </div>
  </body>
</html>
`
}

export function RegistrationConfirmationEmail({
  fullName,
  ticketType,
}: RegistrationEmailInput) {
  const safeName = escapeHtml(fullName)
  const pass = ticketLabels[ticketType] ?? ticketType

  return layout({
    title: "You're registered for Innovation 5.0",
    preview: "Your Innovation 5.0 registration has been confirmed.",
    children: `
      <h2>You're registered, ${safeName}.</h2>
      <p>Thank you for registering for <strong>Innovation 5.0</strong>. We are excited to welcome you to a day of inspiration, connection, and practical conversations for Africa's next generation of innovators.</p>
      <div class="panel">
        <p class="label">Event</p>
        <p class="value">Innovation 5.0 - Saturday, May 16, 2026</p>
        <p class="label" style="margin-top:14px;">Venue</p>
        <p class="value">Alakija Folorunsho Hall, Law Faculty, Ajayi Crowther University, Oyo</p>
        <p class="label" style="margin-top:14px;">Pass Type</p>
        <p class="value">${escapeHtml(pass)}</p>
      </div>
      <p>Please keep this email handy. We will share any important event updates through this email address.</p>
      <p>See you at Innovation 5.0.</p>
      <p><strong>The Innovation Conference Team</strong></p>
    `,
  })
}

export function AttendanceConfirmationEmail({ fullName }: AttendanceEmailInput) {
  const safeName = escapeHtml(fullName)

  return layout({
    title: "You have been checked in for Innovation 5.0",
    preview: "Your attendance at Innovation 5.0 has been confirmed.",
    children: `
      <h2>Welcome, ${safeName}.</h2>
      <p>You have been marked as <strong>attended</strong> for Innovation 5.0. We are glad you made it into the room.</p>
      <div class="panel">
        <p class="label">Status</p>
        <p class="value">Attendance confirmed</p>
        <p class="label" style="margin-top:14px;">Event</p>
        <p class="value">Innovation 5.0 - Unlocking the Power of You</p>
      </div>
      <p>Enjoy the sessions, connect intentionally, and make the most of every conversation today.</p>
      <p><strong>The Innovation Conference Team</strong></p>
    `,
  })
}
