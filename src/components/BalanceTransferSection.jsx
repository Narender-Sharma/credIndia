import React from "react";
import * as HeroIcons from "@heroicons/react/24/outline";

const BalanceTransferSection = ({ data }) => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-center">
          {data.title}
        </h2>
        <p className="text-lg text-slate-900 mb-6 text-center">
          {data.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {data.benefits.map((benefit, index) => {
            const IconComponent = HeroIcons[benefit.iconName];

            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:border-blue-500 transition-all 
                [clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)]
                md:text-left text-left"
              >
                {IconComponent ? (
                  <IconComponent className="h-8 w-8 text-blue-600 mb-4 mx-auto md:mx-0" />
                ) : (
                  <div className="h-8 w-8 mb-4 mx-auto md:mx-0" />
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-700">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BalanceTransferSection;
