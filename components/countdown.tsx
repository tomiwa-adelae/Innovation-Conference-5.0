"use client"

import { useEffect, useState } from "react"

const EVENT_DATE = new Date("2026-05-16T11:00:00")

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTimeLeft(getTimeLeft())
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!timeLeft) return null

  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return (
      <p className="text-center text-sm font-medium text-gold">
        The event is live! 🎉
      </p>
    )
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ]

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <span className="min-w-[2.5rem] rounded-md bg-white/10 px-2 py-1 text-center text-2xl font-bold tabular-nums text-white sm:text-3xl">
              {pad(value)}
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-widest text-white/50">
              {label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="mb-4 text-xl font-bold text-white/30">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
