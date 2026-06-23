import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  // ── Core Meta ──────────────────────────────────────────────────────────────
  title: {
    default:
      "Welcome Realty LLP | Trusted Real Estate Partner – Thane, Mumbai, Panvel & Dubai",
    template: "%s | Welcome Realty LLP",
  },
  description:
    "With over 30 years of experience, Welcome Realty LLP offers premium residential, commercial, and plotted land investment solutions across Thane, Mumbai, Panvel & Dubai. Expert real estate documentation, property buying, selling & investment advisory.",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  // ── Keywords ───────────────────────────────────────────────────────────────
  keywords: [
    // Brand
    "Welcome Realty LLP",
    "Welcome Realty Consultant",
    "Welcome Realty Thane",

    // Experience & Trust
    "30 years real estate experience",
    "trusted real estate partner",
    "reputed property consultant India",

    // Services
    "residential property",
    "commercial property",
    "plotted land investment",
    "real estate documentation services",
    "property document verification",
    "property document scrutiny",
    "property agreement",
    "sale deed",
    "legal property documents",

    // Transaction Types
    "buy property",
    "sell property",
    "property investment",
    "real estate investment",
    "property for sale",
    "office space for rent",
    "luxury apartments",
    "homes for sale",

    // Locations
    "real estate Thane",
    "property dealer Thane West",
    "real estate Mumbai",
    "property consultant Panvel",
    "real estate Dubai",
    "Kolshet Road Thane",
    "Lodha Signet Thane",
    "Thane West property",

    // Audience
    "property buyer consultant",
    "property seller agent",
    "real estate investor India",
    "NRI property investment",
    "commercial real estate consultant",
    "residential real estate agent",

    // General
    "real estate company",
    "real estate services",
    "investment properties",
    "real estate advisory",
    "dream home",
    "property solutions",
  ],

  // ── Authors & Publisher ────────────────────────────────────────────────────
  authors: [{ name: "Welcome Realty LLP" }],
  creator: "Welcome Realty LLP",
  publisher: "Welcome Realty LLP",

  // ── Robots ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Welcome Realty LLP",
    title:
      "Welcome Realty LLP | Your Trusted Real Estate Partner for Over 30 Years",
    description:
      "Residential, Commercial, Land & Documentation Solutions across Thane, Mumbai, Panvel & Dubai. 30+ years of trusted real estate expertise.",
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Welcome Realty LLP" }],
    // url: "https://yourdomain.com",   ← uncomment once you have a live domain
  },

  // ── App / PWA ──────────────────────────────────────────────────────────────
  applicationName: "Welcome Realty LLP",
  category: "Real Estate",

  // ── Verification ───────────────────────────────────────────────────────────
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",   ← add after deploying
  // },
};

// ── JSON-LD Structured Data ──────────────────────────────────────────────────
// Helps Google show rich results (business info, reviews, sitelinks).
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // LocalBusiness schema
    {
      "@type": ["LocalBusiness", "RealEstateAgent"],
      name: "Welcome Realty LLP",
      legalName: "Welcome Realty LLP",
      description:
        "With over 30 years of experience, Welcome Realty LLP delivers trusted residential, commercial, and plotted land real estate solutions along with expert property documentation services across Thane, Mumbai, Panvel, and Dubai.",
      slogan:
        "Your Trusted Real Estate Partner for Over 30 Years – Residential, Commercial, Land & Documentation Solutions Across Thane, Mumbai, Panvel & Dubai.",
      foundingDate: "1994",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No. 530, Lodha Signet A, Kolshet Road",
        addressLocality: "Thane West",
        addressRegion: "Maharashtra",
        postalCode: "400607",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.2183,
        longitude: 72.9781,
      },
      telephone: "+917021625739",
      email: "welcomerealty.llp@gmail.com",
      sameAs: [
        "https://www.instagram.com/welcomerealtyconsultant",
      ],
      areaServed: [
        { "@type": "City", name: "Thane" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Panvel" },
        { "@type": "City", name: "Dubai" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Real Estate Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Residential Property Sales & Advisory",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Property Leasing & Sales",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Plotted Land Investments",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Real Estate Documentation Services",
              description:
                "Creation, verification, and scrutiny of property documents including sale deeds, agreements, and legal compliance checks.",
            },
          },
        ],
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    },

    // WebSite schema (enables Sitelinks Search Box when on live domain)
    {
      "@type": "WebSite",
      name: "Welcome Realty LLP",
      description:
        "Premium real estate property solutions and investment advisory by Welcome Realty LLP.",
      inLanguage: "en-IN",
      publisher: {
        "@type": "Organization",
        name: "Welcome Realty LLP",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Navbar />

        {/* spacing handled inside client wrapper */}
        <ClientLayout>{children}</ClientLayout>

        <Footer />
      </body>
    </html>
  );
}