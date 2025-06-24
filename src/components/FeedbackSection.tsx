import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

const FeedBack = [
  {
    quote:
      "Neurexa transformed our workflow and boosted our team's productivity. The intuitive interface and robust features have made a significant difference in our daily operations. I can't imagine going back to our old system!",
    company: "TechNova Inc.",
    Image: "/john.png",
    name: "Alice Johnson",
    bgColor: "#f3f4f6",
    textColor: "#1f2937",
  },
  {
    quote:
      "Before Neurexa, our team struggled to keep up with project deadlines and communication gaps. Since adopting their platform, we've seen a remarkable improvement in collaboration, transparency, and overall efficiency. The intuitive interface and robust features have made a significant difference in our daily operations. I can't imagine going back to our old system!",
    company: "Visionary Labs",
    Image: "/john.png",
    name: "Samantha Carter",
    bgColor: "#fef9c3",
    textColor: "#92400e",
  },
  {
    quote:
      "Neurexa is more than just a tool—it's become an essential part of our company culture. The seamless integration with our existing processes and the responsive support team have exceeded our expectations. Our clients have noticed the difference too, and we've received positive feedback across the board. Highly recommended for any organization looking to level up.",
    company: "NextGen Solutions",
    Image: "/john.png",
    name: "David Kim",
    bgColor: "#f3e8ff",
    textColor: "#7c3aed",
  },
];

const FeedbackSection = () => {
  // Create refs for the sections we want to animate on scroll
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  // Check if elements are in view
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });

  // Animation controls
  const headerControls = useAnimation();
  const subtitleControls = useAnimation();
  const titleControls = useAnimation();
  const cardsControls = useAnimation();

  // Trigger animations when elements come into view
  useEffect(() => {
    if (headerInView) {
      headerControls.start({ opacity: 1, y: 0 });
      subtitleControls.start({ opacity: 1 });

      // Staggered title animations
      setTimeout(() => {
        titleControls.start("visible");
      }, 300);
    }
  }, [headerInView, headerControls, subtitleControls, titleControls]);

  useEffect(() => {
    if (cardsInView) {
      cardsControls.start("visible");
    }
  }, [cardsInView, cardsControls]);

  // Variants for staggered animations
  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 sm:py-12 lg:py-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerControls}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={subtitleControls}
            className="mb-3 sm:mb-4 lg:mb-6"
          >
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#ff6200] font-bold italic tracking-wide">
              *SPOILER THEY LOVE IT!
            </span>
          </motion.div>

          <div className="space-y-1 sm:space-y-2">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={titleControls}
              variants={titleVariants}
              className="font-black uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-slate-800 leading-tight"
            >
              Here's what people
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={titleControls}
              variants={titleVariants}
              className="font-black uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-slate-800 leading-tight"
            >
              Say About Our Work
            </motion.h2>
          </div>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          ref={cardsRef}
        >
          {FeedBack.map((feedback, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={cardsControls}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 8px 25px rgba(0,0,0,0.12)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: feedback.bgColor,
                color: feedback.textColor,
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                className="flex items-center mb-4 sm:mb-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full mr-3 sm:mr-4 bg-gray-300 flex-shrink-0 flex items-center justify-center text-gray-600 font-semibold"
                >
                  {feedback.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </motion.div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold truncate">
                    {feedback.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 opacity-80 truncate">
                    {feedback.company}
                  </p>
                </div>
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="text-sm sm:text-base lg:text-base italic leading-relaxed"
              >
                "{feedback.quote}"
              </motion.blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
