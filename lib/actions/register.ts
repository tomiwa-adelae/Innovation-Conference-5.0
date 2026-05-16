"use server"

import { prisma } from "@/lib/prisma"
import { RegistrationConfirmationEmail } from "@/lib/emails/conference-emails"
import { sendMailjetEmail } from "@/lib/mailjet"
import { z } from "zod"

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.preprocess(
    (v) => (v === "" ? undefined : v),
    z.string().email("Please enter a valid email address").optional(),
  ),
  phone: z.string().min(7, "Phone number is required"),
  institution: z.string().min(2, "Institution or organization is required"),
  ticketType: z.enum(["digital", "physical", "founder"]),
  heardAbout: z.string().min(1, "Please tell us how you heard about us"),
  notes: z.string().optional(),
})

export type RegisterState = {
  success: boolean
  message: string
  errors?: Partial<Record<keyof z.infer<typeof schema>, string[]>>
}

export async function registerAction(
  _prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const parsed = schema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    institution: formData.get("institution"),
    ticketType: formData.get("ticketType"),
    heardAbout: formData.get("heardAbout"),
    notes: formData.get("notes") || undefined,
  })

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: parsed.error.flatten().fieldErrors as Partial<
        Record<keyof z.infer<typeof schema>, string[]>
      >,
    }
  }

  try {
    if (parsed.data.email) {
      const existing = await prisma.registration.findFirst({
        where: { email: parsed.data.email },
      })

      if (existing) {
        return {
          success: false,
          message: "This email is already registered. Check your inbox for your confirmation.",
        }
      }
    }

    const registration = await prisma.registration.create({ data: parsed.data })

    if (registration.email) {
      try {
        await sendMailjetEmail({
          to: registration.email,
          name: registration.fullName,
          subject: "You're registered for Innovation 5.0",
          html: RegistrationConfirmationEmail({
            fullName: registration.fullName,
            ticketType: registration.ticketType,
          }),
        })
      } catch (error) {
        console.error("Registration email failed", error)
        return {
          success: true,
          message:
            "You're registered! We could not send the confirmation email right now, but your spot is saved.",
        }
      }
    }

    return {
      success: true,
      message: "You're registered! See you on May 16, 2026 at Ajayi Crowther University.",
    }
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again shortly.",
    }
  }
}
