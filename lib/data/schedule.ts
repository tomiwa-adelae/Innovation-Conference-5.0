export type ScheduleItem = {
  time: string
  title: string
  description: string
  type: "ceremony" | "session" | "networking" | "award"
}

export const schedule: ScheduleItem[] = [
  {
    time: "11:00 AM",
    title: "Red Carpet & Check-in",
    description: "Arrive, check in at the registration desk, and begin networking with fellow innovators.",
    type: "networking",
  },
  {
    time: "12:00 PM",
    title: "Opening Ceremony",
    description: "Welcome address, prayers, spoken word performances, and the official commencement of Innovation 5.0.",
    type: "ceremony",
  },
  {
    time: "12:30 PM",
    title: "Keynote Address",
    description: "Our opening keynote speaker sets the tone — a powerful message on unlocking the power within you.",
    type: "session",
  },
  {
    time: "1:00 PM",
    title: "Speaker Sessions",
    description: "Back-to-back talks from our featured speakers covering education, healthcare, entrepreneurship, and intentional living.",
    type: "session",
  },
  {
    time: "1:30 PM",
    title: "Panel Discussion & Startup Showcase",
    description: "An interactive panel discussion followed by young founders pitching their ideas live.",
    type: "session",
  },
  {
    time: "2:00 PM",
    title: "Networking & Musical Performance",
    description: "Connect with speakers, sponsors, and fellow attendees over games and live musical performances.",
    type: "networking",
  },
  {
    time: "2:20 PM",
    title: "Final Speaker Session",
    description: "A closing address from our final featured speaker — leaving you with one last spark.",
    type: "session",
  },
  {
    time: "2:45 PM",
    title: "Awards & Closing Ceremony",
    description: "Recognition of outstanding innovators, certificate presentations, and official closing remarks.",
    type: "award",
  },
]
