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

export const metadata: Metadata = {
  title: {
    template: "%s | Innovation 5.0",
    default: "Innovation 5.0 — Unlocking the Power of You",
  },
  description:
    "Join 2,000+ young innovators at Innovation 5.0 on May 16, 2026 at Ajayi Crowther University, Oyo. Register free today.",
  keywords: ["Innovation conference", "youth", "Nigeria", "Ajayi Crowther University", "entrepreneurship"],
  openGraph: {
    title: "Innovation 5.0 — Unlocking the Power of You",
    description:
      "Join 2,000+ young innovators at Innovation 5.0 on May 16, 2026 at Ajayi Crowther University, Oyo.",
    url: "https://innovationconference.com.ng",
    siteName: "Innovation Conference",
    locale: "en_NG",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", outfit.variable, fontMono.variable)}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
