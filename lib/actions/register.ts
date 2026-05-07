"use server"

import { prisma } from "@/lib/prisma"
import { z } from "zod"

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("A valid email is required"),
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
    const existing = await prisma.registration.findUnique({
      where: { email: parsed.data.email },
    })

    if (existing) {
      return {
        success: false,
        message: "This email is already registered. Check your inbox for your confirmation.",
      }
    }

    await prisma.registration.create({ data: parsed.data })

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
