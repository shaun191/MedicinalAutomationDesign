import Site from "../components/Site";

const siteUrl = "https://www.medicinalautomationdesign.com";
const phone = "(779) 210-8350";
const email = "info@medicinalautomationdesign.com";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Medicinal Automation & Design",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      telephone: phone,
      email,
      parentOrganization: {
        "@type": "Organization",
        name: "Print Automation & Design"
      },
      areaServed: ["Illinois", "United States", "Worldwide"],
      description:
        "Medicinal Automation & Design provides equipment installation, line startup, production facility buildout, machinery moves, controls, data logging, ERP integration, labeling, and packaging automation for cannabis, THC, CBD, and hemp manufacturers."
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Medicinal Automation & Design",
      image: `${siteUrl}/logo.svg`,
      url: siteUrl,
      telephone: phone,
      email,
      address: {
        "@type": "PostalAddress",
        addressRegion: "IL",
        addressCountry: "US"
      },
      areaServed: ["Illinois", "United States", "Worldwide"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59"
        }
      ],
      description:
        "Illinois-based, worldwide emergency and rapid-response industrial automation support for cannabis, THC, CBD, and hemp manufacturing facilities."
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      serviceType: "Cannabis, THC, CBD, and hemp manufacturing equipment installation and automation integration",
      provider: {
        "@id": `${siteUrl}/#organization`
      },
      areaServed: ["Illinois", "United States", "Worldwide"],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Cannabis, THC, CBD, and hemp product manufacturers"
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Industrial Automation Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Equipment and production line installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Production facility buildout support" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Machinery moves and additions" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical, pneumatic, plumbing, and pipefitting support" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP integration, data logging, traceability, and reporting" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Labeling and packaging automation" } }
        ]
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Site />
    </>
  );
}
