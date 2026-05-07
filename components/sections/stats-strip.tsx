const stats = [
  { value: "5,000+", label: "Lives Impacted" },
  { value: "2,000+", label: "Expected Attendees" },
  { value: "25+", label: "Visionary Speakers" },
  { value: "5th", label: "Edition Since 2022" },
]

export function StatsStrip() {
  return (
    <section className="border-b bg-primary/5 py-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
