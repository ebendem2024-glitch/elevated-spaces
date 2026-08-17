import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Portfolio } from "@/components/site/Portfolio";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Process } from "@/components/site/Process";
import { Houston } from "@/components/site/Houston";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Houston Home Remodeling | Unlimited Home Remodeling";
const description =
  "Unlimited Home Remodeling is a Houston, Texas home remodeling contractor specializing in kitchen, bathroom, interior, and whole-home renovations.";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://unlimitedhomeremodeling.com/#business",
  name: "Unlimited Home Remodeling",
  description,
  url: "https://unlimitedhomeremodeling.com",
  telephone: "+1-281-594-1615",
  address: {
    "@type": "PostalAddress",
    streetAddress: "16234 Alametos Dr",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77083",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.0",
    reviewCount: "1",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://unlimitedhomeremodeling.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Intro />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <BeforeAfter />
        <Process />
        <Houston />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
