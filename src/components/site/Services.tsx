import { useState } from "react";
import { Reveal } from "./Reveal";
import { FloorPlan } from "./FloorPlan";

const services = [
  {
    n: "01",
    title: "Kitchen Remodeling",
    copy: "Transform the heart of your home with a thoughtful combination of design, functionality, and craftsmanship.",
  },
  {
    n: "02",
    title: "Bathroom Remodeling",
    copy: "Create a refined and comfortable bathroom designed around your lifestyle.",
  },
  {
    n: "03",
    title: "Whole-Home Remodeling",
    copy: "Reimagine your living space with a cohesive renovation throughout your home.",
  },
  {
    n: "04",
    title: "Interior Renovation",
    copy: "Refresh and modernize individual spaces with carefully considered materials and finishes.",
  },
  {
    n: "05",
    title: "Custom Remodeling",
    copy: "Bring your ideas to life with a renovation tailored to your home and vision.",
  },
];

export function Services() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section id="services" className="bg-secondary/50 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">Services</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.3rem,5vw,4.25rem)] leading-[1.03]">
                Designed Around the <span className="italic text-bronze">Way You Live.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Service details are editable placeholders and can be refined to match confirmed
              offerings.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div className="hairline">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div
                  onMouseEnter={() => setHover(s.title)}
                  onMouseLeave={() => setHover(null)}
                  className="group relative overflow-hidden border-b border-border py-8 transition-colors duration-500"
                >
                  <div
                    className="absolute inset-0 origin-left scale-x-0 bg-background transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                    aria-hidden
                  />
                  <div className="relative flex items-start gap-6 px-1 transition-transform duration-700 group-hover:translate-x-3">
                    <span className="mt-2 text-[0.65rem] tracking-[0.25em] text-bronze">{s.n}</span>
                    <div>
                      <h3 className="font-display text-2xl md:text-[1.9rem]">{s.title}</h3>
                      <p
                        className={`mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground transition-all duration-500 ${
                          hover === s.title ? "opacity-100" : "opacity-70"
                        }`}
                      >
                        {s.copy}
                      </p>
                    </div>
                    <span className="ml-auto mt-2 text-bronze opacity-0 transition-all duration-500 group-hover:opacity-100">
                      →
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">Explore the home</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Hover a space to see how a remodel is planned room by room.
            </p>
            <div className="mt-6">
              <FloorPlan />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
