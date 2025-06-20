import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const TaglinePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b2447] text-white font-extrabold uppercase px-4 text-center overflow-hidden">
      {/* BE BOLD with Coin */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 leading-none text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] max-w-screen"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <span>BE</span>
        <Image
          src="/Revolutionize.png"
          alt="coin"
          width={160}
          height={140}
          className="inline-block pt-6 w-[80px] sm:w-[110px] md:w-[140px] lg:w-[160px] "
        />
        <span>BOLD</span>
      </motion.div>

      {/* BE BRILLIANT */}
      <motion.div
        className="flex flex-wrap justify-center text-purple-300 gap-6 mb-6 leading-none text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] max-w-screen"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span>BE</span>
        <span>BRILLIANT</span>
      </motion.div>

      {/* WITH NEUERA */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 leading-none text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] text-white max-w-screen"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span>WITH</span>
        <span>NEUERA</span>
      </motion.div>

      {/* Start Now Button */}
      <motion.button
        className="mt-10 flex items-center gap-2 px-8 py-4 bg-white text-slate-800 font-bold rounded-full text-lg sm:text-xl hover:bg-gray-200 transition-all duration-300 shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Now!
        <ArrowRight size={24} />
      </motion.button>
    </div>
  );
};

export default TaglinePage;
