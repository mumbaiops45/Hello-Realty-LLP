import Image from "next/image";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/AboutUs";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonial";
import PropertyExperts from "@/components/AgentExpert";
import Process from "@/components/Process";
import FAQSection from "@/components/FAQ";
import CTASection from "@/components/CTA";
import ServicesSection from "@/components/Services";
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <FeaturedProperties />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <PropertyExperts />
      <Process />
      <FAQSection />
      <CTASection />
    </>
  );
}
