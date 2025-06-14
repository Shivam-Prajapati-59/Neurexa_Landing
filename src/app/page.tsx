import HeroSection from "@/components/HeroSection";
import NameCarousel from "@/components/NameCarousel";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full">
      <Navbar />
      <HeroSection />
      <NameCarousel />

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
