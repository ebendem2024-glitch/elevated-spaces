import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Consultation", copy: "Tell us about your home, ideas, and goals." },
  { n: "02", title: "Planning", copy: "Develop a thoughtful approach for your renovation." },
  { n: "03", title: "Transformation", copy: "Bring the design and craftsmanship together." },
  { n: "04", title: "Reveal", copy: "Step into a space designed around you." },
];

export function Process() {
  return (
    <section id="process" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">The Process</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.3rem,5vw,4.25rem)] leading-[1.03]">
            A Better Way to <span className="italic text-bronze">Renovate.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="group relative h-full bg-background p-8 transition-colors duration-500 hover:bg-secondary/60 md:p-10">
                <span className="font-display text-5xl text-border transition-colors duration-500 group-hover:text-bronze">
                  {s.n}
                </span>
                <h3 className="mt-8 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
