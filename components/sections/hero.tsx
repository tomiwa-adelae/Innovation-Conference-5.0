import Link from "next/link"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Countdown } from "@/components/countdown"

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-navy py-20 text-center">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      {/* Grid overlay pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container flex flex-col items-center gap-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          5th Edition · May 16, 2026
        </div>

        {/* Heading */}
        <h1 className="text-5xl leading-tight font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
          Innovation{" "}
          <span className="relative">
            <span className="text-gold">5.0</span>
          </span>
        </h1>

        {/* Theme */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-semibold tracking-widest text-gold/70 uppercase">
            Theme
          </p>
          <p className="text-xl font-semibold text-white/80 sm:text-2xl">
            &ldquo;Uncharted: Exploring New Frontiers of Possibility&rdquo;
          </p>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-white/55">
          Africa&apos;s premier youth innovation conference — pushing beyond
          limits, charting new territory, and discovering what becomes possible
          when the next generation dares to go further.
        </p>

        {/* Event meta */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-gold" />
            Saturday, May 16, 2026
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-gold" />
            Ajayi Crowther University, Oyo
          </span>
        </div>

        {/* Countdown */}
        <div className="mt-2">
          <p className="mb-3 text-xs font-medium tracking-widest text-white/40 uppercase">
            Event starts in
          </p>
          <Countdown />
        </div>

        {/* CTAs */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            className="bg-gold font-semibold text-gold-foreground hover:bg-gold/90"
          >
            <Link href="/register">
              Register Free
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute right-0 bottom-0 left-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 60L1440 60L1440 20C1200 60 840 0 720 20C600 40 240 0 0 20L0 60Z"
            fill="white"
            className="dark:fill-[oklch(0.12_0.02_264)]"
          />
        </svg>
      </div>
    </section>
  )
}
