import React, { useState } from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  TruckIcon,
  DocumentTextIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
  BanknotesIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { BiLeaf } from "react-icons/bi";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

const LoanServicesSection = () => {
  const services = [
    {
      title: "Home Loan",
      description:
        "Make your dream home a reality with our flexible mortgage plans.",
      icon: HomeModernIcon,
    },
    {
      title: "Personal Loan",
      description:
        "Get funds quickly for your personal needs with competitive interest rates.",
      icon: UserGroupIcon,
    },
    {
      title: "Business Loan",
      description:
        "Fuel your business growth with tailored financial solutions.",
      icon: BuildingOfficeIcon,
    },
    {
      title: "Education Loan",
      description:
        "Invest in your future with easy and affordable education financing.",
      icon: AcademicCapIcon,
    },
    {
      title: "Vehicle Loan",
      description:
        "Own your dream vehicle with our quick and hassle-free loan options.",
      icon: TruckIcon,
    },
    {
      title: "Loan Against Property",
      description:
        "Unlock the value of your property with high-value secured loans.",
      icon: DocumentTextIcon,
    },
    {
      title: "Construction Loan",
      description:
        "Build your dream property with our specialized construction financing.",
      icon: BuildingLibraryIcon,
    },
    {
      title: "Agricultural Loan",
      description:
        "Support your farming needs with our dedicated agri-loan solutions.",
      icon: BiLeaf,
    },
    {
      title: "Credit Card Loan",
      description:
        "Convert your credit card balance into easy EMIs with minimal paperwork.",
      icon: CreditCardIcon,
    },
    {
      title: "Working Capital Loan",
      description:
        "Manage day-to-day operations smoothly with our working capital support.",
      icon: BanknotesIcon,
    },
    {
      title: "Startup Loan",
      description:
        "Turn your startup idea into reality with fast and flexible funding.",
      icon: LightBulbIcon,
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // Function to generate a slug from a string
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w-]+/g, ""); // Remove special characters
  };

  const handleServiceClick = (title) => {
    const generatedSlug = generateSlug(title);
    console.log("Generated Slug:", generatedSlug); // You can use this slug for routing or other purposes

    // Open a new tab with the generated slug
    window.open(`/${generatedSlug}`, "_blank");
  };

  return (
    <section className="relative bg-cover bg-center text-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Loans Designed for You
          </h2>
          <p className="text-lg text-slate-900 max-w-3xl mx-auto">
            Whatever your financial goals, we have a loan product designed to
            help you achieve them.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services
            .slice(0, showAll ? services.length : 8)
            .map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  onClick={() => handleServiceClick(service.title)} // Handle click to generate slug
                  className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:border-blue-500 transition-all cursor-pointer
  [clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)]"
                >
                  <Icon className="w-10 h-10 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-900">{service.description}</p>
                </div>
              );
            })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          {!showAll && (
            <button
              className="bg-blue-900 hover:bg-blue-800 text-[#fafafa] font-bold py-3 px-8 rounded-lg transition flex items-center gap-2 mx-auto cursor-pointer"
              onClick={() => setShowAll(true)}
            >
              Explore More Services <ArrowRightIcon className="w-5 h-5" />
            </button>
          )}
          {showAll && (
            <button
              className="bg-blue-900 hover:bg-blue-800 text-[#fafafa] font-bold py-3 px-8 rounded-lg transition flex items-center gap-2 mx-auto cursor-pointer"
              onClick={() => setShowAll(false)}
            >
              Show Less <ArrowLeftIcon className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoanServicesSection;
