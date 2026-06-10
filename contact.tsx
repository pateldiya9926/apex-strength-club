import { Target, Heart } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src="/images/about-gym.png"
              alt="Spacious interior of a premium gym with modern equipment"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-2xl border border-border glass px-6 py-5 sm:right-6">
            <p className="text-3xl font-extrabold text-primary">Demo</p>
            <p className="text-xs text-muted-foreground">Sample showcase content</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            About Us
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
            Premium Fitness, Designed for Everyone
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Apex Strength Club is a fictional fitness brand built to demonstrate a modern,
            high-converting gym website. The concept pairs premium equipment, certified
            coaching, and a motivating environment — all presented through a clean, responsive
            interface designed to turn visitors into members.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <Target className="size-7 text-primary" />
              <h3 className="mt-3 font-bold">Our Mission</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Make high-quality fitness accessible and affordable for every body type and
                goal.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <Heart className="size-7 text-primary" />
              <h3 className="mt-3 font-bold">Our Vision</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Build the strongest, healthiest, and most supportive fitness community
                possible.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
