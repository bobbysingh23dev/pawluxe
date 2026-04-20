import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brandName,
    alternateName: site.alternateNames,
    url: site.url,
    description: site.description,
    email: site.email,
    telephone: site.phone,
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: site.legalName,
    alternateName: [site.name, site.brandName],
    url: site.url,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: site.serviceAreas.map((name) => ({
      "@type": "City",
      name: `${name}, Lucknow`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.ratingValue,
      reviewCount: site.reviewCount,
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you have puppies available in Lucknow right now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Availability varies by breed and season. This site does not show live inventory—contact us for current litters, fees, and verified paperwork.",
        },
      },
      {
        "@type": "Question",
        name: "Can I verify vaccination and health records with my vet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We share vaccination, deworming, and veterinary records for independent verification.",
        },
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
