import { ArrowRight } from "lucide-react";
import ServicesCard from "./ServicesCard";

export default function HeroSection() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-20 pt-5">
      <div className="max-w-8xl mx-auto w-full">
        {/* Tagline */}
        <div className="text-center mb-2 sm:mb-4">
          <span className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#eb6e20] font-medium italic tracking-wide">
            *YOU KNOW WHAT?!
          </span>
        </div>

        {/* Main Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 xl:gap-20 items-end ">
          {/* Left Side - Description */}
          <div className="lg:col-span-5 xl:col-span-4 order-2 lg:order-1 pb-10">
            <div className="space-y-2 sm:space-y-1 lg:space-y-2">
              <p className="text-gray-700 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed font-light max-w-xs sm:max-w-sm lg:max-w-md">
                We connect your brand with the right influencers, forging
                authentic partnerships that amplify your message.
              </p>
              <div className="flex items-center gap-2 cursor-pointer group hover:gap-3 transition-all duration-300 hover:text-[#eb6e20]">
                <span className="text-gray-900 text-sm sm:text-base lg:text-lg font-medium group-hover:text-[#eb6e20] transition-colors duration-300">
                  See all services
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-900 group-hover:text-[#eb6e20] group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* Right Side - Main Heading */}
          <div className="lg:col-span-7 xl:col-span-8 order-1 lg:order-2 flex items-center justify-center lg:justify-end pb-10">
            <div className="space-y-1  text-center">
              <div className="flex flex-wrap items-baseline justify-center font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-2 sm:gap-3 lg:gap-4">
                <span className="text-[#040d53]">WE DESIGN MEANINGFUL</span>
              </div>
              <div className="flex flex-wrap items-baseline justify-start font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-2 sm:gap-3 lg:gap-4">
                <span className="text-[#040d53]">NOT JUST IMPRESSIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesCard />
      {/* Services Card Section */}
    </div>
  );
}
