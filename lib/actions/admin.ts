"use server"

import { prisma } from "@/lib/prisma"
import { cookies } from "next/headers"
import { createHmac } from "crypto"
import { revalidatePath } from "next/cache"
import { AttendanceConfirmationEmail } from "@/lib/emails/conference-emails"
import { sendMailjetEmail } from "@/lib/mailjet"

function computeToken(password: string) {
  const secret = process.env.ADMIN_SECRET ?? "innovation-secret-fallback"
  return createHmac("sha256", secret).update(password).digest("hex")
}

function getExpectedToken() {
  return computeToken(process.env.ADMIN_PASSWORD ?? "innovation2026")
}

export type LoginState = { error?: string }

export async function adminLogin(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = formData.get("password") as string
  const attempt = computeToken(password)

  if (attempt !== getExpectedToken()) {
    return { error: "Invalid password. Please try again." }
  }

  const cookieStore = await cookies()
  cookieStore.set("admin_session", getExpectedToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
    sameSite: "lax",
  })

  return {}
}

export async function adminLogout() {
  const cookieStore = await cookies()
  cookieStore.delete("admin_session")
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")
  if (!session) return false
  return session.value === getExpectedToken()
}

export async function toggleAttendance(id: string, attended: boolean) {
  if (!(await isAdminAuthenticated())) {
    throw new Error("Unauthorized")
  }

  const registration = await prisma.registration.update({
    where: { id },
    data: { attended },
  })

  if (attended) {
    try {
      await sendMailjetEmail({
        to: registration.email,
        name: registration.fullName,
        subject: "Your Innovation 5.0 attendance has been confirmed",
        html: AttendanceConfirmationEmail({
          fullName: registration.fullName,
        }),
      })
    } catch (error) {
      console.error("Attendance email failed", error)
    }
  }

  revalidatePath("/admin")
}

export async function getRegistrations() {
  return prisma.registration.findMany({
    orderBy: { createdAt: "desc" },
  })
}
