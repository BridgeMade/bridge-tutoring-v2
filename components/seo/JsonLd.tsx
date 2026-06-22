import { business, areasServed, absoluteUrl } from "@/lib/business";

// Renders a JSON-LD <script>. Server component — no client JS shipped.
// Render once site-wide (in the root layout) for Organization +
// LocalBusiness, the two schemas Google uses for a local service brand.
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": absoluteUrl("/#organization"),
    name: business.name,
    legalName: business.legalName,
    url: business.url,
    email: business.email,
    description: business.description,
    areaServed: areasServed.map((name) =>
      name === "South Africa"
        ? { "@type": "Country", name }
        : { "@type": "City", name },
    ),
    address: {
      "@type": "PostalAddress",
      addressRegion: "Gauteng",
      addressCountry: business.country,
    },
    ...(business.sameAs.length ? { sameAs: business.sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, static content built from our own config.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Generic helper for per-page schema (FAQPage, Service, BreadcrumbList, etc.).
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
