import "./globals.css";

const siteUrl = "https://www.medicinalautomationdesign.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cannabis, THC & CBD Equipment Installation | Medicinal Automation & Design",
    template: "%s | Medicinal Automation & Design"
  },
  description:
    "Illinois-based, worldwide cannabis, THC, CBD, and hemp manufacturing equipment installation, line layout, production facility buildout, machinery moves, controls, data logging, ERP integration, labeling, and packaging automation. Next-day and emergency rapid-response support available.",
  alternates: {
    canonical: siteUrl
  },
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Cannabis, THC & CBD Equipment Installation | Medicinal Automation & Design",
    description:
      "Worldwide cannabis, THC, CBD, and hemp manufacturing equipment installation, line startup, facility buildout, machinery moves, ERP integration, labeling, and packaging automation.",
    url: siteUrl,
    siteName: "Medicinal Automation & Design",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary",
    title: "Medicinal Automation & Design",
    description:
      "Illinois-based, worldwide automation support for cannabis, THC, CBD, and hemp manufacturing facilities."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
