export type Sponsor = {
  id: number
  name: string
  tier: "gold" | "silver" | "partner"
}

export const sponsors: Sponsor[] = [
  { id: 1, name: "MSME Africa", tier: "gold" },
  { id: 2, name: "Cornerstone International Foundation", tier: "gold" },
  { id: 3, name: "ELAB Academy", tier: "silver" },
  { id: 4, name: "ECOWAS Youth", tier: "silver" },
  { id: 5, name: "APEX Network", tier: "partner" },
  { id: 6, name: "Kollegescout", tier: "partner" },
  { id: 7, name: "ACU Student Assembly", tier: "partner" },
  { id: 8, name: "Crownstar City Real Estate", tier: "partner" },
  { id: 9, name: "EDUSPUR", tier: "partner" },
  { id: 10, name: "The Valokafor Company", tier: "partner" },
  { id: 11, name: "The Phoneprenuer Global", tier: "partner" },
]
