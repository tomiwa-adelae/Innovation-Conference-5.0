"use client"

import { useActionState } from "react"
import { contactAction, type ContactState } from "@/lib/actions/contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2 } from "lucide-react"

const initial: ContactState = { success: false, message: "" }

export function ContactForm() {
  const [state, action, isPending] = useActionState(contactAction, initial)

  if (state.success) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border bg-card px-8 py-14 text-center shadow-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-lg font-bold text-foreground">Message Sent!</h3>
        <p className="max-w-sm text-sm text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-5">
      {state.message && !state.success && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" name="name" placeholder="Full name" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" className="mt-1.5" />
        </div>
      </div>

      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" placeholder="What's this about?" className="mt-1.5" />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us how we can help…"
          className="mt-1.5 resize-none"
          rows={5}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending && <Loader2 size={16} className="mr-2 animate-spin" />}
        {isPending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  )
}
