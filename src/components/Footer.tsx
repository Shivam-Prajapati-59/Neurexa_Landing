import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="px-5">
      <section className="w-full bg-[#002240] rounded-4xl ">
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
      {/* ---------- FOOTER NAVIGATION ---------- */}
      <footer className="bg-white py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 md:mb-12">
            {/* Company Info Column */}
            <div className="col-span-1">
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
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Follow us on social media to stay updated with the latest tips,
                trends, and insights in digital marketing.
              </p>
              <p className="text-sm text-slate-600">hello@neuera.com</p>
            </div>

            {/* Navigation Column 1 */}
            <div className="col-span-1">
              <h3 className="font-medium text-slate-800 mb-3 text-base sm:hidden">
                Navigation
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-slate-700 hover:text-blue-600 text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-slate-700 hover:text-blue-600 text-sm"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#product"
                    className="text-slate-700 hover:text-blue-600 text-sm"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-slate-700 hover:text-blue-600 text-sm"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation Column 2 */}
            <div className="col-span-1">
              <h3 className="font-medium text-slate-800 mb-3 text-base sm:hidden">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#support"
                    className="text-slate-700 hover:text-blue-600 text-sm"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-slate-700 hover:text-blue-600 text-sm"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#articles"
                    className="text-slate-700 hover:text-blue-600 text-sm"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-slate-700 hover:text-blue-600 text-sm"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Column */}
            <div className="col-span-1">
              <h3 className="font-medium text-slate-800 mb-3 text-base sm:hidden">
                Connect
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#social"
                    className="text-slate-700 hover:text-blue-600 text-sm"
                  >
                    Social Media
                  </a>
                </li>
                <li>
                  <a
                    href="#dribbble"
                    className="text-slate-700 hover:text-blue-600 text-sm"
                  >
                    Dribbble
                  </a>
                </li>
                <li>
                  <a
                    href="#behance"
                    className="text-slate-700 hover:text-blue-600 text-sm"
                  >
                    Behance
                  </a>
                </li>
                <li>
                  <a
                    href="#linkedin"
                    className="text-slate-700 hover:text-blue-600 text-sm"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-300 pt-6">
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0 sm:items-center">
              <p className="text-sm text-slate-600">© 2024 Neuera</p>
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:gap-8">
                <a
                  href="#privacy"
                  className="text-sm text-slate-600 hover:text-blue-600"
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-sm text-slate-600 hover:text-blue-600"
                >
                  Term of Services
                </a>
              </div>
              <p className="text-sm text-slate-600">All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
