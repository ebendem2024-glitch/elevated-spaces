import craftImage from "@/assets/why-craft.png.asset.json";
import openLiving from "@/assets/open-living.png.asset.json";
import { Reveal, RevealImage } from "./Reveal";

const features = [
  { title: "Attention to Detail", copy: "Every element should be considered with care." },
  { title: "Thoughtful Design", copy: "Beautiful spaces should also work beautifully." },
  { title: "Quality Craftsmanship", copy: "Focus on precision, finish, and lasting results." },
  { title: "Your Vision", copy: "The renovation should reflect the homeowner's ideas and lifestyle." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink py-24 text-ink-foreground md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow !text-ink-foreground/50">Why Choose Us</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-[clamp(2.4rem,5.5vw,4.75rem)] leading-[1.02]">
                Craftsmanship <span className="block italic text-champagne">You Can See.</span>
              </h2>
            </Reveal>
            <RevealImage
              src={craftImage.url}
              alt="Custom home remodeling detail showing refined craftsmanship and material quality"
              width={1200}
              height={900}
              className="mt-10 aspect-[4/3] w-full"
              imgClassName="hover:scale-[1.05]"
            />
          </div>

          <div className="self-center">
          <RevealImage
            src={openLiving.url}
            alt="Open plan living room and kitchen renovation with a gray sectional, marble table, and hardwood floors"
            width={1280}
            height={853}
            className="mb-10 aspect-[3/2] w-full"
            imgClassName="hover:scale-[1.04]"
          />
          <div className="grid gap-px bg-ink-foreground/12 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 90}>
                <div className="group h-full bg-ink p-8 transition-colors duration-500 hover:bg-ink-foreground/[0.04] md:p-10">
                  <span className="text-[0.65rem] tracking-[0.3em] text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-2xl">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-foreground/65">{f.copy}</p>
                  <span className="mt-8 block h-px w-10 bg-bronze transition-all duration-700 group-hover:w-20" />
                </div>
              </Reveal>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
