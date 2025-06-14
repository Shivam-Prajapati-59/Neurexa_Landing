import { ArrowUpRight, Activity, BarChart3, Star } from "lucide-react";
import React from "react";

const FeatureSection = () => {
  const features = [
    {
      icon: Star,
      title: "Discovery &\nStrategy",
      description:
        "We assess your business goals, challenges, and opportunities to understand your unique needs and develop a tailored marketing strategy.",
    },
    {
      icon: Activity,
      title: "Strategic\nAction",
      description:
        "Our team implements the strategy with meticulous precision, leveraging best practices and innovative techniques to ensure optimal results.",
    },
    {
      icon: BarChart3,
      title: "Performance\nBoost",
      description:
        "We continuously optimize and enhance your campaigns to maximize ROI and drive measurable growth for your business.",
    },
    {
      icon: BarChart3,
      title: "Insight\nAnalysis",
      description:
        "Receive comprehensive, detailed reports and insights that allow you to track progress and measure success effectively.",
    },
  ];

  return (
    <div className="bg-[#b6024d] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 pb-12 lg:pt-12 lg:pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start lg:items-center mb-12 lg:mb-16">
          {/* Left side - Main heading */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Subtitle */}
            <div className="mb-4 lg:mb-6">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#ff8c42] font-medium italic tracking-wide">
                *LET US SHOW YOU!
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-1 sm:space-y-2 lg:space-y-3">
              <div className="flex flex-wrap items-baseline font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none gap-2 sm:gap-3 lg:gap-4">
                <span className="text-white">HOW</span>
                <span className="text-white">WE</span>
                <span className="text-[#ff8fa3]">DRIVE</span>
                <span className="text-white">YOUR</span>
              </div>
              <div className="flex flex-wrap items-baseline font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none gap-2 sm:gap-3 lg:gap-4">
                <span className="text-white">BRAND</span>
                <span className="text-[#ff8fa3]">TO</span>
                <span className="text-[#ff8fa3]">NEW</span>
                <span className="text-[#ff8fa3]">HEIGHT</span>
              </div>
            </div>
          </div>

          {/* Right side - Description text */}
          <div className="lg:col-span-5 xl:col-span-4 mt-4 lg:mt-0 lg:pl-4 xl:pl-8">
            <div className="max-w-md lg:max-w-sm xl:max-w-md">
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed lg:leading-loose font-light">
                We transform innovative ideas into captivating and memorable
                digital experiences that engage and inspire
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-4 lg:space-y-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 w-full max-w-6xl mx-auto gap-4 sm:gap-6 ${
                  isEven
                    ? "bg-[#ff8fa3]"
                    : "bg-[#ff8c42]/20 border border-[#ff8c42]/30"
                }`}
              >
                {/* Left Icon and Text */}
                <div className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0">
                  <div
                    className={`p-2 rounded-lg ${
                      isEven ? "bg-[#b6024d]/20" : "bg-[#ff8c42]/30"
                    }`}
                  >
                    <IconComponent
                      className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${
                        isEven ? "text-[#b6024d]" : "text-[#ff8c42]"
                      }`}
                    />
                  </div>
                  {/* Title */}
                  <div>
                    <h3
                      className={`font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl uppercase leading-tight whitespace-pre-line ${
                        isEven ? "text-[#990632]" : "text-white"
                      }`}
                    >
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs sm:text-sm md:text-base leading-relaxed ${
                      isEven ? "text-[#8b1538]" : "text-white/90"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full flex-shrink-0 ${
                    isEven ? "bg-[#b6024d]" : "bg-[#ff8c42]"
                  }`}
                >
                  <ArrowUpRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
