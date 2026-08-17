import { useEffect, useRef, useState } from "react";

type Room = {
  id: string;
  label: string;
  points: string;
};

const rooms: Room[] = [
  { id: "kitchen", label: "Kitchen", points: "40,120 200,40 320,100 160,180" },
  { id: "living", label: "Living Area", points: "170,190 330,110 460,172 300,252" },
  { id: "bathroom", label: "Bathroom", points: "20,180 140,240 60,280 -0,250" },
  { id: "bedroom", label: "Bedroom", points: "150,255 300,330 200,380 60,310" },
  { id: "exterior", label: "Exterior", points: "310,262 470,182 520,206 360,286" },
];

export function FloorPlan() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState(0);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = 1 - (rect.top + rect.height / 2) / window.innerHeight;
      setTilt(Math.max(-1, Math.min(1, progress)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapRef} className="relative select-none">
      <div
        className="transition-transform duration-500 ease-out"
        style={{
          transform: `perspective(1400px) rotateX(${10 - tilt * 8}deg) rotateZ(${-2 + tilt * 3}deg) translateY(${tilt * -14}px)`,
        }}
      >
        <svg viewBox="-20 20 560 380" className="h-auto w-full" role="img" aria-label="Stylized floor plan of a remodeled home">
          <defs>
            <linearGradient id="fpFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.99 0.005 85)" />
              <stop offset="100%" stopColor="oklch(0.92 0.014 80)" />
            </linearGradient>
            <linearGradient id="fpActive" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.83 0.045 82)" />
              <stop offset="100%" stopColor="oklch(0.66 0.068 62)" />
            </linearGradient>
          </defs>

          {rooms.map((r) => {
            const isActive = active === r.id;
            return (
              <g
                key={r.id}
                onMouseEnter={() => setActive(r.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(r.id)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                className="cursor-pointer outline-none"
                style={{
                  transform: isActive ? "translateY(-10px)" : "translateY(0)",
                  transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <polygon
                  points={r.points}
                  fill={isActive ? "url(#fpActive)" : "url(#fpFill)"}
                  stroke="oklch(0.19 0.006 60 / 0.35)"
                  strokeWidth="1"
                  style={{ transition: "fill 0.5s ease" }}
                />
                <polygon
                  points={r.points}
                  fill="oklch(0.19 0.006 60)"
                  opacity={isActive ? 0.18 : 0.08}
                  transform="translate(0, 14)"
                  style={{ transition: "opacity 0.5s ease" }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {rooms.map((r) => (
          <button
            key={r.id}
            type="button"
            onMouseEnter={() => setActive(r.id)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setActive(r.id)}
            className={`btn-base !px-4 !py-2 !text-[0.6rem] ${
              active === r.id ? "btn-solid" : "btn-outline-dark"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>
    </div>
  );
}
