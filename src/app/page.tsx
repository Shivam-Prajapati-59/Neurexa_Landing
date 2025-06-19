"use client";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import NameCarousel from "@/components/NameCarousel";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import ServicesSection from "@/components/ServicesSection";
import TaglinePage from "@/components/TaglinePage";

export default function Home() {
  return (
    <div className="min-h-screen  overflow-x-hidden ">
      <Navbar />
      <HeroSection />
      <NameCarousel />
      <FeatureSection />
      <ServicesSection />
      <ProjectSection />
      <TaglinePage />

      {/* <h1 className=" text-gray-900 text-8xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatem, nemo temporibus at minus sunt suscipit obcaecati
        consequuntur sequi excepturi modi reiciendis facere accusamus dolorem,
        veniam neque? Ad, quae alias? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Alias aut molestiae architecto natus debitis vel vero
        blanditiis, incidunt suscipit, error consectetur pariatur at dolorem
        animi. Molestiae magnam dolorum nulla vitae?
      </h1> */}
    </div>
  );
}
