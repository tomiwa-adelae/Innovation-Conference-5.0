export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  readTime: string
  coverImage: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-expect-at-innovation-5",
    title: "What to Expect at Innovation 5.0: Unlocking the Power of You",
    excerpt:
      "Get a sneak peek into what's in store at Innovation 5.0 — the sessions, the speakers, and the opportunities waiting for you on May 16, 2026.",
    content: `Innovation 5.0 is just around the corner, and the anticipation is building. Themed **"Unlocking the Power of You,"** this year's conference promises to be the most impactful edition yet.

## What Makes Innovation 5.0 Different?

Since our inaugural conference in 2022, we've impacted over 5,000 lives. This year, we're expecting over 2,000 attendees — our largest gathering yet. Every edition we've grown, and Innovation 5.0 is no different.

## Highlights to Look Forward To

**World-Class Speakers** — We've assembled a remarkable lineup including a former Lagos State Commissioner for Education, an ECOWAS Youth Ambassador, a first-class graduate inspiring a generation, and a distinguished medical professional from the University of Ibadan.

**The Innovation Hub** — For the first time, we're expanding our Startup Showcase. Young founders will pitch their ideas live to an audience and receive real-time mentorship.

**Networking That Works** — Past attendees have walked away with jobs, partnerships, and life-changing mentors. Innovation 5.0 is designed to maximize meaningful connections.

**Awards & Recognition** — We'll be honouring outstanding young innovators already making a difference in their communities.

## How to Prepare

- **Register early** — seats are limited
- **Bring your business cards** — you'll want them
- **Come with questions** — our speakers love engagement
- **Bring a friend** — innovation is better together

See you on May 16th at Alakija Folorunsho Hall, Ajayi Crowther University!`,
    date: "2026-04-01",
    author: "John Ogunjide",
    category: "Event Preview",
    readTime: "4 min read",
    coverImage: "https://picsum.photos/seed/innovation1/800/450",
  },
  {
    slug: "5-reasons-to-register-for-innovation-5",
    title: "5 Reasons You Should Register for Innovation 5.0 Right Now",
    excerpt:
      "Still on the fence? Here are five compelling reasons why attending Innovation 5.0 could be the best decision you make this year.",
    content: `If you've been thinking about registering for Innovation 5.0, let us make the decision easier. Here are five reasons you simply cannot afford to miss this conference.

## 1. It's Completely Free

Yes, really. Innovation 5.0 registration is free. There is no financial barrier between you and this life-changing experience. Just show up.

## 2. Real Connections, Real Opportunities

Our attendees don't just leave with inspiration — they leave with connections. At previous editions, attendees secured employment, found co-founders, and gained mentors simply by showing up and engaging. One attendee networked her way into a Virtual Assistant role on the day of the event.

## 3. Speakers Who've Actually Done It

We don't invite speakers who only talk theory. Every speaker at Innovation 5.0 has a track record of real-world achievement — whether in government, healthcare, business, or creative work. You'll hear from people who've been exactly where you want to go.

## 4. The Innovation Hub

Have a business idea? Innovation 5.0 is your stage. Our Startup Showcase gives young founders the chance to pitch, receive feedback, and connect with potential collaborators.

## 5. You Deserve It

*"The best investment you can make is in yourself."* Innovation 5.0 is a full-day investment in your growth, your network, and your future. You work hard — come and be inspired.

**Register now. Seats are limited.**`,
    date: "2026-04-15",
    author: "Innovation Team",
    category: "Registration",
    readTime: "3 min read",
    coverImage: "https://picsum.photos/seed/innovation2/800/450",
  },
  {
    slug: "meet-our-speakers-innovation-5",
    title: "Meet Our Speakers: The Voices Behind Innovation 5.0",
    excerpt:
      "Get to know the incredible lineup of speakers who will grace the stage at Innovation 5.0 on May 16, 2026.",
    content: `At Innovation 5.0, our speakers are more than just names on a flyer. They are accomplished individuals who carry stories of grit, excellence, and purpose. Here's a brief introduction to the voices you'll hear at this year's conference.

## Mrs. Folasade Omobola Adefisayo

With nearly four decades of professional experience, Mrs. Adefisayo has dedicated her career to transforming education in Nigeria. As the former Hon. Commissioner for Education in Lagos State (2019–2023), she spearheaded some of the most impactful educational reforms in the state's history. Today, she leads Leading Learning Ltd and sits on boards including the African Leadership Academy (Johannesburg) and Princeton in Africa Advisory Board. Her message is for every young person who dares to believe in a better future.

## Emmanuel Agida

Emmanuel Agida carries the voice of Africa's youth across the West African sub-region as an ECOWAS Youth Ambassador. His work in youth advocacy, leadership development, and policy engagement has made him one of the most recognizable young voices on the continent. His session will challenge you to think beyond your immediate environment.

## Tomiloba Comfort Aremu

Tomiloba is a first-class graduate with a 4.94 CGPA who has turned her academic excellence and personal faith into a platform for inspiring other young people. As a content creator and speaker, she speaks with authenticity and lived experience that deeply resonates with her generation. Her message? You can pursue excellence without losing your softness, faith, or identity.

## Our Medical Expert

We're also excited to welcome a distinguished Consultant Anesthesiologist and Critical Care Physician from the University of Ibadan and University College Hospital, who will bring a unique perspective on innovation, excellence, and service in Nigeria's healthcare sector.

**Full speaker biographies are on our website. Register today to hear them in person.**`,
    date: "2026-04-28",
    author: "Innovation Team",
    category: "Speakers",
    readTime: "5 min read",
    coverImage: "https://picsum.photos/seed/innovation3/800/450",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
