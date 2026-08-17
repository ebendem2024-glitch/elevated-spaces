import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

const fieldClass =
  "w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/70 focus:border-bronze";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:px-10 lg:grid-cols-[1fr_1.25fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="eyebrow">Consultation</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-[clamp(2.3rem,5vw,4.25rem)] leading-[1.03]">
              Let's Create Something{" "}
              <span className="italic text-bronze">Extraordinary.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Tell us about your project and take the first step toward transforming your home.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-12 hairline pt-8">
              <p className="font-display text-2xl">Unlimited Home Remodeling</p>
              <address className="mt-4 not-italic leading-relaxed text-muted-foreground">
                16234 Alametos Dr
                <br />
                Houston, TX 77083
                <br />
                United States
              </address>
              <a
                href="tel:+12815941615"
                className="mt-5 block font-display text-2xl transition-colors hover:text-bronze"
              >
                +1 281-594-1615
              </a>
              <a href="tel:+12815941615" className="btn-base btn-solid mt-6">
                Call Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex items-center gap-4 border border-border p-5">
              <span className="font-display text-3xl">4.0</span>
              <span className="text-bronze" aria-hidden>
                ★★★★☆
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                Google rating
                <br />
                based on 1 Google review
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <form onSubmit={onSubmit} className="bg-secondary/50 p-8 md:p-12">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow">Full Name</span>
                <input required name="name" className={fieldClass} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="eyebrow">Phone</span>
                <input required name="phone" type="tel" className={fieldClass} placeholder="(281) 000-0000" />
              </label>
              <label className="block">
                <span className="eyebrow">Email</span>
                <input required name="email" type="email" className={fieldClass} placeholder="you@email.com" />
              </label>
              <label className="block">
                <span className="eyebrow">Project Address</span>
                <input name="address" className={fieldClass} placeholder="Street, city" />
              </label>
              <label className="block">
                <span className="eyebrow">Type of Project</span>
                <select name="type" className={`${fieldClass} cursor-pointer`} defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Kitchen</option>
                  <option>Bathroom</option>
                  <option>Whole Home</option>
                  <option>Interior Remodeling</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block">
                <span className="eyebrow">Estimated Project Scope</span>
                <input name="scope" className={fieldClass} placeholder="Optional" />
              </label>
              <label className="block sm:col-span-2">
                <span className="eyebrow">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  className={`${fieldClass} resize-none`}
                  placeholder="Tell us about your home and what you'd like to change."
                />
              </label>
            </div>

            <button type="submit" className="btn-base btn-solid mt-10 w-full sm:w-auto">
              Request a Consultation
            </button>

            {sent && (
              <p className="mt-6 text-sm text-bronze">
                Thank you — your request has been noted. Form delivery can be connected to email or a
                database next.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
