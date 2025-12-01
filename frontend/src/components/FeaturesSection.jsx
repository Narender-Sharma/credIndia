import React from "react";
import * as OutlineIcons from "@heroicons/react/24/outline";

const FeaturesSection = ({ features }) => {
  // Dynamically get Heroicon component
  const getIconComponent = (iconName) => {
    return OutlineIcons[iconName] || OutlineIcons["QuestionMarkCircleIcon"];
  };

  return (
    <section className="relative bg-cover bg-center text-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Key Features
          </h2>
          <p className="text-lg text-slate-900 max-w-3xl mx-auto">
            Check out the features of our platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = getIconComponent(feature.iconName);

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
                  {feature.title}
                </h3>
                <p className="text-slate-900">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
