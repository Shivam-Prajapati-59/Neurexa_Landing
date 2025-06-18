import { Target, UserPlus, Users, Volume2 } from "lucide-react";
import React from "react";

const ServicesCard = () => {
  return (
    <div className="flex items-center justify-center pb-6 md:pb-10 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-full w-full">
        {/* Card 1 - Social Strategy */}
        <div
          className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-slate-800 shadow-xl overflow-hidden"
          style={{
            clipPath:
              "polygon(66% 0, 75% 15%, 75% 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0% 70%, 0 0, 19% 0)",
            borderRadius: "20px",
          }}
        >
          <div className="p-4 sm:p-6 md:p-8 relative z-10 h-full flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
              SOCIAL
              <br />
              STRATEGY
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm md:text-sm leading-relaxed">
              Our Social Strategy is all about developing customized plans that
              align seamlessly with your brand's goals and the behaviors of your
              target audience, we dive deep into the unique aspects.
            </p>
          </div>
          <div className="absolute top-8 sm:top-12 md:top-16 right-6 sm:right-8 md:right-12">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-slate-800 bg-opacity-20 rounded-full flex items-center justify-center">
              <Target className="text-white" size={40} />
            </div>
          </div>
        </div>

        {/* Card 2 - Creator Management */}
        <div
          className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-purple-400 shadow-xl overflow-hidden"
          style={{
            clipPath:
              "polygon(65% 0, 76% 18%, 76% 0, 100% 0, 100% 100%, 32% 100%, 0 100%, 0% 43%, 0 0)",
            borderRadius: "20px",
          }}
        >
          <div className="p-4 sm:p-6 md:p-8 relative z-10 h-full flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-2 sm:mb-3 md:mb-4 leading-tight">
              CREATOR
              <br />
              MANAGEMENT
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm md:text-sm leading-relaxed">
              Our Creator Management services are designed to empower
              influencers to thrive in their creative endeavors, offering them
              the personalized support and strategic guidance they need.
            </p>
          </div>
          <div className="absolute top-8 sm:top-12 md:top-16 right-6 sm:right-8 md:right-12">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-opacity-20 flex items-center justify-center">
              <Users className="text-slate-800" size={40} />
            </div>
          </div>
        </div>

        {/* Card 3 - Influencer Partnerships */}
        <div
          className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-purple-400 shadow-xl overflow-hidden"
          style={{
            clipPath:
              "polygon(65% 0, 76% 18%, 76% 0, 100% 0, 100% 100%, 32% 100%, 0 100%, 0% 43%, 0 0)",
            borderRadius: "20px",
          }}
        >
          <div className="p-4 sm:p-6 md:p-8 relative z-10 h-full flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-2 sm:mb-3 md:mb-4 leading-tight">
              INFLUENCER
              <br />
              PARTNERSHIPS
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm md:text-sm leading-relaxed">
              We specialize in connecting your brand with the right influencers,
              forging authentic partnerships that amplify your message and
              expand your reach.
            </p>
          </div>
          <div className="absolute top-8 sm:top-12 md:top-16 right-6 sm:right-8 md:right-12">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-opacity-20 flex items-center justify-center">
              <UserPlus className="text-slate-800" size={40} />
            </div>
          </div>
        </div>

        {/* Card 4 - Social Publishing */}
        <div
          className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-slate-800 shadow-xl overflow-hidden"
          style={{
            clipPath:
              "polygon(65% 0, 76% 18%, 76% 0, 100% 0, 100% 100%, 32% 100%, 0 100%, 0% 43%, 0 0)",
            borderRadius: "20px",
          }}
        >
          <div className="p-4 sm:p-6 md:p-8 relative z-10 h-full flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
              SOCIAL
              <br />
              PUBLISHING
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm md:text-sm leading-relaxed">
              Our Social Publishing services streamline your content delivery,
              ensuring your brand's voice is consistently heard across all
              platforms. We take the hassle out of managing.
            </p>
          </div>
          <div className="absolute top-8 sm:top-12 md:top-16 right-6 sm:right-8 md:right-12">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
              <Volume2 className="text-white" size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
