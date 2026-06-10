import { Quote } from "lucide-react"
import { Reveal } from "@/components/reveal"

const REVIEWS = [
  {
    name: "Sample Member A",
    result: "Sample result placeholder",
    text: "This is a sample testimonial used to demonstrate how member feedback would appear on the site. The trainers take time to correct your form and the equipment feels top-notch.",
  },
  {
    name: "Sample Member B",
    result: "Sample result placeholder",
    text: "A fictional review showing the layout of a positive experience. Clean, spacious, and never overcrowded — flexible access fits any schedule.",
  },
  {
    name: "Sample Member C",
    result: "Sample result placeholder",
    text: "Demo testimonial content. The personal training concept is presented here to illustrate how coaching highlights might be featured in a real deployment.",
  },
  {
    name: "Sample Member D",
    result: "Sample result placeholder",
    text: "Placeholder feedback demonstrating a friendly community and motivating atmosphere. All names and quotes shown are fictional and for display purposes.",
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Testimonials
        </p>
        <h2 className="mt-4 text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
          What Members Might Say
        </h2>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border glass px-5 py-2">
          <span className="text-sm font-semibold text-primary">Sample Testimonials</span>
          <span className="text-sm text-muted-foreground">· For demonstration only</span>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {REVIEWS.map((review, i) => (
          <Reveal
            key={review.name}
            delay={i * 90}
            className="relative rounded-3xl border border-border bg-card p-8"
          >
            <Quote className="size-8 text-primary/30" />
            <p className="mt-4 text-pretty leading-relaxed text-foreground/90">
              {review.text}
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-base font-bold text-primary">
                {review.name.charAt(0)}
              </span>
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-xs text-primary">{review.result}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
