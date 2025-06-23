import { b } from "framer-motion/client";
import React from "react";
import { text } from "stream/consumers";

const FeedBack = [
  {
    quote:
      "Neurexa transformed our workflow and boosted our team's productivity.",
    company: "TechNova Inc.",
    Image: "/john.png",
    name: "Alice Johnson",
    bgColor: "#f3f4f6",
    textColor: "#1f2937",
  },
  {
    quote: "An intuitive platform that delivers results. Highly recommended!",
    company: "Bright Solutions",
    Image: "/john.png",
    name: "Michael Lee",
    bgColor: "#fff7ed",
    textColor: "#ff6200",
  },
  {
    quote: "Exceptional service and support. We love working with Neurexa.",
    company: "GreenLeaf Corp.",
    Image: "/john.png",
    name: "Priya Patel",
    bgColor: "#e0f2fe",
    textColor: "#0369a1",
  },
];

const FeedbackSection = () => {
  return (
    <div className=" px-8 md:px-16 lg:px-24 xl:px-16 pt-8 lg:pt-12  min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start lg:items-center mb-12 lg:mb-16">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="mb-4 lg:mb-6">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#ff6200] font-bold italic tracking-wide">
                *SPOILER THEY LOVE IT!
              </span>
            </div>
            <div className="space-y-0.5 sm:space-y-1 lg:space-y-0.5">
              <div className="flex flex-wrap items-baseline font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-2 sm:gap-3 lg:gap-4">
                <span className="text-slate-800">Here's what people </span>
              </div>
              <div className="flex flex-wrap items-baseline font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-2 sm:gap-3 lg:gap-4">
                <span className="text-slate-800">Say About Our Work </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FeedBack.map((feedback, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg"
              style={{
                backgroundColor: feedback.bgColor,
                color: feedback.textColor,
              }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={feedback.Image}
                  alt={feedback.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{feedback.name}</h3>
                  <p className="text-sm text-gray-500">{feedback.company}</p>
                </div>
              </div>
              <p className="text-base italic">"{feedback.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
