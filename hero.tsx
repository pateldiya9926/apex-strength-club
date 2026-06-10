import { Reveal } from "@/components/reveal"

const IMAGES = [
  { src: "/images/gallery-1.png", alt: "Premium dumbbells racked in a modern gym", span: "lg:row-span-2" },
  { src: "/images/gallery-2.png", alt: "Running on a treadmill in the cardio zone", span: "" },
  { src: "/images/gallery-3.png", alt: "Battle rope training session", span: "" },
  { src: "/images/gallery-4.png", alt: "Cable machine chest workout", span: "lg:row-span-2" },
  { src: "/images/about-gym.png", alt: "Spacious gym floor with premium equipment", span: "lg:col-span-2" },
]

export function Gallery() {
  return (
    <section id="gallery" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Gallery
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
            Inside Apex Strength Club
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Modern equipment, spacious training floors, and dynamic workout imagery — shown
            here for demonstration purposes.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-4">
          {IMAGES.map((image, i) => (
            <Reveal
              key={image.src}
              delay={i * 70}
              className={`group overflow-hidden rounded-2xl border border-border ${image.span}`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
