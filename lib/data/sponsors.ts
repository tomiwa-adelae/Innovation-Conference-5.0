export type Sponsor = {
  id: number
  name: string
  tier: "gold" | "silver" | "partner"
  logo?: string
}

export const sponsors: Sponsor[] = [
  { id: 1, name: "MSME Africa", tier: "gold" },
  {
    id: 2,
    name: "Cornerstone International Foundation",
    tier: "gold",
    logo: "/assets/sponsors/WhatsApp Image 2026-05-08 at 1.20.09 PM (1).jpeg",
  },
  { id: 3, name: "ELAB Academy", tier: "silver" },
  { id: 4, name: "ECOWAS Youth", tier: "silver" },
  { id: 6, name: "Kollegescout", tier: "partner" },
  {
    id: 7,
    name: "ACU Student Assembly",
    tier: "partner",
    logo: "/assets/sponsors/WhatsApp Image 2026-05-08 at 1.20.08 PM.jpeg",
  },
  {
    id: 8,
    name: "Crownstar City Real Estate",
    tier: "partner",
    logo: "/assets/sponsors/WhatsApp Image 2026-05-08 at 1.20.09 PM (2).jpeg",
  },
  { id: 9, name: "EDUSPUR", tier: "partner" },
  { id: 11, name: "The Phoneprenuer Global", tier: "partner" },
  {
    id: 12,
    name: "School of Innovation",
    tier: "partner",
    logo: "/assets/sponsors/WhatsApp Image 2026-05-08 at 1.20.09 PM.jpeg",
  },
]
