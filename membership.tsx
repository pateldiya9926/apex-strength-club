import { ArrowRight, Sparkles } from "lucide-react"

const STATS = [
  { value: "Demo", label: "Sample Content" },
  { value: "24/7", label: "Concept Access" },
  { value: "100%", label: "Responsive UI" },
  { value: "SEO", label: "Optimized" },
]

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-gym.png"
          alt="Athlete performing a heavy deadlift in a premium dark gym"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-16 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="size-3.5" />
            Portfolio Demo Project
          </div>

          <h1 className="text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Transform Your Body.
            <span className="mt-2 block text-primary text-glow">Transform Your Life.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Where affordability meets quality. Premium equipment, certified trainers, and a
            community built to push you past your limits — anytime, day or night.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#plans"
              className="group flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Join Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-full border border-border glass px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Book Free Trial
            </a>
          </div>

          <p className="mt-8 max-w-md text-xs leading-relaxed text-muted-foreground/80">
            Sample marketing copy and imagery shown for demonstration only. This is a
            fictional brand created to showcase modern web design.
          </p>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border glass sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-card/40 px-5 py-5 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-extrabold text-primary sm:text-3xl">{stat.value}</dd>
              <p className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
