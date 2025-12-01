import React from "react";
import Navbar from "../components/navbar/Navbar";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import FAQsSection from "../components/home/FAQsSection";
import Footer from "../components/home/Footer";
import propertyImage from "../assets/images/loan-against-property/loan-against-property.png";
import FeaturesSection from "../components/FeaturesSection";
import { ArrowRightIcon } from "lucide-react";
import BalanceTransferSection from "../components/BalanceTransferSection";

const LoanAgainstProperty = () => {
  const loanAgainstPropertyData = {
    title: "Leverage Your Property for Instant Funds",
    description:
      "Unlock the value of your property with our Loan Against Property, offering attractive interest rates, flexible tenures, and quick processing to meet your financial needs.",
    benefits: [
      {
        title: "High Loan Amount",
        description:
          "Avail loan amounts up to ₹3 Crore based on property valuation, suitable for personal or business requirements.",
        iconName: "HomeIcon",
      },
      {
        title: "Attractive Interest Rates",
        description:
          "Enjoy interest rates starting at 9% per annum, ensuring affordable EMIs.",
        iconName: "CurrencyRupeeIcon",
      },
      {
        title: "Flexible Repayment Tenure",
        description:
          "Choose repayment tenures up to 15 years, providing manageable monthly installments.",
        iconName: "ClockIcon",
      },
      {
        title: "Quick Processing & Disbursal",
        description:
          "Our streamlined processing ensures fast approval and disbursal based on property value.",
        iconName: "CheckBadgeIcon",
      },
      {
        title: "Retain Property Ownership",
        description:
          "Continue using the property while leveraging its value for financial needs.",
        iconName: "ShieldCheckIcon",
      },
    ],
  };

  const features = [
    {
      title: "High Loan Amount",
      description: "Loan amounts up to ₹5 Crore based on eligibility",
      iconName: "BanknotesIcon", // Heroicon for finance/money
    },
    {
      title: "Affordable Interest Rates",
      description: "Interest rates starting from 8.5% p.a.",
      iconName: "CurrencyDollarIcon", // Heroicon for finance/currency
    },
    {
      title: "Flexible Tenure",
      description: "Tenure options up to 15 years for easy repayment",
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
      title: "No Prepayment Penalties",
      description:
        "Make extra payments or pay off the loan early without any penalties",
      iconName: "XCircleIcon", // Heroicon for freedom/no penalties
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
              Unlock the Value of Your Property with a Loan Against Property.
            </h1>
            <p className="text-lg mb-6">
              Need funds for business expansion, home improvement, or personal
              needs? Our Loan Against Property offers competitive rates and
              flexible terms.
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
              src={propertyImage}
              alt="Modern house with a garden"
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
            About Our Loan Against Property
          </h2>
          <p className="text-lg">
            Whether you're looking to expand your business, renovate your home,
            or meet other financial needs, our Loan Against Property can provide
            the funds you need.
          </p>
          <p className="text-lg mt-4">
            We offer competitive interest rates, flexible repayment options, and
            a hassle-free application process to help you unlock the value of
            your property.
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
              <li>Age: 21 to 65 years</li>
              <li>Employed or self-employed</li>
              <li>Stable income source</li>
              <li>Minimum CIBIL score of 650</li>
              <li>Clear property title</li>
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
              <li>Property-related documents</li>
              <li>Property valuation report</li>
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
            Our loan against property interest rates start from a competitive
            8.5% per annum. The actual rate offered may vary based on your
            eligibility and the loan amount.
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

      {/* loanAgainstPropertyData */}
      <BalanceTransferSection data={loanAgainstPropertyData} />

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

export default LoanAgainstProperty;
