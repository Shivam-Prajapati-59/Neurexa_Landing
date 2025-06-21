import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    /* deep‑blue backdrop, full‑width */
    <section className="w-full bg-[#002240]">
      {/* layout wrapper */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-12 sm:px-6 sm:py-16 md:flex-row md:items-start md:gap-10 lg:px-10 xl:items-center">
        {/* ---------- LEFT : HEADLINE ---------- */}
        <div className="relative w-full max-w-2xl text-center md:text-left">
          <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xl:leading-[1.08]">
            {/* line 1 */}
            <span className="block text-white">
              Ready&nbsp;to&nbsp;
              <span className="text-[#caa8ff]">boost</span>
              &nbsp;your
            </span>

            {/* line 2 with overlay icon */}
            <span className="relative flex flex-col items-center justify-center text-white sm:flex-row sm:justify-start md:flex-row">
              <span className="block">
                Brand's&nbsp;
                <span className="text-[#caa8ff] pl-15">Strategic</span>
              </span>
              {/* overlay comment/like bubble - responsive positioning */}
              <Image
                src="/Comment.png"
                alt="Like notification"
                width={80}
                height={80}
                priority
                className="absolute -top-6 right-4 rotate-6 drop-shadow-lg sm:-top-8 sm:right-8 sm:h-[100px] sm:w-[100px] md:-top-10 md:left-1/2 md:right-auto md:-translate-x-1/2 lg:-top-12 lg:h-[120px] lg:w-[120px]"
              />
            </span>

            {/* line 3 */}
            <span className="block">
              <span className="text-[#caa8ff]">Impact</span>
              &nbsp;<span className="text-[#caa8ff]">And</span>&nbsp;
              <span className="text-white">Achieve</span>
            </span>

            {/* line 4 */}
            <span className="block text-[#caa8ff]">
              <span className="text-white">Significant</span>&nbsp;Growth
              <span className="text-white">?</span>
            </span>
          </h1>
        </div>

        {/* ---------- RIGHT : FILE ICON ---------- */}
        <div className="shrink-0">
          <Image
            src="/FileIcon.png"
            alt="File icon graphic"
            width={200}
            height={200}
            priority
            className="h-auto w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
