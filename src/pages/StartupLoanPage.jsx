import React from "react";
import Navbar from "../components/navbar/Navbar";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import FAQsSection from "../components/home/FAQsSection";
import Footer from "../components/home/Footer";
import startupImage from "../assets/images/startup-loan-page/startup-loan.png";
import FeaturesSection from "../components/FeaturesSection";
import { ArrowRightIcon } from "lucide-react";

const StartupLoanPage = () => {
  const features = [
    {
      title: "Loan amounts up to ₹10 Lakh",
      description:
        "Get access to loan amounts up to ₹10 Lakh based on your eligibility.",
      iconName: "CurrencyDollarIcon", // Heroicon for currency/finance
    },
    {
      title: "Interest rates starting from 10.5% p.a.",
      description: "Enjoy competitive interest rates starting from 10.5% p.a.",
      iconName: "ArrowCircleUpIcon", // Heroicon for interest rates
    },
    {
      title: "Tenure up to 5 years",
      description:
        "Choose a repayment tenure of up to 5 years to suit your financial plan.",
      iconName: "ClockIcon", // Heroicon for time (tenure)
    },
    {
      title: "Quick digital processing",
      description:
        "Benefit from fast and efficient loan processing through a digital platform.",
      iconName: "DevicePhoneIcon", // Heroicon for technology (digital)
    },
    {
      title: "Minimal documentation",
      description:
        "Submit only essential documentation for a smooth and hassle-free loan process.",
      iconName: "DocumentTextIcon", // Heroicon for documents
    },
    {
      title: "Flexible repayment options",
      description:
        "Choose from various repayment options based on your convenience.",
      iconName: "CreditCardIcon", // Heroicon for flexible payments
    },
    {
      title: "No collateral required for small loans",
      description:
        "Get approved for small loans without the need for collateral.",
      iconName: "LockClosedIcon", // Heroicon for security (no collateral)
    },
  ];

  return (
    <main className="text-slate-900">
      {/* Navigation bar */}
      <Navbar />
      {/* Hero Section */}
      <section className="py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0  opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Launch Your Startup with a Startup Loan.
            </h1>
            <p className="text-lg mb-6">
              Ready to turn your business idea into reality? Our Startup Loans
              offer competitive rates and flexible terms to help you get
              started.
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
              src={startupImage}
              alt="Startup team working together"
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
            About Our Startup Loans
          </h2>
          <p className="text-lg">
            Whether you're developing a new product, entering a new market, or
            scaling your operations, our Startup Loans are designed to support
            your entrepreneurial journey.
          </p>
          <p className="text-lg mt-4">
            We offer competitive interest rates, flexible repayment options, and
            a hassle-free application process to help you launch and grow your
            startup.
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
              <li>Age: 21 to 45 years</li>
              <li>Valid business plan</li>
              <li>Stable income source or proof of funding</li>
              <li>Minimum CIBIL score of 650</li>
              <li>Clear business registration</li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Documents Required
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Business registration certificate</li>
              <li>Identity & Address Proof of business owner</li>
              <li>Income Proof (Salary slips/IT returns)</li>
              <li>Bank statements (last 6 months)</li>
              <li>Business plan and financial projections</li>
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
            Our startup loan interest rates start from a competitive 10.5% per
            annum. The actual rate offered may vary based on your eligibility
            and the loan amount.
          </p>
          <p className="text-lg text-slate-700 mb-4">
            In addition to the interest rate, please be aware of the following
            potential fees:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Processing Fees</li>
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

export default StartupLoanPage;
