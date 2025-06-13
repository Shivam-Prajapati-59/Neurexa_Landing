"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowBigLeft, ArrowUp01, ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <motion.div
      className="bg-[#b6024d] mt-8 px-8 md:px-16 lg:px-24 text-white font-extrabold uppercase py-10 flex flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* First Row: WE CRAFT + Building Image */}
      <div className="flex items-center justify-between">
        <motion.h1
          className="text-6xl md:text-7xl lg:text-[9rem] leading-[0.85] md:leading-[0.8]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className="text-white">WE </span>
          <span className="text-[#fca6af]">CRAFT</span>
        </motion.h1>

        <motion.div
          className="w-[200px] md:w-[350px] lg:w-[500px] h-[80px] md:h-[110px] rounded-full overflow-hidden shrink-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <img
            src="/zocolo.webp"
            alt="Building"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Second Row: Camera + THE + logo + DIGITAL */}
      <div className="flex items-center justify-between mt-4 md:mt-6 space-x-2 md:space-x-4 lg:space-x-8">
        <motion.div
          className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <img
            src="/SolanaImg.png"
            alt="Camera"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl lg:text-[9rem] leading-[0.85] md:leading-[0.8] text-white"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          THE
        </motion.h1>

        <motion.div
          className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <img
            src="/Cloral.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl lg:text-[9rem] leading-[0.85] md:leading-[0.8] text-[#fca6af]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          DIGITAL
        </motion.h1>
      </div>

      {/* Third Row: EXPERIENCE + Stat Cards */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 md:mt-6">
        <motion.h1
          className="text-6xl md:text-7xl lg:text-[9rem] text-[#ffbfcf] leading-[0.85] md:leading-[0.8] mb-6 md:mb-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          EXPERIENCE
        </motion.h1>

        {/* Stat Cards */}
        <div className="flex gap-3">
          {/* Card 1 */}
          <motion.div
            className="bg-[#ffb200] text-[#601616] px-4 md:px-6 py-2 md:py-4 rounded-[12px] w-[150px] md:w-[180px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <div className="flex justify-between items-start">
              <p className="text-2xl md:text-[2.5rem] font-bold leading-none">
                120M
              </p>
              <svg className="w-4 h-4 mt-1" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-xs md:text-sm mt-0.5 leading-tight font-medium">
              Social Media Audience Engagement
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-[#ff8c1a] text-[#601616] px-4 md:px-6 py-2 md:py-4 rounded-[12px] w-[150px] md:w-[180px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex justify-between items-start">
              <p className="text-2xl md:text-[2.5rem] font-bold leading-none">
                320+
              </p>
              <svg className="w-4 h-4 mt-1" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-xs md:text-sm mt-0.5 leading-tight font-medium">
              Global Network Of Clients
            </p>
          </motion.div>
        </div>
      </div>

      {/* Fourth Row: Get Started Button and Description */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-8 md:mt-12">
        <motion.div
          className="mb-4 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <button className="relative bg-white text-[#b6024d] rounded-full py-2.5 px-7 font-bold text-lg flex items-center hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-white/50 hover:text-white group overflow-hidden transition-all duration-300 ease-in-out">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowUpRight className="bg-[#b6024d]/20 rounded-full" />
            </span>
            <div className="absolute inset-0 bg-[#b6024d] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </motion.div>

        <motion.div
          className="md:max-w-[60%] text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-white/90 font-normal leading-tight">
            Neuera exists to revolutionize the way brands connect and engage
            with their audiences in the digital era by leveraging innovative
            strategies and cutting-edge technology. We strive to redefine
            digital experiences by crafting tailored solutions that not only
            capture attention.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
