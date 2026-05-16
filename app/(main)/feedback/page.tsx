import type { Metadata } from "next"
import { MessageSquareHeart, Star, Users, Lightbulb } from "lucide-react"
import { FeedbackForm } from "@/components/forms/feedback-form"

export const metadata: Metadata = {
  title: "Share Your Feedback — Innovation 5.0",
  description:
    "Tell us about your experience at Innovation 5.0. Your feedback shapes Innovation 6.0.",
}

const prompts = [
  { icon: Star, text: "Rate the overall experience and speakers" },
  { icon: MessageSquareHeart, text: "Share your favourite moment" },
  { icon: Lightbulb, text: "Suggest improvements for next year" },
  { icon: Users, text: "Let us know if you'd come back" },
]

export default function FeedbackPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Post-Event Feedback
          </p>
          <h1 className="mt-4 text-4xl leading-tight font-black sm:text-5xl">
            How Did We Do?
          </h1>
          <p className="mt-4 text-base text-white/65">
            Innovation 5.0 is over — but your voice shapes what comes next.
            Take 2 minutes to share your experience.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground">
                What We&apos;re Asking
              </h2>
              <ul className="mt-5 space-y-4">
                {prompts.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon size={16} />
                    </span>
                    <span className="pt-1 text-sm font-medium text-foreground">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
                <p className="text-sm font-semibold text-foreground">
                  Why does this matter?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Every response is read by the organising team. Your honest
                  thoughts directly influence the speakers we invite, the
                  sessions we plan, and the experience we build for Innovation
                  6.0.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
                <h2 className="mb-6 text-xl font-bold text-foreground">
                  Feedback Form
                </h2>
                <FeedbackForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
