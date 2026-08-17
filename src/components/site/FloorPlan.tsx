import { useEffect, useRef, useState } from "react";

type Room = {
  id: string;
  label: string;
  rect: [number, number, number, number];
};

const S = 46;
const CX = 250;
const CY = 70;

function iso(px: number, py: number) {
  return [(px - py) * 0.866 * S + CX, (px + py) * 0.5 * S + CY] as const;
}

function poly([x, y, w, h]: [number, number, number, number]) {
  return [
    iso(x, y),
    iso(x + w, y),
    iso(x + w, y + h),
    iso(x, y + h),
  ]
    .map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`)
    .join(" ");
}

function center([x, y, w, h]: [number, number, number, number]) {
  return iso(x + w / 2, y + h / 2);
}

const rooms: Room[] = [
  { id: "kitchen", label: "Kitchen", rect: [0, 0, 4, 3] },
  { id: "living", label: "Living Area", rect: [4, 0, 5, 3] },
  { id: "bathroom", label: "Bathroom", rect: [0, 3, 2, 2.5] },
  { id: "bedroom", label: "Bedroom", rect: [2, 3, 4, 2.5] },
  { id: "exterior", label: "Exterior", rect: [6, 3, 3, 2.5] },
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
            const points = poly(r.rect);
            const [lx, ly] = center(r.rect);
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
                  transform: isActive ? "translateY(-12px)" : "translateY(0)",
                  transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <polygon
                  points={points}
                  fill="oklch(0.19 0.006 60)"
                  opacity={isActive ? 0.2 : 0.09}
                  transform="translate(0, 16)"
                  style={{ transition: "opacity 0.5s ease" }}
                />
                <polygon
                  points={points}
                  fill={isActive ? "url(#fpActive)" : "url(#fpFill)"}
                  stroke="oklch(0.19 0.006 60 / 0.35)"
                  strokeWidth="1"
                  style={{ transition: "fill 0.5s ease" }}
                />
                <text
                  x={lx}
                  y={ly}
                  textAnchor="middle"
                  fontSize="10"
                  letterSpacing="2"
                  fill="oklch(0.19 0.006 60)"
                  opacity={isActive ? 0.85 : 0.35}
                  style={{ transition: "opacity 0.5s ease", textTransform: "uppercase" }}
                >
                  {r.label.toUpperCase()}
                </text>
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
