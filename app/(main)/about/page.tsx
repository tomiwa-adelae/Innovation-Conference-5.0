import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Heart, Globe, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Innovation 5.0, Cornerstone International Foundation, and the mission to unlock the potential of Africa's next generation.",
}

const values = [
  {
    icon: Star,
    title: "Excellence",
    description:
      "We believe every young African is capable of extraordinary achievement when they commit to growth and refuse to shrink.",
  },
  {
    icon: Globe,
    title: "Pan-African Vision",
    description:
      "Our work is rooted in the belief that Africa's future depends on the generation being raised right now. We build for the continent.",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "Innovation is not just a conference — it's a family of bold, purpose-driven young people who keep showing up for each other.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Our Story
          </p>
          <h1 className="mt-4 text-4xl leading-tight font-black sm:text-5xl">
            About Innovation 5.0
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            A movement built on the belief that every young African holds a
            power worth unlocking.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl space-y-6 text-base leading-relaxed text-muted-foreground">
          <h2 className="text-2xl font-black text-foreground">Who We Are</h2>
          <p>
            The Innovation Conference is an annual youth empowerment and
            innovation event organised by{" "}
            <span className="font-semibold text-foreground">
              Cornerstone International Foundation
            </span>{" "}
            and convened by{" "}
            <span className="font-semibold text-foreground">John Ogunjide</span>
            . Since our first edition in 2022, we have gathered thousands of
            young Nigerians — students, graduates, entrepreneurs, and creatives
            — under one roof for a day dedicated entirely to their growth.
          </p>
          <p>
            Every year, we ask one central question: what would it look like if
            young Africans fully stepped into who they were made to be? Our
            conference exists to answer that question — through stories,
            conversation, connection, and challenge.
          </p>
          <p>
            Innovation 5.0, themed{" "}
            <span className="font-semibold text-foreground">
              &ldquo;Unlocking the Power of You,&rdquo;
            </span>{" "}
            is our largest and most ambitious edition yet — bringing together
            2,000+ visionaries at Alakija Folorunsho Hall, Ajayi Crowther
            University, Oyo on May 16, 2026.
          </p>

          <h2 className="pt-4 text-2xl font-black text-foreground">
            Our Impact
          </h2>
          <p>
            Since 2022, the Innovation Conference has directly impacted over{" "}
            <span className="font-semibold text-foreground">5,000+ lives</span>.
            Attendees have gone on to secure employment, launch businesses, find
            mentors, and build lasting communities. 90% of past attendees report
            gaining career-ready skills and connections from the experience.
          </p>
          <p>
            These are not just numbers — they are stories. Stories of a student
            who got hired on the day of the event. Of a young founder who found
            her co-founder at our networking session. Of a young man who stepped
            into purpose for the first time at one of our speaker sessions.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">
              What We Stand For
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border bg-card p-7 shadow-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Organiser */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-black text-foreground sm:text-3xl">
            About Cornerstone International Foundation
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Cornerstone International Foundation is a youth-focused non-profit
            dedicated to raising a generation of purpose-driven, innovative, and
            excellent young Africans. Through the Innovation Conference and the
            School of Innovation, the Foundation equips young people with the
            mindset, skills, and networks they need to thrive in a rapidly
            changing world.
          </p>
          <Button asChild className="mt-8">
            <Link href="/register">
              Join Us at Innovation 5.0{" "}
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  )
}
