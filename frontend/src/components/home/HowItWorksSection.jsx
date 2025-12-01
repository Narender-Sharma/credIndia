import React from "react";
import {
  ClipboardDocumentCheckIcon,
  UserCircleIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Application",
      description:
        "Fill out our simple online form with basic details about your loan needs.",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: "Consultation",
      description:
        "Get matched with a loan specialist who will guide you through the options.",
      icon: UserCircleIcon,
    },
    {
      title: "Approval",
      description:
        "Receive a quick decision, often within 24 hours of document submission.",
      icon: ClockIcon,
    },
    {
      title: "Funding",
      description:
        "Get your funds disbursed directly to your account upon approval.",
      icon: CheckCircleIcon,
    },
  ];

  return (
    <section className="relative bg-cover bg-center text-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Simple Loan Process
          </h2>
          <p className="text-lg text-slate-900 max-w-3xl mx-auto">
            Getting the financing you need is now quicker and easier with our
            streamlined 4-step approach.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:border-blue-500 transition-all  cursor-pointer
  [clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)]"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-blue-900 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 group-hover:scale-110 transition">
                    {index + 1}
                  </div>
                  <Icon className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-900">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="flex justify-center text-center">
          <button
            onClick={() => {
              window.open("/loan-apply", "_blank");
            }}
            className="bg-blue-900 hover:bg-blue-800 text-[#fafafa] font-bold py-2 px-6 rounded-lg transition flex items-center gap-2 cursor-pointer text-base max-w-xs"
          >
            Start Your Application <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
