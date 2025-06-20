import React from "react";
import Image from "next/image";

// Single person card component
const PersonCard = ({
  name,
  title,
  image,
  color,
  textOnLeft = true,
}: {
  name: string;
  title: string;
  image: string;
  color: string;
  textOnLeft?: boolean;
}) => (
  <div className="flex items-center justify-between gap-6">
    {textOnLeft ? (
      <>
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-bold text-[#1A3863] uppercase tracking-wide">
            {name}
          </h1>

          <p className="text-sm md:text-base text-gray-600 font-light">
            {title}
          </p>
        </div>
        <div
          className="w-[260px] h-[280px] md:w-[280px] md:h-[300px] shadow-lg overflow-hidden rounded-3xl"
          style={{ backgroundColor: color }}
        >
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </>
    ) : (
      <>
        <div
          className="w-[260px] h-[280px] md:w-[280px] md:h-[300px] shadow-lg overflow-hidden rounded-3xl"
          style={{ backgroundColor: color }}
        >
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 text-right">
          <h1 className="text-xl md:text-2xl font-bold text-[#1A3863] uppercase tracking-wide">
            {name}
          </h1>
          <p className="text-sm md:text-base text-gray-600 font-light">
            {title}
          </p>
        </div>
      </>
    )}
  </div>
);

// Multi-person card component
const MultiPersonCard = ({
  names,
  title,
  image,
  color,
  textOnLeft = true,
}: {
  names: string[];
  title: string;
  image: string;
  color: string;
  textOnLeft?: boolean;
}) => (
  <div className="flex items-center justify-between gap-6">
    {textOnLeft ? (
      <>
        <div className="flex-1">
          {names.map((name, index) => (
            <h1
              key={index}
              className="text-xl md:text-2xl font-bold text-[#1A3863] uppercase tracking-wide"
            >
              {name}
            </h1>
          ))}
          <p className="text-sm md:text-base text-gray-600 font-light">
            {title}
          </p>
        </div>
        <div
          className="w-[260px] h-[280px] md:w-[280px] md:h-[300px] shadow-lg overflow-hidden rounded-3xl"
          style={{ backgroundColor: color }}
        >
          <Image
            src={image}
            alt={names.join(", ")}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </>
    ) : (
      <>
        <div
          className="w-[260px] h-[280px] md:w-[280px] md:h-[300px] shadow-lg overflow-hidden rounded-3xl"
          style={{ backgroundColor: color }}
        >
          <Image
            src={image}
            alt={names.join(", ")}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 text-right">
          {names.map((name, index) => (
            <h1
              key={index}
              className="text-xl md:text-2xl font-bold text-[#1A3863] uppercase tracking-wide"
            >
              {name}
            </h1>
          ))}
          <p className="text-sm md:text-base text-gray-600 font-light">
            {title}
          </p>
        </div>
      </>
    )}
  </div>
);

const CreatorsPage = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8 max-w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-60 md:gap-24">
        {/* Row 1 */}
        <PersonCard
          name="JOHN SMITH"
          title="CEO & FOUNDER"
          image="/john.png"
          color="#9D0045"
          textOnLeft={true}
        />
        <PersonCard
          name="JANE DOE"
          title="Chief Creative Officer"
          image="/john.png"
          color="#FF6347"
          textOnLeft={true}
        />

        {/* Row 2 - Note the textOnLeft is false to match the image */}
        <MultiPersonCard
          names={["EMILY DAVIS", "RACHEL LEE"]}
          title="Influencer Relations Specialist"
          image="/john.png"
          color="#E6CCFF"
          textOnLeft={false}
        />
        <MultiPersonCard
          names={["OLIVIA WHITE", "DAVID KIM", "SOPHIA PATEL"]}
          title="Marketing Automation Specialist"
          image="/john.png"
          color="#E6CCFF"
          textOnLeft={false}
        />

        {/* Row 3 */}
        <PersonCard
          name="LIAM MITCHELL"
          title="Brand Strategist"
          image="/john.png"
          color="#FFD1D1"
          textOnLeft={true}
        />
        <PersonCard
          name="BELLA TORRES"
          title="Video Production Manager"
          image="/john.png"
          color="#9D0045"
          textOnLeft={true}
        />
      </div>
    </div>
  );
};

export default CreatorsPage;
