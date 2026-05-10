import type { Metadata } from "next"
import Image from "next/image"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Relive the moments from past Innovation Conference editions.",
}

const photos = [
  { src: "/assets/gallery/DSC_1373-Joe_Photography_abvuyo.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/DSC_1381-Joe_Photography_ppw5tm.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/DSC_1383-Joe_Photography_ulwvwy.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/DSC_1388-Joe_Photography_a7vppr.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/DSC_1389-Joe_Photography_kyopga.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/DSC_1397-Joe_Photography_zvroub.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/DSC_1403-Joe_Photography_s6upxn.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/DSC_1409-Joe_Photography_oubxm0.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/DSC_1410-Joe_Photography_gd4xhl.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/DSC_1412-Joe_Photography_1_zzwe1q.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/DSC_1413-Joe_Photography_x0ahrf.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/DSC_1424-Joe_Photography_f3tcae.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-13_at_8.37.44_PM_lumriz.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-13_at_8.37.45_PM_2_ntzfst.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-13_at_8.37.46_PM_1_i5wqjo.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-13_at_8.37.46_PM_3_zq46m9.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-13_at_8.37.46_PM_qqlgpg.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-13_at_8.37.47_PM_awa1ja.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_6.02.24_PM_1_bokhnb.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_6.30.48_PM_c8cjl9.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.34.17_PM_2_fwgfzv.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.34.18_PM_1_sahpem.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.34.19_PM_nikhr7.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.45.51_PM_ucve3u.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.45.52_PM_hl8ccb.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.45.54_PM_1_lrm8ep.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.45.54_PM_a5uhj5.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.45.55_PM_i43uot.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.45.56_PM_x65mqt.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.45.59_PM_1_yi3jih.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.45.59_PM_jxn72i.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.46.01_PM_1_z4v7am.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.46.01_PM_j6vslh.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.46.02_PM_1_d0k6qz.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.46.02_PM_tdrqzn.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.46.03_PM_1_hsruoh.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.46.03_PM_3_ntiraq.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_7.46.03_PM_isnqmz.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_8.00.37_PM_2_vsxvyt.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_8.00.38_PM_jxopzy.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_8.00.40_PM_2_gfizdq.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_8.00.40_PM_h4mlgf.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_8.00.41_PM_1_uk2twm.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_8.00.43_PM_1_djyxtd.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_8.00.43_PM_2_qajfln.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_8.00.43_PM_xsv0vw.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-14_at_8.00.44_PM_rq33n0.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-15_at_6.17.32_PM_zuxqfc.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-15_at_6.17.33_PM_bbmt9x.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-15_at_6.17.34_PM_1_vmcikp.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-15_at_6.17.34_PM_jum5wl.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-15_at_6.17.35_PM_1_afhdgc.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-15_at_6.17.35_PM_iwuppy.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-15_at_6.17.36_PM_t4kcrd.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-15_at_6.20.49_PM_xolm2q.jpg", alt: "Innovation Conference moment" },
  { src: "/assets/gallery/WhatsApp_Image_2025-04-15_at_6.21.38_PM_edjg2p.jpg", alt: "Innovation Conference moment" },
]

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
          <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 2xl:columns-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group mb-3 overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1200}
                  height={900}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                  style={{ width: "100%", height: "auto" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
