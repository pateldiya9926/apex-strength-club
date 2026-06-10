"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

const FAQS = [
  {
    q: "What are the gym timings?",
    a: "In this concept, the club is open 24 hours a day, 7 days a week. Whether you're an early riser or a night owl, the facility is always ready with secure access.",
  },
  {
    q: "How much does membership cost?",
    a: "Sample plans start at 999/month. Monthly, Quarterly, and Annual options are shown — with bigger savings the longer you commit. All pricing is for demonstration only.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — the demo features a free trial session so visitors can experience the equipment, trainers, and atmosphere before joining. Try the contact form below.",
  },
  {
    q: "Are personal trainers available?",
    a: "Absolutely. The concept includes certified personal trainers who create customized programs. PT sessions are bundled into the Quarterly and Annual sample plans.",
  },
  {
    q: "Is the gym suitable for beginners?",
    a: "100%. Every new member would get a fitness assessment, and trainers guide you through proper form and a plan tailored to your current level.",
  },
  {
    q: "Is this a real gym?",
    a: "No. Apex Strength Club is a fictional brand created as a portfolio demonstration. All content, names, and details shown are samples and not affiliated with any real business.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            FAQ
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
            Questions? We&apos;ve Got Answers
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-semibold">{faq.q}</span>
                  <Plus
                    className={cn(
                      "size-5 shrink-0 text-primary transition-transform duration-300",
                      open === i && "rotate-45",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
