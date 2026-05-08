import Image from "next/image"
import { panelists } from "@/lib/data/panelists"

export function PanelistsSection() {
  return (
    <section id="panelists" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Panelists
          </p>
          <h2 className="mt-3 text-3xl leading-tight font-black text-foreground sm:text-4xl">
            Perspectives for the Conversation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Meet the voices joining our panel discussion on innovation, purpose,
            and what it takes to build boldly.
          </p>
        </div>

        <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {panelists.map((panelist) => (
            <div key={panelist.id} className="group text-center">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-64 overflow-hidden rounded-2xl shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <Image
                  src={panelist.image}
                  alt={panelist.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 256px"
                />
              </div>
              <h3 className="mt-4 text-base leading-snug font-bold text-foreground">
                {panelist.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {panelist.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
