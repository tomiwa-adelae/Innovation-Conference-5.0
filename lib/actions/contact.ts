"use server"

import { z } from "zod"

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("A valid email is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactState = {
  success: boolean
  message: string
}

export async function contactAction(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  if (!parsed.success) {
    return { success: false, message: "Please fill in all fields correctly." }
  }

  // TODO: wire up email delivery (e.g. Resend, Nodemailer)
  return {
    success: true,
    message: "Message received! We'll get back to you within 24–48 hours.",
  }
}
