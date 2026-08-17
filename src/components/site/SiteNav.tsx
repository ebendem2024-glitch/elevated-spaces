import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled || open
          ? "bg-background/90 backdrop-blur-xl border-b border-border/70 py-3"
          : "bg-transparent py-6",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#home" className="group leading-none" aria-label="Unlimited Home Remodeling home">
          <span
            className={cn(
              "block font-display text-lg tracking-[0.3em] transition-colors duration-500 md:text-xl",
              scrolled || open ? "text-foreground" : "text-ink-foreground",
            )}
          >
            UNLIMITED
          </span>
          <span
            className={cn(
              "block text-[0.55rem] tracking-[0.42em] transition-colors duration-500 md:text-[0.6rem]",
              scrolled || open ? "text-muted-foreground" : "text-ink-foreground/70",
            )}
          >
            HOME REMODELING
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-300",
                "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-all after:duration-500 hover:after:w-full",
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-ink-foreground/85 hover:text-ink-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={cn(
              "btn-base hidden !py-3 !px-6 lg:inline-flex",
              scrolled ? "btn-solid" : "btn-outline-light",
            )}
          >
            Request a Consultation
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={cn(
                "block h-px w-7 transition-all duration-500",
                scrolled || open ? "bg-foreground" : "bg-ink-foreground",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-7 transition-all duration-500",
                scrolled || open ? "bg-foreground" : "bg-ink-foreground",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-700 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-6 pb-8 pt-6">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="border-b border-border/60 py-4 font-display text-2xl text-foreground transition-colors hover:text-bronze"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-base btn-solid mt-6"
          >
            Request a Consultation
          </a>
          <a href="tel:+12815941615" className="btn-base btn-outline-dark mt-3">
            Call +1 281-594-1615
          </a>
        </div>
      </div>
    </header>
  );
}
