import { sponsors } from "@/lib/data/sponsors"
import { cn } from "@/lib/utils"

const tierLabel: Record<string, string> = {
  gold: "Gold Sponsors",
  silver: "Silver Sponsors",
  partner: "Partners",
}

const tierStyle: Record<string, string> = {
  gold: "border-gold/40 bg-gold/5 text-foreground font-bold text-lg",
  silver: "border-border bg-muted/30 text-foreground font-semibold",
  partner: "border-border bg-card text-muted-foreground text-sm",
}

export function SponsorsSection() {
  const tiers = (["gold", "silver", "partner"] as const).map((tier) => ({
    tier,
    items: sponsors.filter((s) => s.tier === tier),
  }))

  return (
    <section className="bg-muted/30 py-20">
      <div className="container">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Sponsors & Partners
          </p>
          <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
            Those Who Believe in This Mission
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Grateful to the organisations investing in the next generation of
            African innovators.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {tiers.map(({ tier, items }) =>
            items.length === 0 ? null : (
              <div key={tier}>
                <p className="mb-5 text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  {tierLabel[tier]}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {items.map((sponsor) => (
                    <div
                      key={sponsor.id}
                      className={cn(
                        "rounded-xl border px-6 py-4 text-center transition-shadow hover:shadow-md",
                        tierStyle[tier]
                      )}
                    >
                      {sponsor.name}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Interested in sponsoring?{" "}
          <a
            href="mailto:admin@innovationconference.com.ng"
            className="font-medium text-primary underline underline-offset-4 hover:no-underline"
          >
            Get in touch
          </a>
        </p>
      </div>
    </section>
  )
}
