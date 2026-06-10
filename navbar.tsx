import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

const PLANS = [
  {
    name: "Monthly",
    price: "999",
    period: "/month",
    desc: "Perfect for getting started.",
    features: ["Full gym access", "Cardio & strength zones", "Locker facility", "Free fitness assessment"],
    featured: false,
  },
  {
    name: "Quarterly",
    price: "2,499",
    period: "/3 months",
    desc: "Our most popular plan.",
    features: [
      "Everything in Monthly",
      "1 personal training session/month",
      "Custom diet guidance",
      "Progress tracking",
      "Save 17%",
    ],
    featured: true,
  },
  {
    name: "Annual",
    price: "7,999",
    period: "/year",
    desc: "Best value for serious lifters.",
    features: [
      "Everything in Quarterly",
      "Weekly PT sessions",
      "Personalized nutrition plan",
      "Priority booking",
      "Save 33%",
    ],
    featured: false,
  },
]

export function Membership() {
  return (
    <section id="plans" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Membership Plans
        </p>
        <h2 className="mt-4 text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
          Affordable Plans, Premium Experience
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Transparent pricing with no hidden fees. Choose the plan that fits your journey.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {PLANS.map((plan, i) => (
          <Reveal
            key={plan.name}
            delay={i * 100}
            className={cn(
              "relative flex flex-col rounded-3xl border p-8",
              plan.featured
                ? "border-primary bg-card shadow-[0_0_40px_-10px_rgba(29,155,240,0.4)]"
                : "border-border bg-card",
            )}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                Best Value
              </span>
            )}
            <h3 className="text-lg font-bold uppercase tracking-wide">{plan.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
            <div className="mt-5 flex items-end gap-1">
              <span className="text-2xl font-bold text-muted-foreground">₹</span>
              <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
              <span className="mb-1 text-sm text-muted-foreground">{plan.period}</span>
            </div>

            <ul className="mt-7 flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={cn(
                "mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.03]",
                plan.featured
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-secondary text-foreground hover:bg-secondary/70",
              )}
            >
              Choose {plan.name}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
