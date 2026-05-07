import Link from "next/link"
import { ArrowRight, Target, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const pillars = [
  {
    icon: Lightbulb,
    title: "Inspire",
    description:
      "World-class speakers sharing stories of excellence, purpose, and impact.",
  },
  {
    icon: Users,
    title: "Connect",
    description:
      "Meaningful networking with industry leaders, mentors, and fellow innovators.",
  },
  {
    icon: Target,
    title: "Empower",
    description:
      "Practical insights and tools to help you build a life of intention and greatness.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              About the Conference
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-black text-foreground sm:text-4xl">
              More Than a Conference.{" "}
              <span className="text-primary">A Movement.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The Innovation Conference, organised by Cornerstone International
              Foundation, is a yearly gathering built for Africa&apos;s next
              wave of founders, creators, and changemakers. Since 2022,
              we&apos;ve brought together thousands of young people from across
              Nigeria for a full day of inspiration, real networking, and
              actionable growth.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Innovation 5.0 is our boldest edition yet — gathering 2,000+
              visionaries under one roof with the singular mission:{" "}
              <span className="font-semibold text-foreground">
                to help you unlock the full power within you.
              </span>
            </p>
            <Button asChild className="mt-7">
              <Link href="/about">
                Our Full Story <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>

          {/* Pillars */}
          <div className="grid gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
