const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-10 pt-20 text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 border-b border-ink-foreground/12 pb-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-[0.22em]">UNLIMITED</p>
            <p className="text-[0.6rem] tracking-[0.42em] text-ink-foreground/60">HOME REMODELING</p>
            <p className="mt-6 max-w-sm font-display text-2xl italic text-champagne">
              Transform Your Home. Elevate Your Everyday.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="eyebrow !text-ink-foreground/45">Navigate</p>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-foreground/75 transition-colors hover:text-champagne"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="eyebrow !text-ink-foreground/45">Contact</p>
            <a
              href="tel:+12815941615"
              className="text-sm text-ink-foreground/75 transition-colors hover:text-champagne"
            >
              +1 281-594-1615
            </a>
            <address className="not-italic text-sm leading-relaxed text-ink-foreground/75">
              16234 Alametos Dr, Houston, TX 77083
            </address>
            <a
              href="https://unlimitedhomeremodeling.com"
              className="text-sm text-ink-foreground/75 transition-colors hover:text-champagne"
            >
              unlimitedhomeremodeling.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-[0.68rem] tracking-[0.14em] text-ink-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Unlimited Home Remodeling. All rights reserved.</p>
          <p>Houston, Texas</p>
        </div>
      </div>
    </footer>
  );
}
