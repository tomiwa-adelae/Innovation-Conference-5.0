import { testimonials } from "@/lib/data/testimonials"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
            What Past Attendees Say
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            The impact of Innovation goes beyond a single day. These are the
            stories it has helped write.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 2xl:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <Quote size={24} className="mb-4 text-primary/30" />
                <p className="text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-5 border-t pt-4">
                <p className="text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.role} · {t.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
