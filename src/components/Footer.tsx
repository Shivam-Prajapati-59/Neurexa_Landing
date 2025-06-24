import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="px-3 sm:px-5">
      <section className="w-full bg-[#002240] rounded-2xl sm:rounded-3xl lg:rounded-4xl">
        {/* layout wrapper */}
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-12 md:flex-row md:items-start md:gap-10 md:py-16 lg:px-10 xl:items-center">
          {/* ---------- LEFT : HEADLINE ---------- */}
          <div className="relative w-full max-w-2xl text-center md:text-left">
            <h1 className="text-2xl font-extrabold leading-[1.1] tracking-tight uppercase sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl xl:leading-[1.08]">
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
                  <span className="text-[#caa8ff]">Strategic</span>
                </span>
                {/* overlay comment/like bubble with animations */}
                <div className="absolute -top-4 right-2 sm:-top-6 sm:right-4 md:-top-8 md:left-1/2 md:right-auto md:-translate-x-1/2 lg:-top-10">
                  <Image
                    src="/Comment.png"
                    alt="Like notification"
                    width={60}
                    height={60}
                    priority
                    className="h-[60px] w-[60px] rotate-6 drop-shadow-lg animate-bounce sm:h-[80px] sm:w-[80px] md:h-[90px] md:w-[90px] lg:h-[100px] lg:w-[100px] xl:h-[110px] xl:w-[110px] hover:rotate-12 hover:scale-110 transition-all duration-300 ease-in-out"
                    style={{
                      animationDelay: "1s",
                      animationDuration: "2s",
                      animationIterationCount: "infinite",
                    }}
                  />
                </div>
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
          <div className="shrink-0 mt-4 md:mt-0">
            <Image
              src="/FileIcon.png"
              alt="File icon graphic"
              width={200}
              height={200}
              priority
              className="h-auto w-[160px] sm:w-[200px] md:w-[220px] lg:w-[260px] xl:w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>

      {/* ---------- FOOTER NAVIGATION ---------- */}
      <footer className="bg-white py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 sm:gap-8 sm:mb-10 lg:grid-cols-4 lg:gap-8 lg:mb-12">
            {/* Company Info Column */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-slate-800 rounded-md flex items-center justify-center">
                  <div className="w-6 h-6 bg-slate-800 rounded-sm relative">
                    <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute bottom-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-slate-800">NEUERA</h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 max-w-xs">
                Follow us on social media to stay updated with the latest tips,
                trends, and insights in digital marketing.
              </p>
              <p className="text-sm text-slate-600 font-medium">
                hello@neuera.com
              </p>
            </div>

            {/* Navigation Column 1 */}
            <div className="col-span-1">
              <h3 className="font-semibold text-slate-800 mb-4 text-base">
                Navigation
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors duration-200 block py-1"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors duration-200 block py-1"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#product"
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors duration-200 block py-1"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors duration-200 block py-1"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation Column 2 */}
            <div className="col-span-1">
              <h3 className="font-semibold text-slate-800 mb-4 text-base">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#support"
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors duration-200 block py-1"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors duration-200 block py-1"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#articles"
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors duration-200 block py-1"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors duration-200 block py-1"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Column */}
            <div className="col-span-1">
              <h3 className="font-semibold text-slate-800 mb-4 text-base">
                Connect
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#social"
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors duration-200 block py-1"
                  >
                    Social Media
                  </a>
                </li>
                <li>
                  <a
                    href="#dribbble"
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors duration-200 block py-1"
                  >
                    Dribbble
                  </a>
                </li>
                <li>
                  <a
                    href="#behance"
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors duration-200 block py-1"
                  >
                    Behance
                  </a>
                </li>
                <li>
                  <a
                    href="#linkedin"
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors duration-200 block py-1"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col space-y-4 text-center sm:flex-row sm:justify-between sm:space-y-0 sm:items-center sm:text-left">
              <p className="text-sm text-slate-600 order-2 sm:order-1">
                © 2024 Neuera
              </p>
              <div className="flex flex-col space-y-2 order-1 sm:order-2 sm:flex-row sm:space-y-0 sm:gap-6 lg:gap-8">
                <a
                  href="#privacy"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>
              <p className="text-sm text-slate-600 order-3 sm:order-3">
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
