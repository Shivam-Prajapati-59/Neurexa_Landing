import { Target, UserPlus, Users, Volume2 } from "lucide-react";
import React from "react";

const ServicesCard = () => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-12 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-screen-xl">
        {/* Card 1 - Social Strategy */}
        <div
          className="relative bg-slate-800 shadow-xl overflow-hidden"
          style={{
            clipPath:
              "polygon(66% 0, 75% 15%, 75% 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0% 70%, 0 0, 19% 0)",
            borderRadius: "30px",
          }}
        >
          <div className="p-6 sm:p-8 h-full flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              SOCIAL
              <br />
              STRATEGY
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our Social Strategy is all about developing customized plans that
              align seamlessly with your brand's goals and the behaviors of your
              target audience.
            </p>
          </div>
          <div className="absolute top-6 right-6 sm:top-10 sm:right-12">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-800 bg-opacity-20 rounded-full flex items-center justify-center">
              <Target className="text-white" size={60} />
            </div>
          </div>
        </div>

        {/* Card 2 - Creator Management */}
        <div
          className="relative bg-purple-400 shadow-xl overflow-hidden"
          style={{
            clipPath:
              "polygon(65% 0, 76% 18%, 76% 0, 100% 0, 100% 100%, 32% 100%, 0 100%, 0% 43%, 0 0)",
            borderRadius: "30px",
          }}
        >
          <div className="p-6 sm:p-8 h-full flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-4 leading-tight">
              CREATOR
              <br />
              MANAGEMENT
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              Empower influencers with personalized support and strategic
              guidance to thrive in their creative endeavors.
            </p>
          </div>
          <div className="absolute top-6 right-6 sm:top-10 sm:right-12">
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <Users className="text-slate-800" size={60} />
            </div>
          </div>
        </div>

        {/* Card 3 - Influencer Partnerships */}
        <div
          className="relative bg-purple-400 shadow-xl overflow-hidden"
          style={{
            clipPath:
              "polygon(65% 0, 76% 18%, 76% 0, 100% 0, 100% 100%, 32% 100%, 0 100%, 0% 43%, 0 0)",
            borderRadius: "30px",
          }}
        >
          <div className="p-6 sm:p-8 h-full flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-4 leading-tight">
              INFLUENCER
              <br />
              PARTNERSHIPS
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              We connect your brand with the right influencers for authentic
              partnerships that amplify your message.
            </p>
          </div>
          <div className="absolute top-6 right-6 sm:top-10 sm:right-12">
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <UserPlus className="text-slate-800" size={60} />
            </div>
          </div>
        </div>

        {/* Card 4 - Social Publishing */}
        <div
          className="relative bg-slate-800 shadow-xl overflow-hidden"
          style={{
            clipPath:
              "polygon(65% 0, 76% 18%, 76% 0, 100% 0, 100% 100%, 32% 100%, 0 100%, 0% 43%, 0 0)",
            borderRadius: "30px",
          }}
        >
          <div className="p-6 sm:p-8 h-full flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              SOCIAL
              <br />
              PUBLISHING
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Streamline your content delivery, ensuring consistent voice across
              all platforms without the management hassle.
            </p>
          </div>
          <div className="absolute top-6 right-6 sm:top-10 sm:right-12">
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <Volume2 className="text-white" size={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
