// app/components/HeroSection.tsx or similar
import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-10 px-35 bg-[#b6024d] flex items-center justify-between">
      <h1 className="text-[8.5rem] font-extrabold uppercase flex text-white">
        <span className="text-white mr-2">WE</span>
        <span className="text-pink-300">CRAFT</span>
      </h1>
      <div className="rounded-full overflow-hidden w-[32rem] h-24 shrink-0">
        <img
          src="/zocolo.webp"
          alt="Building"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
