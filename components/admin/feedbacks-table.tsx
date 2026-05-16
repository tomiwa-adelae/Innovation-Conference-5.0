"use client"

import { useState } from "react"
import type { Feedback } from "@prisma/client"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MessageSquareHeart, Search, Star, TrendingUp } from "lucide-react"

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-NG", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date))
}

function StarDisplay({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          className={
            s <= rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted-foreground/30"
          }
        />
      ))}
    </span>
  )
}

const attendLabel: Record<string, string> = {
  yes: "Yes",
  maybe: "Maybe",
  no: "No",
}

export function FeedbacksTable({ feedbacks }: { feedbacks: Feedback[] }) {
  const [query, setQuery] = useState("")
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = feedbacks.filter(
    (f) =>
      f.name.toLowerCase().includes(query.toLowerCase()) ||
      f.email.toLowerCase().includes(query.toLowerCase()),
  )

  const total = feedbacks.length
  const avgOverall =
    total > 0
      ? (feedbacks.reduce((s, f) => s + f.overallRating, 0) / total).toFixed(1)
      : "—"
  const avgSpeaker =
    total > 0
      ? (feedbacks.reduce((s, f) => s + f.speakerRating, 0) / total).toFixed(1)
      : "—"
  const wouldReturn = feedbacks.filter((f) => f.wouldAttendAgain === "yes").length

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <MessageSquareHeart size={20} className="text-primary" />
            <div>
              <p className="text-2xl font-black text-foreground">{total}</p>
              <p className="text-xs text-muted-foreground">Total Responses</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Star size={20} className="text-amber-500" />
            <div>
              <p className="text-2xl font-black text-foreground">{avgOverall}</p>
              <p className="text-xs text-muted-foreground">Avg Overall Rating</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Star size={20} className="text-amber-400" />
            <div>
              <p className="text-2xl font-black text-foreground">{avgSpeaker}</p>
              <p className="text-xs text-muted-foreground">Avg Speaker Rating</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <TrendingUp size={20} className="text-emerald-600" />
            <div>
              <p className="text-2xl font-black text-foreground">{wouldReturn}</p>
              <p className="text-xs text-muted-foreground">Would Return</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by name or email…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Name</TableHead>
              <TableHead className="hidden sm:table-cell">Email</TableHead>
              <TableHead>Overall</TableHead>
              <TableHead className="hidden md:table-cell">Speakers</TableHead>
              <TableHead className="hidden lg:table-cell">Return?</TableHead>
              <TableHead className="hidden lg:table-cell">Date</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="py-12 text-center text-muted-foreground">
                  No feedback submitted yet.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((fb) => (
                <>
                  <TableRow key={fb.id}>
                    <TableCell className="font-medium">{fb.name}</TableCell>
                    <TableCell className="hidden text-sm text-muted-foreground sm:table-cell">
                      {fb.email}
                    </TableCell>
                    <TableCell>
                      <StarDisplay rating={fb.overallRating} />
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <StarDisplay rating={fb.speakerRating} />
                    </TableCell>
                    <TableCell className="hidden text-sm lg:table-cell">
                      {attendLabel[fb.wouldAttendAgain] ?? fb.wouldAttendAgain}
                    </TableCell>
                    <TableCell className="hidden text-xs text-muted-foreground lg:table-cell">
                      {formatDate(fb.createdAt)}
                    </TableCell>
                    <TableCell>
                      <button
                        onClick={() =>
                          setExpanded(expanded === fb.id ? null : fb.id)
                        }
                        className="text-xs font-medium text-primary underline underline-offset-2 hover:no-underline"
                      >
                        {expanded === fb.id ? "Hide" : "View"}
                      </button>
                    </TableCell>
                  </TableRow>
                  {expanded === fb.id && (
                    <TableRow key={`${fb.id}-expanded`} className="bg-muted/20">
                      <TableCell colSpan={7} className="py-4 text-sm">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <p className="font-semibold text-foreground">Favourite Part</p>
                            <p className="mt-1 text-muted-foreground">{fb.favoritePart}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">Improvements</p>
                            <p className="mt-1 text-muted-foreground">{fb.improvements}</p>
                          </div>
                          {fb.comments && (
                            <div className="sm:col-span-2">
                              <p className="font-semibold text-foreground">Additional Comments</p>
                              <p className="mt-1 text-muted-foreground">{fb.comments}</p>
                            </div>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Showing {filtered.length} of {total} responses
      </p>
    </div>
  )
}
