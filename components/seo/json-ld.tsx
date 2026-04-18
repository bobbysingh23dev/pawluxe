import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    telephone: site.phone,
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: site.legalName,
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
          text: "Yes. Availability changes weekly by breed. Contact us to get today's open litters and verified paperwork details.",
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
