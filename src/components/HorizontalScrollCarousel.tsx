"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const cards = [
    { url: "/company/amazon-logo.png", title: "Title 1", id: 1 },
    { url: "/company/amazon-logo.png", title: "Title 2", id: 2 },
    { url: "/company/amazon-logo.png", title: "Title 3", id: 3 },
    { url: "/company/amazon-logo.png", title: "Title 4", id: 4 },
    { url: "/company/amazon-logo.png", title: "Title 5", id: 5 },
    { url: "/company/amazon-logo.png", title: "Title 6", id: 6 },
    { url: "/company/amazon-logo.png", title: "Title 7", id: 7 },
  ];

  // Calculate the scroll distance based on number of cards
  // This ensures all cards are visible during the scroll
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-85%"]);

  return (
    <div
      ref={targetRef}
      className="absolute h-[300vh] -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-16"
    >
      {/* Sticky container that stays on screen during scroll */}
      <div className="sticky top-0 h-screen flex items-center ">
        <motion.div
          style={{ x }}
          className="flex gap-4 md:gap-6 lg:gap-8 px-8 md:px-16 lg:px-20 xl:px-24 will-change-transform"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative h-[280px] w-[280px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] bg-neutral-200 rounded-xl overflow-hidden group shadow-xl flex-shrink-0"
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.url})` }}
              />
              <div className="absolute inset-0 z-10 grid place-content-center bg-black/30 backdrop-blur-sm">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase text-center px-4">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
