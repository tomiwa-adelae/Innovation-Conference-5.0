import Mailjet from "node-mailjet"

type SendEmailInput = {
  to: string
  name: string
  subject: string
  html: string
}

function getRequiredEnv(name: string) {
  const value = process.env[name]
  if (!value) throw new Error(`Missing ${name}`)
  return value
}

export async function sendMailjetEmail({
  to,
  name,
  subject,
  html,
}: SendEmailInput) {
  const mailjet = Mailjet.apiConnect(
    getRequiredEnv("MAILJET_API_PUBLIC_KEY"),
    getRequiredEnv("MAILJET_API_PRIVATE_KEY"),
  )

  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: getRequiredEnv("SENDER_EMAIL_ADDRESS"),
          Name: process.env.SENDER_NAME ?? "Innovation Conference",
        },
        To: [{ Email: to, Name: name }],
        Subject: subject,
        HTMLPart: html,
      },
    ],
  })
}
