import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";
export const metadata = {
  title:
    "Welcome Realty LLP | Premium Real Estate Properties & Investment Solutions",

  description:
    "Welcome Realty LLP offers premium residential and commercial real estate solutions with trusted property services, modern developments, and investment opportunities tailored to your needs.",

    
  keywords: [
    "Welcome Realty LLP",
    "real estate",
    "property dealer",
    "property investment",
    "commercial property",
    "residential property",
    "luxury apartments",
    "real estate company",
    "buy property",
    "sell property",
    "property consultant",
    "real estate services",
    "investment properties",
    "homes for sale",
    "office spaces",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {/* spacing handled inside client wrapper */}
        <ClientLayout>
          {children}
        </ClientLayout>

        <Footer />
      </body>
    </html>
  );
}