import { Hero } from "@/components/sections/hero"
import { StatsStrip } from "@/components/sections/stats-strip"
import { AboutSection } from "@/components/sections/about-section"
import { SpeakersSection } from "@/components/sections/speakers-section"
import { ScheduleSection } from "@/components/sections/schedule-section"
import { SponsorsSection } from "@/components/sections/sponsors-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <AboutSection />
      <SpeakersSection />
      <ScheduleSection />
      <SponsorsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
