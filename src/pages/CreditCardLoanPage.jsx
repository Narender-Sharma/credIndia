import React from "react";
import Navbar from "../components/navbar/Navbar";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import FAQsSection from "../components/home/FAQsSection";
import Footer from "../components/home/Footer";
import creditCardImage from "../assets/images/credit-card-loan-page/credit-card-loan.png";
import FeaturesSection from "../components/FeaturesSection";
import { ArrowRightIcon } from "lucide-react";
import BalanceTransferSection from "../components/BalanceTransferSection";

const CreditCardLoanPage = () => {
  const creditCardLoanData = {
    title: "Get Instant Funds with Our Credit Card Loan",
    description:
      "Leverage your credit card limit to access instant funds with our Credit Card Loan, offering quick disbursal, attractive interest rates, and flexible repayment options.",
    benefits: [
      {
        title: "Instant Loan Amount",
        description:
          "Convert your available credit limit into a loan of up to ₹5 Lakh, ensuring quick access to funds.",
        iconName: "HomeIcon",
      },
      {
        title: "Attractive Interest Rates",
        description:
          "Interest rates starting at 1.5% per month, keeping your monthly payments manageable.",
        iconName: "CurrencyRupeeIcon",
      },
      {
        title: "Flexible Tenure",
        description:
          "Choose repayment tenures up to 36 months, making it easier to repay in installments.",
        iconName: "ClockIcon",
      },
      {
        title: "Quick Disbursal",
        description:
          "Funds are credited instantly to your account, ensuring immediate financial support.",
        iconName: "CheckBadgeIcon",
      },
      {
        title: "No Documentation Required",
        description:
          "Enjoy hassle-free processing with minimal paperwork and no additional verification.",
        iconName: "ShieldCheckIcon",
      },
    ],
  };

  const features = [
    {
      title: "Instant Cash Withdrawal",
      description: "Access funds instantly with quick cash withdrawal options.",
      iconName: "CreditCardIcon", // Heroicon for quick access to funds
    },
    {
      title: "Affordable Interest Rates",
      description:
        "Interest rates starting from 12% p.a., designed to be budget-friendly.",
      iconName: "CurrencyDollarIcon", // Heroicon for currency/finance
    },
    {
      title: "Flexible Tenure",
      description:
        "Repayment tenure options up to 3 years, to suit your financial needs.",
      iconName: "ClockIcon", // Heroicon for time and tenure
    },
    {
      title: "Quick Digital Processing",
      description:
        "Seamless and instant loan approval with fully digital processing.",
      iconName: "DevicePhoneIcon", // Heroicon for technology/phones
    },
    {
      title: "Minimal Documentation",
      description: "Simple paperwork for faster loan processing and approval.",
      iconName: "DocumentTextIcon", // Heroicon for documentation
    },
    {
      title: "Flexible Repayment Options",
      description: "Choose a repayment plan that fits your monthly budget.",
      iconName: "CreditCardIcon", // Heroicon for payments and flexibility
    },
    {
      title: "No Collateral Required",
      description: "Get a loan without needing to pledge any collateral.",
      iconName: "LockClosedIcon", // Heroicon for security/lock (No collateral)
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
              Get Instant Cash with a Credit Card Loan.
            </h1>
            <p className="text-lg mb-6">
              Need immediate funds? Our Credit Card Loans offer quick access to
              cash with competitive rates and flexible terms.
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
              src={creditCardImage}
              alt="Credit card with cash"
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
            About Our Credit Card Loans
          </h2>
          <p className="text-lg">
            Whether you need funds for an emergency, a large purchase, or to
            consolidate debt, our Credit Card Loans provide a convenient and
            quick solution.
          </p>
          <p className="text-lg mt-4">
            We offer competitive interest rates, flexible repayment options, and
            a hassle-free application process to help you get the cash you need.
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
              <li>Existing credit card holder</li>
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
              <li>Credit card statement (latest)</li>
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
            Our credit card loan interest rates start from a competitive 12% per
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

      {/* Balance Transfer */}
      <BalanceTransferSection data={creditCardLoanData} />

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

export default CreditCardLoanPage;
