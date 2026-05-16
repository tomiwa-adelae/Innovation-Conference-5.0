"use client"

import { useActionState } from "react"
import { registerAction, type RegisterState } from "@/lib/actions/register"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const initial: RegisterState = { success: false, message: "" }

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null
  return <p className="mt-1 text-xs text-destructive">{errors[0]}</p>
}

export function RegistrationForm() {
  const [state, action, isPending] = useActionState(registerAction, initial)

  if (state.success) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border bg-card px-8 py-14 text-center shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-xl font-bold text-foreground">
          You&apos;re Registered!
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {state.message}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          If you provided an email, a confirmation message is on its way.
        </p>
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

      {/* Full Name */}
      <div>
        <Label htmlFor="fullName">Full Name *</Label>
        <Input
          id="fullName"
          name="fullName"
          placeholder="Your full name"
          className={cn(
            "mt-1.5",
            state.errors?.fullName && "border-destructive"
          )}
        />
        <FieldError errors={state.errors?.fullName} />
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">
          Email Address{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className={cn("mt-1.5", state.errors?.email && "border-destructive")}
        />
        <FieldError errors={state.errors?.email} />
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+234 800 000 0000"
          className={cn("mt-1.5", state.errors?.phone && "border-destructive")}
        />
        <FieldError errors={state.errors?.phone} />
      </div>

      {/* Institution */}
      <div>
        <Label htmlFor="institution">Institution / Organization *</Label>
        <Input
          id="institution"
          name="institution"
          placeholder="Your school or workplace"
          className={cn(
            "mt-1.5",
            state.errors?.institution && "border-destructive"
          )}
        />
        <FieldError errors={state.errors?.institution} />
      </div>

      {/* Ticket Type */}
      <div>
        <Label htmlFor="ticketType">Pass Type *</Label>
        <select
          id="ticketType"
          name="ticketType"
          defaultValue="digital"
          className={cn(
            "mt-1.5 flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
            state.errors?.ticketType && "border-destructive"
          )}
        >
          <option value="digital">Digital Pass (Free)</option>
          {/* <option value="physical">Physical Delegate Pass</option> */}
          {/* <option value="founder">Founder Pass</option> */}
        </select>
        {/* <p className="mt-1 text-xs text-muted-foreground">
          Payment details for Physical &amp; Founder passes will be communicated
          via email.
        </p> */}
        <FieldError errors={state.errors?.ticketType} />
      </div>

      {/* Heard About */}
      <div>
        <Label htmlFor="heardAbout">How did you hear about us? *</Label>
        <select
          id="heardAbout"
          name="heardAbout"
          defaultValue=""
          className={cn(
            "mt-1.5 flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
            state.errors?.heardAbout && "border-destructive"
          )}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="social-media">Social Media</option>
          <option value="friend-family">Friend or Family</option>
          <option value="flyer-poster">Flyer / Poster</option>
          <option value="school-announcement">School Announcement</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="other">Other</option>
        </select>
        <FieldError errors={state.errors?.heardAbout} />
      </div>

      {/* Notes */}
      <div>
        <Label htmlFor="notes">Additional Notes (optional)</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Anything else you'd like us to know?"
          className="mt-1.5 resize-none"
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending && <Loader2 size={16} className="mr-2 animate-spin" />}
        {isPending ? "Registering…" : "Register for Free"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By registering, you agree to receive event-related communications from
        us.
      </p>
    </form>
  )
}
