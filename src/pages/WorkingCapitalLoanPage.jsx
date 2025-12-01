import React from "react";
import Navbar from "../components/navbar/Navbar";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import FAQsSection from "../components/home/FAQsSection";
import Footer from "../components/home/Footer";
import workingCapitalImage from "../assets/images/working-capital-loan-page/working-capital-loan.png";
import FeaturesSection from "../components/FeaturesSection";
import { ArrowRightIcon } from "lucide-react";
import BalanceTransferSection from "../components/BalanceTransferSection";

const WorkingCapitalLoanPage = () => {
  const workingCapitalLoanData = {
    title: "Boost Your Business with Our Working Capital Loan",
    description:
      "Maintain smooth business operations with our Working Capital Loan, offering quick access to funds, competitive interest rates, and flexible repayment options.",
    benefits: [
      {
        title: "High Loan Amount",
        description:
          "Get loan amounts up to ₹1 Crore to manage operational expenses, payroll, or inventory purchase.",
        iconName: "HomeIcon",
      },
      {
        title: "Competitive Interest Rates",
        description:
          "Interest rates starting at 11% per annum, ensuring cost-effective financing for your business.",
        iconName: "CurrencyRupeeIcon",
      },
      {
        title: "Flexible Tenure",
        description:
          "Choose repayment tenures up to 5 years, allowing for smooth cash flow management.",
        iconName: "ClockIcon",
      },
      {
        title: "Quick Processing & Disbursal",
        description:
          "Fast approval and disbursal to ensure timely access to working capital.",
        iconName: "CheckBadgeIcon",
      },
      {
        title: "Collateral-Free Options",
        description:
          "Access unsecured working capital loans, reducing asset-related risks.",
        iconName: "ShieldCheckIcon",
      },
    ],
  };

  const features = [
    {
      title: "Loan amounts up to ₹50 Lakh",
      description:
        "Get access to loan amounts up to ₹50 Lakh based on eligibility.",
      iconName: "CurrencyDollarIcon", // Heroicon for currency/finance
    },
    {
      title: "Affordable Interest Rates",
      description:
        "Interest rates starting from 10% p.a. to ensure affordability.",
      iconName: "ArrowCircleUpIcon", // Heroicon for interest rates (financial context)
    },
    {
      title: "Flexible Tenure",
      description:
        "Choose repayment tenure up to 5 years, based on your convenience.",
      iconName: "ClockIcon", // Heroicon for time (tenure)
    },
    {
      title: "Quick Digital Processing",
      description:
        "Fast and efficient loan processing through our digital platform.",
      iconName: "DevicePhoneIcon", // Heroicon for technology (digital)
    },
    {
      title: "Minimal Documentation",
      description: "Submit minimal documentation for quick approval.",
      iconName: "DocumentTextIcon", // Heroicon for documents
    },
    {
      title: "Flexible Repayment Options",
      description: "Choose from a variety of flexible repayment options.",
      iconName: "CreditCardIcon", // Heroicon for payment flexibility
    },
    {
      title: "No Collateral Required",
      description: "Get a loan without the need for collateral or security.",
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
              Boost Your Business with a Working Capital Loan.
            </h1>
            <p className="text-lg mb-6">
              Need funds to manage day-to-day operations or expand your
              business? Our Working Capital Loans offer competitive rates and
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
              src={workingCapitalImage}
              alt="Business meeting with charts"
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
            About Our Working Capital Loans
          </h2>
          <p className="text-lg">
            Whether you're managing inventory, paying suppliers, or expanding
            your business, our Working Capital Loans provide the funds you need
            to keep your operations running smoothly.
          </p>
          <p className="text-lg mt-4">
            We offer competitive interest rates, flexible repayment options, and
            a hassle-free application process to help you manage your working
            capital effectively.
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
              <li>Age: 25 to 65 years</li>
              <li>Registered business entity</li>
              <li>Stable business income</li>
              <li>Minimum CIBIL score of 680</li>
              <li>Business operational for at least 2 years</li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Documents Required
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Business registration certificate</li>
              <li>Identity & Address Proof of business owner</li>
              <li>Income Proof (Bank statements/IT returns)</li>
              <li>Business financial statements (last 2 years)</li>
              <li>Collateral details (if applicable)</li>
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
            Our working capital loan interest rates start from a competitive 10%
            per annum. The actual rate offered may vary based on your
            eligibility and the loan amount.
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

      {/* Balance Transfer */}
      <BalanceTransferSection data={workingCapitalLoanData} />

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

export default WorkingCapitalLoanPage;
