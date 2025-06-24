import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const TaglinePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b2447] text-white font-extrabold uppercase px-4 text-center overflow-hidden py-12">
      {/* BE BOLD with Coin */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 leading-none text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] max-w-screen mb-2 sm:mb-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <span>BE</span>
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="inline-flex items-center justify-center"
        >
          <Image
            src="/Revolutionize.png"
            alt="coin"
            width={180}
            height={150}
            className="inline-block w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] object-contain"
          />
        </motion.div>
        <span>BOLD</span>
      </motion.div>

      {/* BE BRILLIANT */}
      <motion.div
        className="flex flex-wrap justify-center text-purple-300 gap-2 sm:gap-4 md:gap-6 mb-2 sm:mb-4 leading-none text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] max-w-screen"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span>BE</span>
        <span>BRILLIANT</span>
      </motion.div>

      {/* WITH NEUERA */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 leading-none text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] text-white max-w-screen"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span>WITH</span>
        <span>NEUERA</span>
      </motion.div>

      {/* Start Now Button */}
      <motion.button
        className="mt-6 sm:mt-8 md:mt-10 flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-800 font-bold rounded-full text-base sm:text-lg md:text-xl hover:bg-gray-200 transition-all duration-300 shadow-md"
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
