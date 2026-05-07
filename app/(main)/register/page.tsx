import type { Metadata } from "next"
import { Calendar, MapPin, Ticket } from "lucide-react"
import { RegistrationForm } from "@/components/forms/registration-form"

export const metadata: Metadata = {
  title: "Register",
  description:
    "Secure your free spot at Innovation 5.0 on May 16, 2026 at Ajayi Crowther University, Oyo.",
}

const perks = [
  { icon: "🎤", text: "Access to all speaker sessions" },
  { icon: "🤝", text: "Networking with 2,000+ innovators" },
  { icon: "🏆", text: "Awards and recognition ceremony" },
  { icon: "📜", text: "Certificate of participation" },
  { icon: "🎁", text: "Exclusive giveaways" },
  { icon: "🚀", text: "Startup pitch showcase" },
]

export default function RegisterPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Free Registration
          </p>
          <h1 className="mt-4 text-4xl leading-tight font-black sm:text-5xl">
            Secure Your Spot
          </h1>
          <p className="mt-4 text-base text-white/65">
            Join 2,000+ innovators at Innovation 5.0. Registration is completely
            free.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gold" />
              Saturday, May 16, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-gold" />
              Ajayi Crowther University, Oyo
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Perks sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground">
                What You&apos;ll Get
              </h2>
              <ul className="mt-5 space-y-3">
                {perks.map((perk) => (
                  <li key={perk.text} className="flex items-center gap-3">
                    <span className="text-xl">{perk.icon}</span>
                    <span className="text-sm font-medium text-foreground">
                      {perk.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
                <div className="flex items-center gap-2 text-primary">
                  <Ticket size={18} />
                  <span className="font-semibold">Pass Types</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">
                      Digital Pass
                    </span>{" "}
                    — Free. Online sessions + certificate.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">
                      Physical Delegate
                    </span>{" "}
                    — Reserved seating, lunch & merch.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">
                      Founder Pass
                    </span>{" "}
                    — VIP lounge, pitch slot & mentorship.
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
                <h2 className="mb-6 text-xl font-bold text-foreground">
                  Registration Form
                </h2>
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
