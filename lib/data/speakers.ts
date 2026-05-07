export type Speaker = {
  id: number
  name: string
  title: string
  subtitle?: string
  bio: string
  image: string
  credentials?: string
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Mrs. Folasade Omobola Adefisayo",
    title: "Principal Consultant & CEO, Leading Learning Ltd",
    subtitle: "Former Hon. Commissioner for Education, Lagos State (2019–2023)",
    credentials: "BSc. Hons. (Ibadan), MBA (Lagos), iPGCE (Nottingham), MA (Ed) Nottingham",
    bio: "Mrs. Folasade Adefisayo founded her education consulting firm in 2014. With nearly 40 years of diverse professional experience, she specializes in teacher training, leadership development, and school transformation. During her tenure as Hon. Commissioner for Education in Lagos State from 2019 to 2023, she spearheaded initiatives to enhance the educational landscape across the state. She serves on numerous boards including the African Leadership Academy (Johannesburg) and Princeton in Africa Advisory Board.",
    image: "/assets/speaker-adefisayo.jpeg",
  },
  {
    id: 2,
    name: "Emmanuel Agida",
    title: "ECOWAS Youth Ambassador",
    bio: "Emmanuel Agida is a distinguished ECOWAS Youth Ambassador and a passionate advocate for youth empowerment and African development. He brings a wealth of experience in youth leadership, policy engagement, and cross-border collaboration across West Africa, inspiring a generation of young Africans to step into their purpose.",
    image: "/assets/speaker-agida.jpeg",
  },
  {
    id: 3,
    name: "Tomiloba Comfort Aremu",
    title: "Content Creator, Speaker & Executive Assistant",
    bio: "Tomiloba Comfort Aremu is a young Nigerian content creator, speaker, and high-achieving storyteller passionate about empowering young adults to live intentionally and pursue excellence. A first-class graduate with a 4.94 CGPA, she speaks to university students and youth audiences on growth, purpose, discipline, and intentional living — showing that young adults can achieve extraordinary things when they show up consistently.",
    image: "/assets/speaker-tomiloba.jpeg",
  },
  {
    id: 4,
    name: "Dr. [Name Pending]",
    title: "Consultant Anesthesiologist & Critical Care Physician",
    subtitle: "Former HOD, Emergency Department — University of Ibadan / UCH",
    bio: "A distinguished medical professional with extensive experience in emergency care, anesthesiology, and critical care medicine at the University of Ibadan and University College Hospital. His story of excellence, service, and impact in Nigeria's healthcare landscape will challenge and inspire every attendee.",
    image: "/assets/speaker-anesthesiologist.jpeg",
  },
]
