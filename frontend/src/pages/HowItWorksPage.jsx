import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import { ArrowRightIcon } from "lucide-react";
import HowItWorksSection from "../components/home/HowItWorksSection";
import FAQsSection from "../components/home/FAQsSection";

const HowItWorksPage = () => {
  return (
    <main className="text-slate-900">
      {/* Navigation bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            How Our Loan Process Works
          </h1>
          <p className="text-lg mb-6 text-slate-700 max-w-3xl mx-auto">
            We've simplified the loan application process into five easy steps.
            Get the funds you need quickly and without hassle.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => {
                window.open("/loan-apply", "_blank");
              }}
              className="bg-blue-900 hover:bg-blue-800 text-[#fafafa] font-bold py-2 px-6 rounded-lg transition flex items-center gap-2 cursor-pointer text-base max-w-xs"
            >
              Apply Now <ArrowRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <div className="max-w-5xl m-auto">
        <HowItWorksSection />
      </div>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-montserrat text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Why Our Process Stands Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:border-blue-500 transition-all 
  [clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)]"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Fast Processing
              </h3>
              <p className="text-slate-600">
                Most applications approved within 24 hours with our streamlined
                digital process.
              </p>
            </div>
            <div
              className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:border-blue-500 transition-all  
  [clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)]"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Transparent Terms
              </h3>
              <p className="text-slate-600">
                No hidden charges with all fees and rates clearly explained
                upfront.
              </p>
            </div>
            <div
              className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:border-blue-500 transition-all  
  [clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)]"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Secure Handling
              </h3>
              <p className="text-slate-600">
                Bank-level encryption protects your personal and financial
                information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="max-w-5xl m-auto">
        <FAQsSection />
      </div>

      {/* Footer Section */}
      <Footer />
    </main>
  );
};

export default HowItWorksPage;
