import Image from "next/image";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/AboutUs";
import FeaturedProperties from "@/components/FeaturedProperties";
export default function Home() {
  return (
    <>
    <Hero />
    <Stats />
    <About />
    <FeaturedProperties  />
    </>
  );
}
