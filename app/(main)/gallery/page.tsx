import type { Metadata } from "next"
import Image from "next/image"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Relive the moments from past Innovation Conference editions.",
}

const photos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/innov-gallery-${i + 1}/800/600`,
  alt: `Innovation Conference moment ${i + 1}`,
}))

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Gallery
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">
            Moments That Matter
          </h1>
          <p className="mt-5 text-base text-white/65">
            A glimpse into the energy, connection, and inspiration of past
            Innovation Conference editions.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container">
          <div className="columns-1 gap-2 sm:columns-2 lg:columns-3 2xl:columns-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group mb-4 overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            More photos coming soon. Follow us on social media for live updates.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
