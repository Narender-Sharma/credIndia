import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Optional: for icons

import heroSection from "../../assets/images/home/hero-section.jpg"; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center text-slate-900 py-30 px-4 sm:px-6 lg:px-8 rounded-br-[400px]  overflow-hidden"
        style={{ backgroundImage: `url(${heroSection})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#00000086] "></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Headline + CTA */}
            <div className="space-y-6">
              <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Loans that Fit Your Needs—Quick Approvals, Flexible Payments
              </h1>
              <p className="text-lg sm:text-xl opacity-90 text-white">
                Your loan, your terms—approved in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <button
                  onClick={() => {
                    window.open("/loan-apply", "_blank");
                  }}
                  className="bg-blue-900 hover:bg-blue-800 text-[#fafafa] font-bold py-2 px-6 rounded-lg transition flex items-center gap-2 cursor-pointer text-base max-w-xs"
                >
                  Apply Now <ArrowRightIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No hidden fees</span>
                <span className="mx-2">•</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>24/7 Online Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
