import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/data/blog"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, updates, and insights from the Innovation Conference team.",
}

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr))
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Blog
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">
            Stories & Updates
          </h1>
          <p className="mt-5 text-base text-white/65">
            Insights, speaker spotlights, and everything you need to prepare for
            Innovation 5.0.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-primary/90 px-2.5 py-0.5 text-xs font-medium text-white">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 line-clamp-2 text-base leading-snug font-bold text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Read more{" "}
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
