import { Flame, Dumbbell, Zap, Activity, HeartPulse, UserCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const PROGRAMS = [
  { icon: Flame, title: "Weight Loss", desc: "High-burn programs combining HIIT, cardio and nutrition to shed fat fast." },
  { icon: Dumbbell, title: "Muscle Gain", desc: "Progressive hypertrophy training to build lean, defined muscle." },
  { icon: Zap, title: "Strength Training", desc: "Compound lifting protocols to maximize raw power and performance." },
  { icon: Activity, title: "Functional Fitness", desc: "Mobility and full-body movement for everyday strength and athleticism." },
  { icon: HeartPulse, title: "Cardio Conditioning", desc: "Boost endurance and heart health with structured cardio sessions." },
  { icon: UserCheck, title: "Personal Training", desc: "One-on-one coaching with a plan built entirely around your goals." },
]

export function Programs() {
  return (
    <section id="programs" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Training Programs
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
            Find the Program That Moves You
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Whatever your goal, we have a results-driven program led by experts to get you there.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, i) => (
            <Reveal
              key={program.title}
              delay={i * 70}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7"
            >
              <div className="absolute -right-6 -top-6 size-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              <program.icon className="relative size-8 text-primary" />
              <h3 className="relative mt-5 text-lg font-bold">{program.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {program.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
