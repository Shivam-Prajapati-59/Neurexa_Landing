import React from "react";
import Image from "next/image";

const CreatorsPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-20 py-8">
      {/* Grid container that adapts to screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
        {/* Image 1 */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/people1.png"
              alt="Creator 1"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-md"
              priority
            />
          </div>
        </div>

        {/* Image 2 */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/people1.png"
              alt="Creator 2"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Image 3 */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/people1.png"
              alt="Creator 3"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Image 4 */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/people1.png"
              alt="Creator 4"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Image 5 */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/people1.png"
              alt="Creator 5"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Image 6 */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/people1.png"
              alt="Creator 6"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsPage;
