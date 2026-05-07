"use client"

import { useActionState } from "react"
import { adminLogin, type LoginState } from "@/lib/actions/admin"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Loader2 } from "lucide-react"

const initial: LoginState = {}

export function AdminLoginForm() {
  const [state, action, isPending] = useActionState(adminLogin, initial)

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border bg-card p-8 shadow-sm">
          <div className="mb-6 flex flex-col items-center gap-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Lock size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Admin Access</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Innovation 5.0 Attendance Dashboard
              </p>
            </div>
          </div>

          <form action={action} className="space-y-4">
            {state.error && (
              <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                {state.error}
              </div>
            )}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter admin password"
                className="mt-1.5"
                autoFocus
              />
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending && <Loader2 size={16} className="mr-2 animate-spin" />}
              {isPending ? "Verifying…" : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
