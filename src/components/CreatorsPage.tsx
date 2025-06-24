import React from "react";
import Image from "next/image";

const CreatorsPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-20 pt-5">
      <div className="flex flex-row items-center justify-center w-full max-w-8xl mx-auto">
        <Image src={"/people1.png"} alt="Creators" width={500} height={500} />
        <Image src={"/people1.png"} alt="Creators" width={500} height={500} />
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-8xl mx-auto">
        <Image src={"/people1.png"} alt="Creators" width={500} height={500} />
        <Image src={"/people1.png"} alt="Creators" width={500} height={500} />
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-8xl mx-auto">
        <Image src={"/people1.png"} alt="Creators" width={500} height={500} />
        <Image src={"/people1.png"} alt="Creators" width={500} height={500} />
      </div>
    </div>
  );
};

export default CreatorsPage;
