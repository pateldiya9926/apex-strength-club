import { AtSign } from "lucide-react"
import { Reveal } from "@/components/reveal"

const TRAINERS = [
  {
    name: "Marcus Vale",
    role: "Head Strength Coach",
    exp: "10+ yrs · Powerlifting",
    img: "/images/trainer-1.png",
  },
  {
    name: "Elena Cross",
    role: "Personal Trainer",
    exp: "7+ yrs · Weight Loss & Toning",
    img: "/images/trainer-2.png",
  },
  {
    name: "Devon Reyes",
    role: "Performance Coach",
    exp: "8+ yrs · Functional Fitness",
    img: "/images/trainer-3.png",
  },
]

export function Trainers() {
  return (
    <section id="trainers" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Meet Our Trainers
        </p>
        <h2 className="mt-4 text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
          Coaches Who Care About Your Results
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TRAINERS.map((trainer, i) => (
          <Reveal
            key={trainer.name}
            delay={i * 100}
            className="group relative overflow-hidden rounded-3xl border border-border"
          >
            <img
              src={trainer.img || "/placeholder.svg"}
              alt={`${trainer.name}, ${trainer.role} (sample trainer profile)`}
              className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {trainer.exp}
              </p>
              <h3 className="mt-1 text-xl font-bold">{trainer.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{trainer.role}</p>
                <AtSign className="size-4 text-muted-foreground transition-colors hover:text-primary" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
