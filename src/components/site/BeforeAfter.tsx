import { useCallback, useEffect, useRef, useState } from "react";
import beforeImage from "@/assets/before.jpg";
import afterImage from "@/assets/after.jpg";
import { Reveal } from "./Reveal";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, next)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <section className="bg-secondary/50 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">Before &amp; After</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.3rem,5vw,4.25rem)] leading-[1.03]">
                From Vision to <span className="italic text-bronze">Transformation.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Drag the divider to reveal the change. Placeholder imagery — replaceable with project
              photography.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div
            ref={containerRef}
            onPointerDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
            className="relative mt-12 aspect-[16/10] w-full cursor-ew-resize touch-none select-none overflow-hidden bg-ink shadow-[var(--shadow-soft)]"
          >
            <img
              src={afterImage}
              alt="Placeholder after image of a renovated kitchen with light cabinetry and stone counters"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src={beforeImage}
                alt="Placeholder before image of a dated kitchen with oak cabinets and laminate counters"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ width: containerRef.current ? containerRef.current.offsetWidth : "100%", maxWidth: "none" }}
              />
            </div>

            <span className="absolute left-5 top-5 bg-ink/70 px-4 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-ink-foreground backdrop-blur-sm">
              Before
            </span>
            <span className="absolute right-5 top-5 bg-ink-foreground/85 px-4 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-ink backdrop-blur-sm">
              After
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-px bg-ink-foreground/90"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink-foreground/60 bg-ink/45 text-ink-foreground backdrop-blur-md">
                <span className="text-sm tracking-[0.1em]">‹ ›</span>
              </span>
            </div>

            <input
              type="range"
              min={2}
              max={98}
              value={pos}
              aria-label="Before and after comparison slider"
              onChange={(e) => setPos(Number(e.target.value))}
              className="absolute inset-x-0 bottom-4 mx-auto h-1 w-[70%] appearance-none bg-transparent opacity-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
