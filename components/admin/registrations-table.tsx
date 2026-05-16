"use client"

import { useState, useTransition } from "react"
import type { Registration } from "@prisma/client"
import { toggleAttendance, adminLogout } from "@/lib/actions/admin"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CheckCircle2, Circle, Search, LogOut, Users, UserCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const ticketLabel: Record<string, string> = {
  digital: "Digital",
  physical: "Physical",
  founder: "Founder",
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-NG", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date))
}

export function RegistrationsTable({ registrations }: { registrations: Registration[] }) {
  const [query, setQuery] = useState("")
  const [pending, startTransition] = useTransition()

  const filtered = registrations.filter(
    (r) =>
      r.fullName.toLowerCase().includes(query.toLowerCase()) ||
      (r.email ?? "").toLowerCase().includes(query.toLowerCase()) ||
      r.institution.toLowerCase().includes(query.toLowerCase()),
  )

  const total = registrations.length
  const attended = registrations.filter((r) => r.attended).length

  function handleToggle(id: string, current: boolean) {
    startTransition(() => {
      toggleAttendance(id, !current)
    })
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Users size={20} className="text-primary" />
            <div>
              <p className="text-2xl font-black text-foreground">{total}</p>
              <p className="text-xs text-muted-foreground">Total Registered</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <UserCheck size={20} className="text-emerald-600" />
            <div>
              <p className="text-2xl font-black text-foreground">{attended}</p>
              <p className="text-xs text-muted-foreground">Attended</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Circle size={20} className="text-muted-foreground" />
            <div>
              <p className="text-2xl font-black text-foreground">{total - attended}</p>
              <p className="text-xs text-muted-foreground">Not Yet Attended</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search + Logout */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, email or institution…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <form action={adminLogout}>
          <Button variant="outline" size="sm" type="submit">
            <LogOut size={14} className="mr-1.5" />
            Logout
          </Button>
        </form>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden md:table-cell">Phone</TableHead>
              <TableHead className="hidden lg:table-cell">Institution</TableHead>
              <TableHead>Pass</TableHead>
              <TableHead className="hidden sm:table-cell">Registered</TableHead>
              <TableHead className="text-center">Attended</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="py-12 text-center text-muted-foreground">
                  No registrations found.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((reg) => (
                <TableRow key={reg.id} className={cn(reg.attended && "bg-emerald-50/50 dark:bg-emerald-950/10")}>
                  <TableCell className="font-medium">{reg.fullName}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{reg.email}</TableCell>
                  <TableCell className="hidden text-sm text-muted-foreground md:table-cell">
                    {reg.phone}
                  </TableCell>
                  <TableCell className="hidden text-sm text-muted-foreground lg:table-cell">
                    {reg.institution}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">
                      {ticketLabel[reg.ticketType] ?? reg.ticketType}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden text-xs text-muted-foreground sm:table-cell">
                    {formatDate(reg.createdAt)}
                  </TableCell>
                  <TableCell className="text-center">
                    <button
                      onClick={() => handleToggle(reg.id, reg.attended)}
                      disabled={pending}
                      aria-label={reg.attended ? "Mark as absent" : "Mark as attended"}
                      className="transition-transform hover:scale-110 disabled:opacity-50"
                    >
                      {reg.attended ? (
                        <CheckCircle2 size={22} className="text-emerald-600" />
                      ) : (
                        <Circle size={22} className="text-muted-foreground" />
                      )}
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Showing {filtered.length} of {total} registrations
      </p>
    </div>
  )
}
