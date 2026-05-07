import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { blogPosts, getBlogPost } from "@/lib/data/blog"
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr))
}

function renderContent(content: string) {
  const lines = content.trim().split("\n")
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()
    if (!line) { i++; continue }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="mt-8 text-xl font-bold text-foreground">
          {line.slice(3)}
        </h2>,
      )
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="mt-4 font-semibold text-foreground">
          {line.slice(2, -2)}
        </p>,
      )
    } else {
      // inline bold
      const parts = line.split(/\*\*(.*?)\*\*/g)
      const rendered = parts.map((part, idx) =>
        idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part,
      )
      elements.push(
        <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
          {rendered}
        </p>,
      )
    }
    i++
  }
  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return (
    <>
      {/* Back */}
      <div className="border-b px-4 py-3">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="px-4 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {post.readTime}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-black leading-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <p className="mt-2 text-sm text-muted-foreground">By {post.author}</p>

          {/* Cover */}
          <div className="relative mt-8 h-64 overflow-hidden rounded-2xl sm:h-80">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="mt-8 text-base">{renderContent(post.content)}</div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 text-center">
            <h3 className="text-xl font-bold text-foreground">Ready to join us?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Register for free and be part of Innovation 5.0 on May 16, 2026.
            </p>
            <Button asChild className="mt-5">
              <Link href="/register">
                Register Free <ArrowRight size={15} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  )
}
