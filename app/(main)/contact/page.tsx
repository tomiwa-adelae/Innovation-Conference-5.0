import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/forms/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Innovation Conference team.",
}

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "admin@innovationconference.com.ng",
    href: "mailto:admin@innovationconference.com.ng",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+234 810 156 9177",
    href: "tel:+2348101569177",
  },
  {
    icon: MapPin,
    label: "Venue",
    value:
      "Alakija Folorunsho Hall, Law Faculty, Ajayi Crowther University, Oyo",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Event Date",
    value: "Saturday, May 16, 2026 · 11:00 AM",
    href: undefined,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Contact Us
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Get in Touch</h1>
          <p className="mt-5 text-base text-white/65">
            Have a question? Want to partner or sponsor? We&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Contact Information
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Reach out directly or fill out the form and we&apos;ll get back
                to you within 24–48 hours.
              </p>
              <ul className="mt-8 space-y-5">
                {info.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-0.5 text-sm font-medium text-foreground hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Form */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="mb-6 text-xl font-bold text-foreground">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
