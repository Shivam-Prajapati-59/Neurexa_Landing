"use client";

import {
  ArrowUpRight,
  Activity,
  BarChart3,
  Star,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FeatureSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  const features = [
    {
      icon: Star,
      title: "DISCOVERY &\nSTRATEGY",
      description:
        "We assess your business goals, challenges, and opportunities to understand your unique needs and develop a tailored marketing strategy.",
    },
    {
      icon: Activity,
      title: "STRATEGIC\nACTION",
      description:
        "Our team implements the strategy with meticulous precision, leveraging best practices and innovative techniques to ensure optimal results.",
    },
    {
      icon: BarChart3,
      title: "PERFORMANCE\nBOOST",
      description:
        "We assess your business goals, challenges, and opportunities to understand your unique needs and develop a tailored marketing strategy.",
    },
    {
      icon: BarChart3,
      title: "INSIGHT\nANALYSIS",
      description:
        "Receive comprehensive, detailed reports and insights that allow you to track progress and measure success effectively, our analytics provide a clear overview.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-[#b6024d] px-8 md:px-16 lg:px-24 xl:px-16 pt-8 pb-12 lg:pt-12 lg:pb-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start lg:items-center mb-12 lg:mb-16">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="mb-4 lg:mb-6">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#ff8c42] font-medium italic tracking-wide">
                *LET US SHOW YOU!
              </span>
            </div>
            <div className="space-y-1 sm:space-y-2 lg:space-y-3">
              <div className="flex flex-wrap items-baseline font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-2 sm:gap-3 lg:gap-4">
                <span className="text-white">HOW</span>
                <span className="text-white">WE</span>
                <span className="text-[#ff8fa3]">DRIVE</span>
                <span className="text-white">YOUR</span>
              </div>
              <div className="flex flex-wrap items-baseline font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-2 sm:gap-3 lg:gap-4">
                <span className="text-white">BRAND</span>
                <span className="text-[#ff8fa3]">TO</span>
                <span className="text-[#ff8fa3]">NEW</span>
                <span className="text-[#ff8fa3]">HEIGHT</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 xl:col-span-4 mt-4 lg:mt-4 lg:pl-20 xl:pl-24">
            <div className="max-w-md lg:max-w-sm xl:max-w-md">
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed lg:leading-loose font-light">
                We transform innovative ideas into captivating and memorable
                digital experiences that engage and inspire
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4 lg:space-y-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isSecond = index === 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between rounded-2xl px-6 py-6 lg:py-8 w-full max-w-6xl mx-auto gap-4 lg:gap-8 transition-all duration-1000 ease-out ${
                  isSecond
                    ? "bg-[#ff8c42]/20 border border-[#ff8c42]/30"
                    : "bg-[#ff8fa3]"
                }`}
                style={{
                  backgroundColor: isSecond && isInView ? "#ff8fa3" : undefined,
                  borderWidth: isSecond && isInView ? "0px" : undefined,
                  transform: isSecond && isInView ? "scale(1.02)" : "scale(1)",
                }}
              >
                {/* Icon & Title */}
                <div className="flex items-center space-x-4 lg:space-x-6 flex-shrink-0 relative z-10">
                  <div
                    className={`p-3 lg:p-4 rounded-lg ${
                      isSecond ? "bg-[#b6024d]/20" : "bg-[#ff8c42]/30"
                    }`}
                  >
                    <IconComponent
                      className={`w-6 h-6 lg:w-8 lg:h-8 ${
                        isSecond ? "text-[#b6024d]" : "text-[#ff8c42]"
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-extrabold uppercase text-lg sm:text-xl lg:text-2xl xl:text-3xl whitespace-pre-line ${
                      isSecond ? "text-[#990632]" : "text-[#b6024d]"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex-1 lg:px-8 relative z-10">
                  <p
                    className={`text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-loose ${
                      isSecond ? "text-[#8b1538]" : "text-[#b6024d]"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className={`w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full flex-shrink-0 relative z-10 ${
                    isSecond ? "bg-[#b6024d]" : "bg-[#ff8c42]"
                  }`}
                  style={{
                    backgroundColor:
                      isSecond && isInView ? "#ff8c42" : undefined,
                    transform:
                      isSecond && isInView ? "rotate(360deg)" : "rotate(0deg)",
                    transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {isSecond ? (
                    <ArrowRight className="text-white w-6 h-6 lg:w-7 lg:h-7" />
                  ) : (
                    <ArrowUpRight className="text-white w-6 h-6 lg:w-7 lg:h-7" />
                  )}
                </div>

                {/* Slide-in overlay */}
                {isSecond && (
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={
                      isInView
                        ? { x: "0%", opacity: 1 }
                        : { x: "-100%", opacity: 0 }
                    }
                    transition={{
                      duration: 1.2,
                      ease: [0.2, 0, 0.2, 1],
                    }}
                    className="absolute inset-0 bg-[#b6024d] rounded-2xl pointer-events-none"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
