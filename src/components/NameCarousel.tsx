"use client";
import React from "react";
import Image from "next/image";

// Company objects with logo paths from the public/company folder
const companies = [
  {
    name: "Amazon",
    logoPath: "/company/amazon-logo.png",
    alt: "Amazon logo",
  },
  {
    name: "Brave",
    logoPath: "/company/brave-logo.svg",
    alt: "Brave logo",
  },
  {
    name: "Cadbury",
    logoPath: "/company/cadbury.png",
    alt: "Cadbury logo",
  },
  {
    name: "AWS",
    logoPath: "/company/aws_logo.png",
    alt: "AWS logo",
  },
  {
    name: "Amazon",
    logoPath: "/company/amazon-logo.png",
    alt: "Amazon logo",
  },
  {
    name: "Brave",
    logoPath: "/company/brave-logo.svg",
    alt: "Brave logo",
  },
  {
    name: "AWS",
    logoPath: "/company/aws_logo.png",
    alt: "AWS logo",
  },
];

export default function NameCarousel() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#b6024d] py-8">
      <div className="flex animate-marquee items-center">
        {companies.concat(companies).map((company, idx) => (
          <div key={idx} className="mx-12 flex-shrink-0">
            <Image
              src={company.logoPath}
              alt={company.alt}
              width={120}
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        /* Pause animation on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
