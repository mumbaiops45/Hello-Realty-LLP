import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

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