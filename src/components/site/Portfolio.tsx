import { useEffect, useState } from "react";
import kitchen from "@/assets/kitchen.jpg";
import bathroom from "@/assets/bathroom.jpg";
import living from "@/assets/living.jpg";
import wholehome from "@/assets/wholehome.jpg";
import exterior from "@/assets/exterior.jpg";
import craft from "@/assets/craft.jpg";
import openLiving from "@/assets/open-living.png.asset.json";
import kitchenIsland from "@/assets/kitchen-island.png.asset.json";
import { Reveal } from "./Reveal";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  span: string;
  alt: string;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Warm Oak Kitchen",
    category: "Kitchens",
    description:
      "Placeholder project imagery — kitchen remodeling in Houston with light oak cabinetry, a stone island, and warm metal fixtures.",
    image: kitchen,
    span: "sm:col-span-2 sm:row-span-2",
    alt: "Placeholder image of a light oak luxury kitchen remodel with a stone waterfall island",
  },
  {
    id: "p2",
    title: "Stone Spa Bath",
    category: "Bathrooms",
    description:
      "Placeholder project imagery — bathroom remodeling with full-height stone, a freestanding tub, and soft layered lighting.",
    image: bathroom,
    span: "sm:row-span-2",
    alt: "Placeholder image of a stone-clad spa bathroom remodel with a freestanding tub",
  },
  {
    id: "p3",
    title: "Paneled Living Room",
    category: "Interiors",
    description:
      "Placeholder project imagery — interior renovation with wood paneling, a stone fireplace, and tall windows.",
    image: living,
    span: "",
    alt: "Placeholder image of a wood-paneled living room with a stone fireplace",
  },
  {
    id: "p4",
    title: "Open Plan Residence",
    category: "Whole Home",
    description:
      "Placeholder project imagery — whole-home remodeling with an open plan, warm floors, and a cohesive material palette.",
    image: wholehome,
    span: "sm:row-span-2",
    alt: "Placeholder image of an open plan whole-home renovation with warm wood floors",
  },
  {
    id: "p5",
    title: "Evening Facade",
    category: "Exterior",
    description:
      "Placeholder project imagery — exterior renovation with dark cladding, updated glazing, and landscape lighting.",
    image: exterior,
    span: "sm:col-span-2",
    alt: "Placeholder image of a modern home exterior at dusk with warm interior lighting",
  },
  {
    id: "p6",
    title: "Joinery Detail",
    category: "Interiors",
    description: "Placeholder project imagery — custom millwork detail with precise joinery and brass inlay.",
    image: craft,
    span: "",
    alt: "Placeholder image of custom cabinetry joinery detail",
  },
];

const categories = ["All", "Kitchens", "Bathrooms", "Interiors", "Whole Home", "Exterior"];

export function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const open = projects.find((p) => p.id === openId) ?? null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="work" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">Our Work</p>
        </Reveal>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={100}>
            <h2 className="max-w-2xl font-display text-[clamp(2.3rem,5vw,4.25rem)] leading-[1.03]">
              Spaces Worth <span className="italic text-bronze">Coming Home To.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={`text-[0.68rem] uppercase tracking-[0.22em] transition-colors duration-300 ${
                    filter === c ? "text-bronze" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Gallery images are placeholders and are not presented as completed Unlimited Home
          Remodeling projects.
        </p>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-3 md:auto-rows-[260px]">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={i * 70} className={`h-full ${p.span}`}>
              <button
                type="button"
                onClick={() => setOpenId(p.id)}
                className="group relative h-full w-full overflow-hidden bg-secondary text-left"
              >
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-95" />
                <span className="absolute inset-x-0 bottom-0 p-6">
                  <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-champagne">
                    {p.category}
                  </span>
                  <span className="mt-2 block font-display text-2xl text-ink-foreground transition-transform duration-700 group-hover:-translate-y-1">
                    {p.title}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md md:p-10"
          onClick={() => setOpenId(null)}
        >
          <div
            className="grid max-h-full w-full max-w-6xl gap-8 overflow-y-auto lg:grid-cols-[1.6fr_1fr]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={open.image}
              alt={open.alt}
              className="max-h-[75vh] w-full object-cover"
            />
            <div className="self-center text-ink-foreground">
              <p className="eyebrow !text-champagne">{open.category}</p>
              <h3 className="mt-4 font-display text-4xl">{open.title}</h3>
              <p className="mt-5 text-sm leading-relaxed text-ink-foreground/70">{open.description}</p>
              <p className="mt-6 text-xs text-ink-foreground/45">
                Before/after imagery can be added here once project photography is available.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#contact" className="btn-base bg-champagne text-ink hover:bg-ink-foreground">
                  Request a Consultation
                </a>
                <button type="button" onClick={() => setOpenId(null)} className="btn-base btn-outline-light">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
