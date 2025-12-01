import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import loanApply from "../assets/images/loan-apply/loan-apply.png";
import LoanApplicationForm from "../components/LoanApplicationForm";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";

const LoanApplyPage = () => {
  const scrollToForm = () => {
    // Scroll to the form section
    document
      .getElementById("loanApplicationForm")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="text-slate-900 ">
      {/* Navigation bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Apply for a Loan in Minutes
            </h1>
            <p className="text-lg mb-6 text-slate-700">
              Get instant approval on your loan application with minimal
              documentation and competitive interest rates.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-blue-900 hover:bg-blue-800 text-[#fafafa] font-bold py-2 px-6 rounded-lg transition flex items-center gap-2 cursor-pointer text-base max-w-xs"
              aria-label="Begin loan application"
            >
              Begin Application
            </button>
          </div>
          <div className="hidden md:block">
            <img
              src={loanApply}
              alt="Happy couple discussing finances"
              className="rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Loan Application Form Section */}
      <LoanApplicationForm id="loanApplicationForm" />

      {/* Why Choose Us Section */}
      <div className="max-w-5xl m-auto">
        <WhyChooseUsSection />
      </div>

      {/* Footer Section */}
      <Footer />
    </main>
  );
};

export default LoanApplyPage;
