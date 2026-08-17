import { Reveal } from "./Reveal";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=16234+Alametos+Dr%2C+Houston%2C+TX+77083";

export function Houston() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground md:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.83 0.045 82 / 0.35) 1px, transparent 1px), linear-gradient(90deg, oklch(0.83 0.045 82 / 0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 45%, oklch(0.66 0.068 62 / 0.18), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-6 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow !text-ink-foreground/50">Location</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-[clamp(2.3rem,5vw,4.25rem)] leading-[1.03]">
              Remodeling in <span className="italic text-champagne">Houston, Texas</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <address className="mt-8 not-italic text-lg leading-relaxed text-ink-foreground/75">
              16234 Alametos Dr
              <br />
              Houston, TX 77083
              <br />
              United States
            </address>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base bg-champagne text-ink hover:bg-ink-foreground"
              >
                Get Directions
              </a>
              <a href="tel:+12815941615" className="btn-base btn-outline-light">
                +1 281-594-1615
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/3] w-full overflow-hidden border border-ink-foreground/12 bg-ink/60"
            aria-label="Open Unlimited Home Remodeling location in Google Maps"
          >
            <svg viewBox="0 0 600 450" className="h-full w-full" aria-hidden>
              <rect width="600" height="450" fill="oklch(0.16 0.006 60)" />
              {Array.from({ length: 14 }).map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={i * 34 + 12}
                  x2="600"
                  y2={i * 34 + 12}
                  stroke="oklch(0.83 0.045 82 / 0.10)"
                  strokeWidth="1"
                />
              ))}
              {Array.from({ length: 18 }).map((_, i) => (
                <line
                  key={`v${i}`}
                  x1={i * 34 + 10}
                  y1="0"
                  x2={i * 34 + 10}
                  y2="450"
                  stroke="oklch(0.83 0.045 82 / 0.10)"
                  strokeWidth="1"
                />
              ))}
              <path d="M0 300 L240 300 L240 120 L600 120" stroke="oklch(0.83 0.045 82 / 0.35)" strokeWidth="2" fill="none" />
              <path d="M120 450 L120 220 L420 220 L420 0" stroke="oklch(0.83 0.045 82 / 0.22)" strokeWidth="2" fill="none" />
              <circle cx="300" cy="225" r="52" fill="oklch(0.66 0.068 62 / 0.12)">
                <animate attributeName="r" values="40;70;40" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0;0.35" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="300" cy="225" r="8" fill="oklch(0.83 0.045 82)" />
              <circle cx="300" cy="225" r="16" fill="none" stroke="oklch(0.83 0.045 82 / 0.6)" strokeWidth="1" />
            </svg>
            <span className="absolute bottom-5 left-5 bg-ink/80 px-4 py-3 backdrop-blur-sm">
              <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-champagne">
                Unlimited Home Remodeling
              </span>
              <span className="mt-1 block text-xs text-ink-foreground/70">
                16234 Alametos Dr, Houston, TX 77083
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
