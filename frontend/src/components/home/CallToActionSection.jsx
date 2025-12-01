import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const CallToActionSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-slate-900 pb-10 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-slate-900 max-w-3xl mx-auto">
            Don't miss out on the opportunity to achieve your financial goals.
            Contact us today to get started.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 justify-center">
          <a
            href="tel:+918377003037"
            className="bg-gray-300 text-blue-600 font-medium px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-blue-100 transition-all"
          >
            <PhoneIcon className="w-6 h-6" />
            <span>Call Us</span>
          </a>
          <a
            href="mailto:loans@crediindia.com"
            className="bg-gray-300 text-blue-600 font-medium px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-blue-100 transition-all"
          >
            <EnvelopeIcon className="w-6 h-6" />
            <span>Email Us</span>
          </a>
          <a
            href="/apply"
            className="bg-yellow-500 text-white font-medium px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-yellow-600 transition-all"
          >
            <ArrowRightIcon className="w-6 h-6" />
            <span>Apply Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
