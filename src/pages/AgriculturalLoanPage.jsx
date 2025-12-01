import React from "react";
import Navbar from "../components/navbar/Navbar";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import FAQsSection from "../components/home/FAQsSection";
import Footer from "../components/home/Footer";
import agriculturalImage from "../assets/images/agricultural-loan-page/agricultural-loan.png";
import FeaturesSection from "../components/FeaturesSection";
import { ArrowRightIcon } from "lucide-react";
import BalanceTransferSection from "../components/BalanceTransferSection";


const AgriculturalLoanPage = () => {
  const agriculturalLoanData = {
  title: "Empower Your Farming Dreams with Our Agricultural Loan",
  description:
    "Finance your agricultural needs with our Agricultural Loan, offering attractive interest rates, flexible tenures, and quick processing to support your farming aspirations.",
  benefits: [
    {
      title: "High Loan Amount",
      description:
        "Get loan amounts up to ₹50 Lakh for crop cultivation, equipment purchase, or land development.",
      iconName: "HomeIcon",
    },
    {
      title: "Low Interest Rates",
      description:
        "Interest rates starting at 7% per annum, ensuring affordable EMIs for farmers.",
      iconName: "CurrencyRupeeIcon",
    },
    {
      title: "Flexible Repayment Tenure",
      description:
        "Choose repayment tenures up to 10 years, aligned with crop cycles and cash flow.",
      iconName: "ClockIcon",
    },
    {
      title: "Quick & Easy Processing",
      description:
        "Fast processing ensures timely disbursal, enabling you to meet urgent agricultural expenses.",
      iconName: "CheckBadgeIcon",
    },
    {
      title: "Subsidy & Support Programs",
      description:
        "Access government subsidies and support programs to reduce overall costs.",
      iconName: "AcademicCapIcon",
    },
  ],
};

  const features = [
    {
      title: "Loan Amounts Up to ₹5 Lakh",
      description: "Loan amounts up to ₹5 Lakh based on eligibility",
      iconName: "BanknotesIcon", // Heroicon for money/finance
    },
    {
      title: "Affordable Interest Rates",
      description: "Interest rates starting from 7% p.a.",
      iconName: "CurrencyDollarIcon", // Heroicon for currency
    },
    {
      title: "Flexible Tenure",
      description: "Repayment tenure options up to 5 years",
      iconName: "ClockIcon", // Heroicon for time
    },
    {
      title: "Quick Digital Processing",
      description: "Instant loan approval and processing via digital platforms",
      iconName: "DevicePhoneIcon", // Heroicon for technology
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
      title: "Government Subsidies & Benefits",
      description:
        "Get access to subsidies and government benefits on the loan",
      iconName: "BanknotesIcon", // Heroicon for money/finance
    },
  ];

  return (
    <main className="text-slate-900">
      {/* Navigation bar */}
      <Navbar />
      {/* Hero Section */}
      <section className="py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Support Your Farming Journey with an Agricultural Loan.
            </h1>
            <p className="text-lg mb-6">
              Looking to invest in your agricultural business? Our Agricultural
              Loans offer competitive rates and flexible terms to help you grow
              your farm.
            </p>
            <button
                onClick={() => {
                window.open("/loan-apply", "_blank");
              }}
                className="bg-blue-900 hover:bg-blue-800 text-[#fafafa] font-bold py-2 px-6 rounded-lg transition flex items-center gap-2 cursor-pointer text-base max-w-xs">
                  Apply Now <ArrowRightIcon className="w-6 h-6" />
                </button>
          </div>
          <div className="hidden md:block">
            <img
                src={agriculturalImage}
              alt="Farmer working in the field"
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
            About Our Agricultural Loans
          </h2>
          <p className="text-lg">
            Whether you're a small-scale farmer or a large agribusiness, our
            Agricultural Loans are designed to support your farming activities
            and help you achieve higher yields.
          </p>
          <p className="text-lg mt-4">
            We offer competitive interest rates, flexible repayment options, and
            a hassle-free application process to help you invest in your
            agricultural business.
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
              <li>Age: 18 to 65 years</li>
              <li>Engaged in agricultural activities</li>
              <li>Stable income source from farming</li>
              <li>Minimum CIBIL score of 600</li>
              <li>Clear land title (if applicable)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Documents Required
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Identity & Address Proof</li>
              <li>Income Proof (Agricultural income certificate)</li>
              <li>Bank statements (last 3 years)</li>
              <li>Land-related documents (if applicable)</li>
              <li>Government subsidy details (if applicable)</li>
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
            Our agricultural loan interest rates start from a competitive 7% per
            annum. The actual rate offered may vary based on your eligibility
            and the loan amount.
          </p>
          <p className="text-lg text-slate-700 mb-4">
            In addition to the interest rate, please be aware of the following
            potential fees:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Processing Fees</li>
            <li>Valuation Charges (if applicable)</li>
            <li>Legal Fees</li>
            <li>Prepayment Charges (if applicable)</li>
          </ul>
          <p className="text-sm text-slate-500 mt-4">
            For a detailed breakdown of the applicable fees and charges, please
            refer to our loan agreement or contact our customer support.
          </p>
        </div>
      </section>

{/* Balance Transfer */}
      <BalanceTransferSection data={agriculturalLoanData} />

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

export default AgriculturalLoanPage;
