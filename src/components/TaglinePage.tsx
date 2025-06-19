import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const TaglinePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b2447] text-white font-extrabold uppercase px-4 text-center overflow-hidden">
      {/* BE BOLD with Coin */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] leading-none"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <span>BE</span>
        <Image
          src="/Revolutionize.png"
          alt="coin"
          width={120}
          height={100}
          className="inline-block w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] pt-5"
        />
        <span>BOLD</span>
      </motion.div>

      {/* BE BRILLIANT */}
      <motion.div
        className="flex flex-wrap mb-5 justify-center text-purple-300 gap-10 text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] leading-none"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span>BE</span>
        <span>BRILLIANT</span>
      </motion.div>

      {/* WITH NEUERA */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] leading-none text-white"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span>WITH</span>
        <span>NEUERA</span>
      </motion.div>

      {/* Start Now Button */}
      <motion.button
        className="mt-10 flex items-center gap-2 px-6 py-3 bg-white text-slate-800 font-bold rounded-full text-lg hover:bg-gray-200 transition-all duration-300 shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Now!
        <ArrowRight size={20} />
      </motion.button>
    </div>
  );
};

export default TaglinePage;
