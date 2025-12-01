import React from "react";
import Navbar from "../components/navbar/Navbar";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import FAQsSection from "../components/home/FAQsSection";
import Footer from "../components/home/Footer";
import happyFamily from "../assets/images/personal-loan-page/personal-loan.png";
import FeaturesSection from "../components/FeaturesSection";
import { ArrowRightIcon } from "lucide-react";
import BalanceTransferSection from "../components/BalanceTransferSection";

const PersonalLoanPage = () => {

  const personalLoanData = {
  title: "Achieve Your Goals with Our Personal Loan",
  description:
    "Whether it's a vacation, wedding, or unexpected expenses, our Personal Loan offers quick approval, attractive interest rates, and flexible repayment options to help you meet your financial needs.",
  benefits: [
    {
      title: "High Loan Amount",
      description:
        "Get loan amounts up to ₹25 Lakh based on your eligibility, covering personal expenses, debt consolidation, or emergencies.",
      iconName: "HomeIcon",
    },
    {
      title: "Competitive Interest Rates",
      description:
        "Enjoy interest rates starting at 10.75% per annum, making your EMIs affordable and easy to manage.",
      iconName: "CurrencyRupeeIcon",
    },
    {
      title: "Flexible Tenure",
      description:
        "Choose repayment tenures up to 5 years, ensuring a repayment schedule that fits your financial plan.",
      iconName: "ClockIcon",
    },
    {
      title: "Quick Processing & Disbursal",
      description:
        "Our fast approval process ensures quick disbursal, providing funds when you need them the most.",
      iconName: "CheckBadgeIcon",
    },
    {
      title: "No Collateral Required",
      description:
        "Enjoy unsecured personal loans with no collateral requirement, making the process hassle-free.",
      iconName: "ShieldCheckIcon",
    },
  ],
};

  const features = [
    {
      title: "High Loan Amount",
      description: "Loan amounts up to ₹10 Lakh based on eligibility",
      iconName: "BanknotesIcon", // Heroicon representing finance/money
    },
    {
      title: "Affordable Interest Rates",
      description: "Interest rates starting from 10.5% p.a.",
      iconName: "CurrencyDollarIcon", // Heroicon representing money/finance
    },
    {
      title: "Flexible Tenure",
      description: "Tenure options up to 5 years for easy repayment",
      iconName: "ClockIcon", // Heroicon representing time/tenure
    },
    {
      title: "Quick Digital Processing",
      description:
        "Instant loan approval and processing through digital platforms",
      iconName: "DevicePhoneIcon", // Heroicon representing digital or technology
    },
    {
      title: "Minimal Documentation",
      description: "Simple paperwork to get your loan processed faster",
      iconName: "DocumentTextIcon", // Heroicon representing documentation
    },
    {
      title: "Flexible Repayment Options",
      description:
        "Choose repayment plans that fit your budget and preferences",
      iconName: "CreditCardIcon", // Heroicon representing credit or payment
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
              Empower Your Goals with a Personal Loan.
            </h1>
            <p className="text-lg mb-6">
              Need funds for a special occasion, education, or an emergency? Our
              Personal Loans offer quick approval and flexible terms.
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
              src={happyFamily}
              alt="Happy family enjoying their home"
              className="rounded-lg shadow-lg"
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
            About Our Personal Loans
          </h2>
          <p className="text-lg">
            Whether you're planning a wedding, funding your education, or
            handling an unexpected expense, our Personal Loans provide the
            flexibility and speed you need.
          </p>
          <p className="text-lg mt-4">
            We are committed to making the loan process as smooth and
            transparent as possible. Our team is here to assist you every step
            of the way.
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
            Our personal loan interest rates start from a competitive 10.5% per
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

      {/* Balance Transfer  */}
      <BalanceTransferSection data={personalLoanData}/>
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

export default PersonalLoanPage;
