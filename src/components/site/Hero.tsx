import { useEffect, useState } from "react";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  const [offset, setOffset] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const words = ["Transform", "Your", "Home."];
  const words2 = ["Elevate", "Your", "Everyday."];

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="Luxury Houston home interior with white oak millwork and floor-to-ceiling windows after a full remodel"
        width={1920}
        height={1200}
        className="absolute inset-0 h-[115%] w-full object-cover"
        style={{ transform: `translate3d(0, ${offset * 0.25}px, 0) scale(${mounted ? 1 : 1.08})`, transition: "transform 2.4s cubic-bezier(0.22,1,0.36,1)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/85" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-10 md:pb-28">
        <p
          className="eyebrow mb-6 !text-ink-foreground/70 transition-all duration-1000"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(16px)" }}
        >
          Houston, Texas — Home Remodeling
        </p>

        <h1 className="max-w-4xl font-display text-[clamp(2.6rem,7.5vw,6rem)] leading-[0.98] text-ink-foreground">
          <span className="block overflow-hidden">
            {words.map((w, i) => (
              <span
                key={w}
                className="inline-block transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "none" : "translateY(100%)",
                  transitionDelay: `${180 + i * 110}ms`,
                }}
              >
                {w}&nbsp;
              </span>
            ))}
          </span>
          <span className="block overflow-hidden italic text-champagne">
            {words2.map((w, i) => (
              <span
                key={w}
                className="inline-block transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "none" : "translateY(100%)",
                  transitionDelay: `${480 + i * 110}ms`,
                }}
              >
                {w}&nbsp;
              </span>
            ))}
          </span>
        </h1>

        <p
          className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/80 transition-all duration-1000 md:text-lg"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(20px)", transitionDelay: "900ms" }}
        >
          Thoughtful remodeling and craftsmanship designed to bring your vision to life.
        </p>

        <div
          className="mt-10 flex flex-col gap-3 transition-all duration-1000 sm:flex-row"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(20px)", transitionDelay: "1100ms" }}
        >
          <a href="#contact" className="btn-base bg-champagne text-ink hover:bg-ink-foreground">
            Request a Consultation
          </a>
          <a href="#work" className="btn-base btn-outline-light">
            Explore Our Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-4 md:right-10 md:flex">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-ink-foreground/60">Scroll</span>
        <span className="relative block h-16 w-px overflow-hidden bg-ink-foreground/25">
          <span className="absolute inset-x-0 top-0 h-6 animate-[scrollLine_2.4s_ease-in-out_infinite] bg-champagne" />
        </span>
      </div>

      <style>{`@keyframes scrollLine{0%{transform:translateY(-100%)}100%{transform:translateY(400%)}}`}</style>
    </section>
  );
}
