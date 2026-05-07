import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/register", label: "Register" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gold text-gold-foreground">
                <span className="text-xs font-black">I5</span>
              </div>
              <span className="text-lg font-bold text-white">
                Innovation <span className="text-gold">5.0</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Unlocking the Power of You. A conference for Africa&apos;s next
              generation of founders, innovators, and creators.
            </p>
            <p className="mt-3 text-sm font-medium text-gold">
              May 16, 2026 · Ajayi Crowther University, Oyo
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { label: "IG", href: "#", title: "Instagram" },
                { label: "X", href: "#", title: "Twitter / X" },
                { label: "in", href: "#", title: "LinkedIn" },
              ].map(({ label, href, title }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={title}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs font-bold text-white/60 transition-colors hover:border-gold hover:text-gold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white/50 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white/50 uppercase">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  Alakija Folorunsho Hall, Law Faculty, Ajayi Crowther
                  University, Oyo
                </span>
              </li>
              <li>
                <a
                  href="mailto:admin@innovationconference.com.ng"
                  className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-gold"
                >
                  <Mail size={14} className="shrink-0 text-gold" />
                  admin@innovationconference.com.ng
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348101569177"
                  className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-gold"
                >
                  <Phone size={14} className="shrink-0 text-gold" />
                  +234 810 156 9177
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Innovation Conference. All rights
            reserved.
          </p>
          <p>
            Organised by{" "}
            <span className="text-white/60">
              Cornerstone International Foundation
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
