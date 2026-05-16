"use client"

import { useActionState, useState } from "react"
import { feedbackAction, type FeedbackState } from "@/lib/actions/feedback"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const initial: FeedbackState = { success: false, message: "" }

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null
  return <p className="mt-1 text-xs text-destructive">{errors[0]}</p>
}

function StarRating({
  name,
  label,
  error,
}: {
  name: string
  label: string
  error?: string[]
}) {
  const [hovered, setHovered] = useState(0)
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-2 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setSelected(star)}
            className="rounded p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Star
              size={28}
              className={cn(
                "transition-colors",
                star <= (hovered || selected)
                  ? "fill-amber-400 text-amber-400"
                  : "fill-muted text-muted-foreground/40"
              )}
            />
          </button>
        ))}
        {selected > 0 && (
          <span className="ml-2 text-sm text-muted-foreground">
            {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][selected]}
          </span>
        )}
      </div>
      <input type="hidden" name={name} value={selected} />
      <FieldError errors={error} />
    </div>
  )
}

export function FeedbackForm() {
  const [state, action, isPending] = useActionState(feedbackAction, initial)

  if (state.success) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border bg-card px-8 py-14 text-center shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-xl font-bold text-foreground">Feedback Received!</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-6">
      {state.message && !state.success && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Your Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Full name"
            className={cn("mt-1.5", state.errors?.name && "border-destructive")}
          />
          <FieldError errors={state.errors?.name} />
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className={cn("mt-1.5", state.errors?.email && "border-destructive")}
          />
          <FieldError errors={state.errors?.email} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <StarRating
          name="overallRating"
          label="Overall Experience *"
          error={state.errors?.overallRating}
        />
        <StarRating
          name="speakerRating"
          label="Speaker Quality *"
          error={state.errors?.speakerRating}
        />
      </div>

      <div>
        <Label htmlFor="favoritePart">What did you enjoy most? *</Label>
        <Textarea
          id="favoritePart"
          name="favoritePart"
          placeholder="Tell us the highlight of your experience…"
          className={cn(
            "mt-1.5 resize-none",
            state.errors?.favoritePart && "border-destructive"
          )}
          rows={3}
        />
        <FieldError errors={state.errors?.favoritePart} />
      </div>

      <div>
        <Label htmlFor="improvements">What could we improve? *</Label>
        <Textarea
          id="improvements"
          name="improvements"
          placeholder="Any suggestions for Innovation 6.0…"
          className={cn(
            "mt-1.5 resize-none",
            state.errors?.improvements && "border-destructive"
          )}
          rows={3}
        />
        <FieldError errors={state.errors?.improvements} />
      </div>

      <div>
        <Label htmlFor="wouldAttendAgain">Would you attend Innovation 6.0? *</Label>
        <select
          id="wouldAttendAgain"
          name="wouldAttendAgain"
          defaultValue=""
          className={cn(
            "mt-1.5 flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
            state.errors?.wouldAttendAgain && "border-destructive"
          )}
        >
          <option value="" disabled>Select an answer</option>
          <option value="yes">Yes, definitely!</option>
          <option value="maybe">Maybe</option>
          <option value="no">No</option>
        </select>
        <FieldError errors={state.errors?.wouldAttendAgain} />
      </div>

      <div>
        <Label htmlFor="comments">Additional Comments (optional)</Label>
        <Textarea
          id="comments"
          name="comments"
          placeholder="Anything else you'd like to share…"
          className="mt-1.5 resize-none"
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending && <Loader2 size={16} className="mr-2 animate-spin" />}
        {isPending ? "Submitting…" : "Submit Feedback"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Your feedback is anonymous and helps us plan a better event next year.
      </p>
    </form>
  )
}
