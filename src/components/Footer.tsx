import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    /* deep‑blue backdrop, full‑width */
    <section className="w-full bg-[#002240]">
      {/* layout wrapper */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-6 py-16 sm:px-10 lg:px-10">
        {/* ---------- LEFT : HEADLINE ---------- */}
        <div className="relative max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight uppercase">
            {/* line 1 */}
            <span className="block text-white">
              Ready&nbsp;to&nbsp;boost&nbsp;your
            </span>

            {/* line 2 with overlay icon */}
            <span className="block relative text-[#caa8ff]">
              Brand’s&nbsp;Strategic
              {/* overlay comment/like bubble */}
              <Image
                src="/Comment.png"
                alt="Like notification"
                width={70}
                height={70}
                priority
                className="absolute -top-8 left-1/2 -translate-x-1/2 rotate-6 drop-shadow-lg"
              />
            </span>

            {/* line 3 */}
            <span className="block">
              <span className="text-[#caa8ff]">Impact</span>
              &nbsp;and&nbsp;
              <span className="text-white">Achieve</span>
            </span>

            {/* line 4 */}
            <span className="block text-[#caa8ff]">
              Significant&nbsp;Growth<span className="text-white">?</span>
            </span>
          </h1>
        </div>

        {/* ---------- RIGHT : ORANGE SQUARE ---------- */}
        <div className="shrink-0">
          <div className="">
            <Image
              src="/FileIcon.png" // arrow graphic
              alt="Up‑right arrow"
              width={320}
              height={320}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
