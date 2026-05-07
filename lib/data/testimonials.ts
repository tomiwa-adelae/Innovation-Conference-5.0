export type Testimonial = {
  id: number
  name: string
  role: string
  institution: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ayanbola Ayangbenro",
    role: "300L Student",
    institution: "Ajayi Crowther University",
    quote:
      "Attending the Innovation conference was a turning point for me. The networking opportunities led directly to my employment as a Virtual Assistant. I left with not just knowledge, but real connections that changed my life.",
  },
  {
    id: 2,
    name: "Chiamaka Obi",
    role: "Graduate",
    institution: "University of Lagos",
    quote:
      "The panel discussions were incredibly insightful. I came in unsure of my career path and left with a clear direction and mentors willing to guide me. It was absolutely transformative.",
  },
  {
    id: 3,
    name: "David Adewale",
    role: "Young Entrepreneur",
    institution: "Lagos Business School",
    quote:
      "Innovation gave my startup the visibility it needed. Pitching in front of real mentors was an experience I couldn't have gotten anywhere else. The community built here is exceptional.",
  },
  {
    id: 4,
    name: "Fatima Bello",
    role: "Final Year Student",
    institution: "Ajayi Crowther University",
    quote:
      "This conference showed me that young Nigerians are doing incredible things. It reignited my passion for innovation and reminded me that the power truly lies within us.",
  },
]
