import React from "react";
import Navbar from "../components/navbar/Navbar";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import FAQsSection from "../components/home/FAQsSection";
import Footer from "../components/home/Footer";
import constructionImage from "../assets/images/construction-loan-page/construction-loan.png";
import FeaturesSection from "../components/FeaturesSection";
import { ArrowRightIcon } from "lucide-react";

const ConstructionLoanPage = () => {
  const features = [
    {
      title: "High Loan Amount",
      description: "Loan amounts up to ₹1 Crore based on eligibility",
      iconName: "BanknotesIcon", // Heroicon for finance/money
    },
    {
      title: "Affordable Interest Rates",
      description: "Interest rates starting from 9% p.a.",
      iconName: "CurrencyDollarIcon", // Heroicon for finance/currency
    },
    {
      title: "Flexible Tenure",
      description: "Tenure options up to 10 years for easy repayment",
      iconName: "ClockIcon", // Heroicon for time/tenure
    },
    {
      title: "Quick Digital Processing",
      description:
        "Instant loan approval and processing through digital platforms",
      iconName: "DevicePhoneIcon", // Heroicon for technology/digital
    },
    {
      title: "Minimal Documentation",
      description: "Simple paperwork to get your loan processed faster",
      iconName: "DocumentTextIcon", // Heroicon for documentation
    },
    {
      title: "Flexible Repayment Options",
      description:
        "Choose repayment plans that fit your budget and preferences",
      iconName: "CreditCardIcon", // Heroicon for credit/payment
    },
    {
      title: "No Down Payment Required",
      description: "No need to pay any upfront amount to secure your loan",
      iconName: "CashIcon", // Heroicon for cash/payment
    },
  ];

  return (
    <main className="text-slate-900">
      {/* Navigation bar */}
      <Navbar />
      {/* Hero Section */}
      <section className="py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-100 opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Build Your Dream Home with a Construction Loan.
            </h1>
            <p className="text-lg mb-6">
              Planning to construct your dream home? Our Construction Loans
              offer competitive rates and flexible terms to make your project a
              reality.
            </p>
            <button
              onClick={() => {
                window.open("/loan-apply", "_blank");
              }}
              className="bg-blue-900 hover:bg-blue-800 text-[#fafafa] font-bold py-2 px-6 rounded-lg transition flex items-center gap-2 cursor-pointer text-base max-w-xs"
            >
              Apply Now <ArrowRightIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden md:block">
            <img
              src={constructionImage}
              alt="Construction site with workers"
              className="rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="max-w-6xl m-auto">
        <WhyChooseUsSection />
      </div>

      {/* Overview */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="flex justify-center font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-10">
            About Our Construction Loans
          </h2>
          <p className="text-lg">
            Whether you're building your first home or undertaking a major
            renovation, our Construction Loans are designed to support your
            project from start to finish.
          </p>
          <p className="text-lg mt-4">
            We offer competitive interest rates, flexible repayment options, and
            a hassle-free application process to help you build your dream home.
          </p>
        </div>
      </section>

      {/* Features */}
      <div className="max-w-6xl m-auto">
        <FeaturesSection features={features} />
      </div>

      {/* How it Works */}
      <div className="max-w-6xl m-auto">
        <HowItWorksSection />
      </div>

      {/* Eligibility & Documents */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Eligibility Criteria
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Age: 21 to 60 years</li>
              <li>Employed or self-employed</li>
              <li>Stable income source</li>
              <li>Minimum CIBIL score of 650</li>
              <li>Clear land title</li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Documents Required
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Identity & Address Proof</li>
              <li>Income Proof (Salary slips/IT returns)</li>
              <li>Bank statements (last 6 months)</li>
              <li>Land-related documents</li>
              <li>Construction plan and estimates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interest Rates Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="flex justify-center font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Interest Rates & Fees
          </h2>
          <p className="text-lg font-bold text-slate-700 mb-4">
            Our construction loan interest rates start from a competitive 9% per
            annum. The actual rate offered may vary based on your eligibility
            and the loan amount.
          </p>
          <p className="text-lg text-slate-700 mb-4">
            In addition to the interest rate, please be aware of the following
            potential fees:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Processing Fees</li>
            <li>Valuation Charges</li>
            <li>Legal Fees</li>
            <li>Prepayment Charges (if applicable)</li>
          </ul>
          <p className="text-sm text-slate-500 mt-4">
            For a detailed breakdown of the applicable fees and charges, please
            refer to our loan agreement or contact our customer support.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="max-w-6xl m-auto">
        <FAQsSection />
      </div>

      {/* Footer Section */}
      <div className="max-w-6xl m-auto">
        <Footer />
      </div>
    </main>
  );
};

export default ConstructionLoanPage;
