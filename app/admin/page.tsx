import { isAdminAuthenticated, getRegistrations } from "@/lib/actions/admin"
import { AdminLoginForm } from "@/components/admin/login-form"
import { RegistrationsTable } from "@/components/admin/registrations-table"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata = { title: "Admin — Innovation 5.0" }

export default async function AdminPage() {
  const authed = await isAdminAuthenticated()

  if (!authed) {
    return <AdminLoginForm />
  }

  const registrations = await getRegistrations()

  return (
    <>
      <Navbar />
      <div className="py-10">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-2xl font-black text-foreground">
              Innovation 5.0 — Admin
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Attendance dashboard · May 16, 2026
            </p>
          </div>
          <RegistrationsTable registrations={registrations} />
        </div>
      </div>
      <Footer />
    </>
  )
}
