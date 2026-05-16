import Link from "next/link"
import { ArrowRight, MessageSquareHeart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeedbackSection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <MessageSquareHeart size={28} />
        </div>
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">
          Post-Event
        </p>
        <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
          Share Your Experience
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Innovation 5.0 was only possible because of you. Tell us what you
          loved, what we should improve, and help us build an even better
          Innovation 6.0.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild>
            <Link href="/feedback">
              Give Feedback
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Takes less than 2 minutes · Anonymous
        </p>
      </div>
    </section>
  )
}
