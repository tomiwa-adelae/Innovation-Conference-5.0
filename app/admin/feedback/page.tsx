import { isAdminAuthenticated, getFeedbacks } from "@/lib/actions/admin"
import { AdminLoginForm } from "@/components/admin/login-form"
import { FeedbacksTable } from "@/components/admin/feedbacks-table"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = { title: "Feedback Admin — Innovation 5.0" }

export default async function AdminFeedbackPage() {
  const authed = await isAdminAuthenticated()

  if (!authed) {
    return <AdminLoginForm />
  }

  const feedbacks = await getFeedbacks()

  return (
    <>
      <Navbar />
      <div className="py-10">
        <div className="container">
          <div className="mb-8">
            <Link
              href="/admin"
              className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft size={14} />
              Back to Registrations
            </Link>
            <h1 className="text-2xl font-black text-foreground">
              Innovation 5.0 — Feedback
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Post-event responses · Innovation 5.0
            </p>
          </div>
          <FeedbacksTable feedbacks={feedbacks} />
        </div>
      </div>
      <Footer />
    </>
  )
}
