import introImage from "@/assets/intro.jpg";
import { Reveal, RevealImage } from "./Reveal";

export function Intro() {
  return (
    <section id="about" className="bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 md:px-10 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="eyebrow">About</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.03]">
              Your Home, <span className="italic text-bronze">Reimagined.</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Every renovation is an opportunity to create a space that feels more beautiful,
              functional, and uniquely yours.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              Unlimited Home Remodeling is a home remodeling contractor based in Houston, Texas —
              working with homeowners on kitchens, bathrooms, interiors, and whole-home renovations.
            </p>
          </Reveal>
          <Reveal delay={380}>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6 hairline pt-8">
              <div>
                <p className="font-display text-3xl">Houston</p>
                <p className="eyebrow mt-1">Texas</p>
              </div>
              <div>
                <p className="font-display text-3xl">Residential</p>
                <p className="eyebrow mt-1">Remodeling</p>
              </div>
              <a href="#contact" className="btn-base btn-outline-dark ml-auto">
                Start a Project
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <RevealImage
            src={introImage}
            alt="Warm white oak staircase with brass handrail in a renovated Houston home interior"
            width={1200}
            height={1504}
            className="aspect-[4/5] w-full"
            imgClassName="hover:scale-[1.04]"
          />
          <Reveal
            delay={400}
            className="absolute -bottom-8 -left-4 hidden bg-ink px-8 py-7 text-ink-foreground shadow-[var(--shadow-lift)] md:block lg:-left-12"
          >
            <p className="font-display text-2xl italic">Craft over shortcuts.</p>
            <p className="eyebrow mt-2 !text-ink-foreground/60">Materials · Detail · Finish</p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-[1400px] px-6 md:mt-32 md:px-10">
        <RevealImage
          src={kitchenIsland.url}
          alt="Open concept kitchen remodel with a navy island, quartz waterfall counter, and warm hardwood floors"
          width={2000}
          height={1200}
          className="aspect-[16/9] w-full"
          imgClassName="hover:scale-[1.03]"
        />
      </div>
    </section>
  );
}
