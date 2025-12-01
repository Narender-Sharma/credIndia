import React from "react";
import {
  ShieldCheckIcon,
  UsersIcon,
  ChartBarIcon,
  BanknotesIcon,
  ClockIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "Trusted & Secure",
      description:
        "We are a trusted financial partner with a strong track record of helping customers achieve their financial goals.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Expert Team",
      description:
        "Our team of experienced loan specialists is dedicated to guiding you through every step of the process.",
      icon: UsersIcon,
    },
    {
      title: "Competitive Rates",
      description:
        "We offer competitive interest rates and flexible terms to ensure you get the best deal possible.",
      icon: ChartBarIcon,
    },
    {
      title: "Fast Approval",
      description:
        "Our streamlined process ensures quick decisions, often within 24 hours of document submission.",
      icon: ClockIcon,
    },
    {
      title: "Flexible Options",
      description:
        "We offer a wide range of loan products tailored to meet your specific needs and financial situation.",
      icon: LightBulbIcon,
    },
    {
      title: "Transparent Process",
      description:
        "We believe in transparency and provide clear, straightforward information to help you make informed decisions.",
      icon: BanknotesIcon,
    },
  ];

  return (
    <section className="relative bg-cover bg-center text-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-slate-900 max-w-3xl mx-auto">
            See why so many customers rely on us for their financial needs.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:border-blue-500 transition-all cursor-pointer
  [clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)]"
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-900">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
