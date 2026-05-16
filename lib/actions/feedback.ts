"use server"

import { prisma } from "@/lib/prisma"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("A valid email is required"),
  overallRating: z.coerce.number().int().min(1).max(5),
  speakerRating: z.coerce.number().int().min(1).max(5),
  favoritePart: z.string().min(5, "Please share what you enjoyed most"),
  improvements: z.string().min(5, "Please share at least one suggestion"),
  wouldAttendAgain: z.enum(["yes", "no", "maybe"]),
  comments: z.string().optional(),
})

export type FeedbackState = {
  success: boolean
  message: string
  errors?: Partial<Record<keyof z.infer<typeof schema>, string[]>>
}

export async function feedbackAction(
  _prevState: FeedbackState,
  formData: FormData,
): Promise<FeedbackState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    overallRating: formData.get("overallRating"),
    speakerRating: formData.get("speakerRating"),
    favoritePart: formData.get("favoritePart"),
    improvements: formData.get("improvements"),
    wouldAttendAgain: formData.get("wouldAttendAgain"),
    comments: formData.get("comments") || undefined,
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
    await prisma.feedback.create({ data: parsed.data })
    return {
      success: true,
      message: "Thank you! Your feedback helps us make Innovation 6.0 even better.",
    }
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again shortly.",
    }
  }
}
