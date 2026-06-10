import { Dumbbell, Phone, MapPin, AtSign, Send } from "lucide-react"

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Membership", href: "#plans" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Dumbbell className="size-5" />
              </span>
              <span className="text-lg font-extrabold uppercase tracking-tight leading-none">
                Apex
                <span className="block text-[11px] font-semibold tracking-[0.3em] text-primary">
                  STRENGTH CLUB
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A fictional premium fitness brand built to showcase modern web design — open 24
              hours in this concept, every day.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <AtSign className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <Send className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide">Get In Touch</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                Poojan Complex, Modhera Road, Mehsana, Gujarat
              </li>
              <li>
                <a
                  href="tel:+917043324247"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0 text-primary" />
                  +91 70433 24247
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} 24 Hour The Gym. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Best Gym in Mehsana, Gujarat</p>
        </div>
      </div>
    </footer>
  )
}
