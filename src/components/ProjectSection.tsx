import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <div className=" px-8 md:px-16 lg:px-24 xl:px-16 pt-8 lg:pt-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start lg:items-center mb-12 lg:mb-16">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="mb-4 lg:mb-6">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#ff6200] font-bold italic tracking-wide">
                *CURIOUS ABOUT WHAT WE HAVE CREATED?
              </span>
            </div>
            <div className="space-y-0.5 sm:space-y-1 lg:space-y-0.5">
              <div className="flex flex-wrap items-baseline font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-2 sm:gap-3 lg:gap-4">
                <span className="text-slate-800">EXPLORE OUR MOST </span>
              </div>
              <div className="flex flex-wrap items-baseline font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-2 sm:gap-3 lg:gap-4">
                <span className="text-slate-800">SUCCESSFULL PROJECTS </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 xl:col-span-4 mt-4 lg:mt-22 lg:pl-20 xl:pl-24">
            <div className="max-w-md lg:max-w-sm xl:max-w-md">
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-lg font-light">
                We connect your brand with the right influencers, forging
                authenticate partner that amplify your message
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto -mt-5">
        <motion.div className="flex flex-row justify-between items-center gap-4 lg:gap-6 xl:gap-8 overflow-x-auto scrollbar-hide">
          <Image
            src={"/campaign.png"}
            alt="Campaign Image"
            width={700}
            height={500}
          />
          <Image
            src={"/campaign.png"}
            alt="Campaign Image"
            width={700}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSection;
