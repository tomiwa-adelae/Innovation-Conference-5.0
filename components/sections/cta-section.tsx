import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-24 text-center">
      {/* Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-[80px]" />
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-gold/10 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <p className="text-sm font-semibold tracking-widest text-gold uppercase">
          Don&apos;t Miss Out
        </p>
        <h2 className="mt-4 text-3xl leading-tight font-black text-white sm:text-4xl lg:text-5xl">
          Ready to Explore New Frontiers?
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/60">
          Join 2,000+ young innovators on May 16, 2026 at Ajayi Crowther
          University as we chart uncharted territory together. Registration is
          free — the frontier is waiting.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="bg-gold font-semibold text-gold-foreground hover:bg-gold/90"
          >
            <Link href="/register">
              Register Free Now
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
