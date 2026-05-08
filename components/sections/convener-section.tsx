import Image from "next/image"
import { convener } from "@/lib/data/convener"

export function ConvenerSection() {
  return (
    <section id="convener" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Meet the Convener
          </p>
          <h2 className="mt-3 text-3xl leading-tight font-black text-foreground sm:text-4xl">
            The Vision Behind the Conference
          </h2>
        </div>

        <div className="mx-auto mt-14 flex max-w-4xl flex-col items-center gap-10 md:flex-row md:items-start">
          <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={convener.image}
              alt={convener.name}
              fill
              className="object-cover object-top"
              //   sizes="256px"
            />
          </div>

          <div className="flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl font-black text-foreground">
              {convener.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-primary">
              {convener.title}
            </p>
            <div className="mt-4 space-y-3">
              {convener.bio.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
