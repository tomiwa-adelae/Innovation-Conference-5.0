import type { Metadata } from "next"
import { Outfit, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Innovation 5.0",
//     default: "Innovation 5.0 — Unlocking the Power of You",
//   },
//   description:
//     "Join 2,000+ young innovators at Innovation 5.0 on May 16, 2026 at Ajayi Crowther University, Oyo. Register free today.",
//   keywords: ["Innovation conference", "youth", "Nigeria", "Ajayi Crowther University", "entrepreneurship"],
//   openGraph: {
//     title: "Innovation 5.0 — Unlocking the Power of You",
//     description:
//       "Join 2,000+ young innovators at Innovation 5.0 on May 16, 2026 at Ajayi Crowther University, Oyo.",
//     url: "https://innovationconference.com.ng",
//     siteName: "Innovation Conference",
//     locale: "en_NG",
//     type: "website",
//   },
// }

const SITE_URL = "https://innovationconference.com.ng"
const SITE_NAME = "Innovation 5.0"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Join 2,000+ young innovators at Innovation 5.0 on May 16, 2026 at Ajayi Crowther University, Oyo. Register free today",
  keywords: [
    "Innovation conference",
    "youth",
    "Nigeria",
    "Ajayi Crowther University",
    "entrepreneurship",
    "innovation event 2026",
    "youth empowerment Nigeria",
    "Oyo events 2026",
    "free conference Nigeria",
    "online learning Nigeria",
    "e-learning platform",
    "tech courses Nigeria",
    "professional development",
    "certification courses",
    "Innovation 5.0",
    "online education Nigeria",
    "skill acquisition",
    "instructor-led courses",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "Join 2,000+ young innovators at Innovation 5.0 on May 16, 2026 at Ajayi Crowther University, Oyo. Register free today.",
    images: [
      {
        url: "/assets/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Learn. Grow. Innovate.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Join 2,000+ young innovators at Innovation 5.0 on May 16, 2026 at Ajayi Crowther University, Oyo. Register free today.",
    images: ["/assets/images/og-image.jpeg"],
    creator: "@innovation50",
    site: "@innovation50",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", outfit.variable, fontMono.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
