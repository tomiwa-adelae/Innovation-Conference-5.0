import Image from "next/image"
import { speakers } from "@/lib/data/speakers"

export function SpeakersSection() {
  return (
    <section id="speakers" className="bg-muted/30 py-20">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Featured Speakers
          </p>
          <h2 className="mt-3 text-3xl leading-tight font-black text-foreground sm:text-4xl">
            Voices That Will Move You
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every speaker on our stage has a story worth hearing — stories of
            grit, excellence, and purpose that will challenge and inspire you.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 2xl:grid-cols-4">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-2xl shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover object-top"
                  sizes="192px"
                />
              </div>
              <div className="mt-4 px-2">
                <h3 className="leading-snug font-bold text-foreground">
                  {speaker.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {speaker.title}
                </p>
                {speaker.subtitle && (
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {speaker.subtitle}
                  </p>
                )}
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
