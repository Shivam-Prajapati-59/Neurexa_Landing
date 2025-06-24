"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <motion.div
      className="bg-[#b6024d] mt-8 px-4 sm:px-8 md:px-16 lg:px-24 text-white font-extrabold uppercase py-6 sm:py-8 md:py-10 flex flex-col relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Background animated circles */}
      <motion.div
        className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-white/5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-white/5"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />

      {/* First Row: WE CRAFT + Building Image */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] leading-[0.85] md:leading-[0.8] pt-3"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className="text-white">WE </span>
          <span className="text-[#fca6af]">CRAFT</span>
        </motion.h1>

        <motion.div
          className="w-full sm:w-[200px] md:w-[350px] lg:w-[500px] h-[80px] md:h-[110px] rounded-full overflow-hidden shrink-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/zocolo.webp"
            alt="Building"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Second Row: Camera + THE + logo + DIGITAL */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between mt-4 md:mt-6 gap-2 sm:gap-4 lg:gap-8">
        <motion.div
          className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <img
            src="/SolanaImg.png"
            alt="Camera"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] leading-[0.85] md:leading-[0.8] text-white"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          THE
        </motion.h1>

        <motion.div
          className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px]"
          initial={{ y: 30, opacity: 0, rotate: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            rotate: 360,
          }}
          transition={{
            delay: 0.6,
            duration: 1.5,
            rotate: {
              type: "spring",
              stiffness: 50,
            },
          }}
          whileHover={{
            scale: 1.1,
            rotate: 370,
            transition: { duration: 0.3 },
          }}
        >
          <img
            src="/Cloral.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] leading-[0.85] md:leading-[0.8] text-[#fca6af]"
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
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] text-[#ffbfcf] leading-[0.85] md:leading-[0.8] mb-6 md:mb-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          EXPERIENCE
        </motion.h1>

        {/* Stat Cards */}
        <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full md:w-auto">
          {/* Card 1 */}
          <motion.div
            className="bg-[#ffb200] text-[#601616] px-4 md:px-6 py-2 md:py-4 rounded-[12px] w-full sm:w-[150px] md:w-[180px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
            }}
          >
            <div className="flex justify-between items-start">
              <p className="text-2xl md:text-[2.5rem] font-bold leading-none">
                120M
              </p>
              <motion.svg
                className="w-4 h-4 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                whileHover={{ scale: 1.2 }}
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>
            <p className="text-xs md:text-sm mt-0.5 leading-tight font-medium">
              Social Media Audience Engagement
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-[#ff8c1a] text-[#601616] px-4 md:px-6 py-2 md:py-4 rounded-[12px] w-full sm:w-[150px] md:w-[180px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
            }}
          >
            <div className="flex justify-between items-start">
              <p className="text-2xl md:text-[2.5rem] font-bold leading-none">
                320+
              </p>
              <motion.svg
                className="w-4 h-4 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                whileHover={{ scale: 1.2 }}
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>
            <p className="text-xs md:text-sm mt-0.5 leading-tight font-medium">
              Global Network Of Clients
            </p>
          </motion.div>
        </div>
      </div>

      {/* Fourth Row: Get Started Button and Description */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-8 md:mt-12 gap-4">
        <motion.div
          className="mb-4 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <motion.button
            className="relative bg-white text-[#b6024d] rounded-full py-2.5 px-7 font-bold text-lg flex items-center focus:outline-none focus:ring-3 focus:ring-white/50 overflow-hidden transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <ArrowUpRight className="bg-[#b6024d]/20 rounded-full" />
              </motion.div>
            </span>
            <div className="absolute inset-0 bg-[#b6024d] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </motion.div>

        <motion.div
          className="w-full md:max-w-[60%] text-sm md:text-base"
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
