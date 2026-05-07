import { schedule } from "@/lib/data/schedule"
import { cn } from "@/lib/utils"
import { Mic, Users, Award, Sparkles } from "lucide-react"
import type { ScheduleItem } from "@/lib/data/schedule"

const typeConfig: Record<
  ScheduleItem["type"],
  { color: string; bg: string; Icon: React.ElementType }
> = {
  ceremony: { color: "text-primary", bg: "bg-primary/10", Icon: Sparkles },
  session: { color: "text-primary", bg: "bg-primary/10", Icon: Mic },
  networking: {
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    Icon: Users,
  },
  award: { color: "text-[color:var(--gold)]", bg: "bg-gold/10", Icon: Award },
}

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Programme
          </p>
          <h2 className="mt-3 text-3xl leading-tight font-black text-foreground sm:text-4xl">
            Day Schedule
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Saturday, May 16, 2026 · Alakija Folorunsho Hall, Ajayi Crowther
            University
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute top-0 left-[4.5rem] h-full w-px bg-border sm:left-[5.5rem]" />

          <div className="flex flex-col gap-0">
            {schedule.map((item, i) => {
              const { color, bg, Icon } = typeConfig[item.type]
              return (
                <div
                  key={i}
                  className="group relative flex gap-4 pb-8 last:pb-0"
                >
                  {/* Time */}
                  <div className="w-16 shrink-0 pt-1 text-right sm:w-20">
                    <span className="text-xs font-bold text-muted-foreground tabular-nums">
                      {item.time}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="relative z-10 mt-1 shrink-0">
                    <div
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full",
                        bg
                      )}
                    >
                      <Icon size={13} className={color} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-xl border bg-card p-4 shadow-sm transition-shadow group-hover:shadow-md">
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
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
