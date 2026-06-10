"use client"

import { useState, type FormEvent } from "react"
import { Phone, MapPin, Clock, Mail, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

const CONTACT_DETAILS = [
  { icon: Phone, label: "Call Us", value: "+91 99999 99999", href: "tel:+919999999999" },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Fitness Avenue, Demo City",
  },
  { icon: Clock, label: "Open Hours", value: "24 Hours · 7 Days a Week" },
  {
    icon: Mail,
    label: "Email",
    value: "hello@apexstrengthclub.com",
    href: "mailto:hello@apexstrengthclub.com",
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Get In Touch
        </p>
        <h2 className="mt-4 text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
          Start Your Transformation Today
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Drop your details and our team will reach out to book your free trial.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {CONTACT_DETAILS.map((detail) => {
              const Wrapper = detail.href ? "a" : "div"
              return (
                <Wrapper
                  key={detail.label}
                  {...(detail.href ? { href: detail.href } : {})}
                  className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                >
                  <detail.icon className="size-6 text-primary" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug">{detail.value}</p>
                </Wrapper>
              )
            })}
          </div>

          <div className="flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-dashed border-border bg-card/40 px-6 py-12 text-center">
            <MapPin className="size-7 text-primary" />
            <p className="text-sm font-semibold">123 Fitness Avenue, Demo City</p>
            <p className="text-xs text-muted-foreground">
              Map placeholder — this is a fictional location for demonstration purposes.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-7"
          >
            {submitted ? (
              <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold">Thank you!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We&apos;ve received your inquiry and will call you shortly to book your free
                  trial.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="Your name" required />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 ..."
                    required
                  />
                </div>
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="goal" className="text-sm font-medium">
                    Your Goal
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  >
                    <option>Weight Loss</option>
                    <option>Muscle Gain</option>
                    <option>Strength Training</option>
                    <option>General Fitness</option>
                    <option>Personal Training</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your fitness goals..."
                    className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Book My Free Trial
                </button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  )
}
