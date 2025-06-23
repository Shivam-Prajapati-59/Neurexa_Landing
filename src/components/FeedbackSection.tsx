import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

const FeedBack = [
  {
    quote:
      "Neurexa transformed our workflow and boosted our team's productivit. The intuitive interface and robust features have made a significant difference in our daily operations. I can't imagine going back to our old system!",
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
    visible: (i: number) => ({
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
    visible: (i: number) => ({
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
    <div className="px-8 md:px-16 lg:px-24 xl:px-16 pt-8 lg:pt-12 pb-10 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerControls}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start lg:items-center mb-12 lg:mb-16"
        >
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={subtitleControls}
              className="mb-4 lg:mb-6"
            >
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#ff6200] font-bold italic tracking-wide">
                *SPOILER THEY LOVE IT!
              </span>
            </motion.div>
            <div className="space-y-0.5 sm:space-y-1 lg:space-y-0.5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={titleControls}
                variants={titleVariants}
                className="flex flex-wrap items-baseline font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-2 sm:gap-3 lg:gap-4"
              >
                <span className="text-slate-800">Here's what people </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={titleControls}
                variants={titleVariants}
                className="flex flex-wrap items-baseline font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-2 sm:gap-3 lg:gap-4"
              >
                <span className="text-slate-800">Say About Our Work </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          ref={cardsRef}
        >
          {FeedBack.map((feedback, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={cardsControls}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 },
              }}
              className="p-10 rounded-lg shadow-lg"
              style={{
                backgroundColor: feedback.bgColor,
                color: feedback.textColor,
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                className="flex items-center mb-4"
              >
                <motion.img
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  src={feedback.Image}
                  alt={feedback.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{feedback.name}</h3>
                  <p className="text-sm text-gray-500">{feedback.company}</p>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="text-base italic"
              >
                "{feedback.quote}"
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
