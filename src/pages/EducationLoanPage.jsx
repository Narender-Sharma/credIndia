import React from "react";
import Navbar from "../components/navbar/Navbar";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import FAQsSection from "../components/home/FAQsSection";
import Footer from "../components/home/Footer";
import educationImage from "../assets/images/education-loan-page/education-loan.png";
import FeaturesSection from "../components/FeaturesSection";
import { ArrowRightIcon } from "lucide-react";
import BalanceTransfer from "../components/BalanceTransferSection"


const EducationLoanPage = () => {

  const educationLoanData = {
  title: "Invest in Your Future with Our Education Loan",
  description:
    "Pursue higher education without financial stress. Our Education Loan offers competitive rates, flexible repayment options, and quick processing to support your academic journey.",
  benefits: [
    {
      title: "High Loan Amount",
      description:
        "Avail loans up to ₹50 Lakh based on course and institution, covering tuition fees, accommodation, and other expenses.",
      iconName: "HomeIcon",
    },
    {
      title: "Affordable Interest Rates",
      description:
        "Interest rates starting at 9.5% per annum, ensuring easy and manageable EMIs.",
      iconName: "CurrencyRupeeIcon",
    },
    {
      title: "Flexible Repayment Options",
      description:
        "Choose repayment tenures up to 15 years, with options for moratorium during the study period.",
      iconName: "ClockIcon",
    },
    {
      title: "Tax Benefits",
      description:
        "Enjoy tax deductions on interest payments under Section 80E of the Income Tax Act.",
      iconName: "AcademicCapIcon",
    },
    {
      title: "Quick Processing",
      description:
        "Get fast loan approval and disbursal to ensure timely fee payments without delays.",
      iconName: "CheckBadgeIcon",
    },
  ],
};

const features = [
  {
    title: "High Loan Amount",
    description: "Loan amounts up to ₹20 Lakh based on eligibility",
    iconName: "BanknotesIcon",  // Heroicon for finance/money
  },
  {
    title: "Affordable Interest Rates",
    description: "Interest rates starting from 9.5% p.a.",
    iconName: "CurrencyDollarIcon",  // Heroicon for finance/currency
  },
  {
    title: "Flexible Tenure",
    description: "Tenure options up to 10 years for easy repayment",
    iconName: "ClockIcon",  // Heroicon for time/tenure
  },
  {
    title: "Quick Digital Processing",
    description: "Instant loan approval and processing through digital platforms",
    iconName: "DevicePhoneIcon",  // Heroicon for technology/digital
  },
  {
    title: "Minimal Documentation",
    description: "Simple paperwork to get your loan processed faster",
    iconName: "DocumentTextIcon",  // Heroicon for documentation
  },
  {
    title: "Flexible Repayment Options",
    description: "Choose repayment plans that fit your budget and preferences",
    iconName: "CreditCardIcon",  // Heroicon for credit/payment
  },
  {
    title: "Moratorium Period Available",
    description: "Enjoy a moratorium period before starting repayments",
    iconName: "PauseIcon",  // Heroicon for pause (moratorium)
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
              Invest in Your Future with an Education Loan.
            </h1>
            <p className="text-lg mb-6">
              Planning to pursue higher education? Our Education Loans provide the financial support you need to achieve your academic goals.
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
              src={educationImage}
              alt="Student studying with books"
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
            About Our Education Loans
          </h2>
          <p className="text-lg">
            Whether you're planning to study abroad or pursue higher education within the country, our Education Loans are designed to support your academic journey.
          </p>
          <p className="text-lg mt-4">
            We offer competitive interest rates, flexible repayment options, and a moratorium period to help you manage your finances effectively.
          </p>
        </div>
      </section>

      {/* Features */}
      <div className="max-w-6xl m-auto">
        <FeaturesSection features={features} />
      </div>

      {/* Balance Transfer */}
      <BalanceTransfer data={educationLoanData } />

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
              <li>Age: 18 to 35 years</li>
              <li>Admission to a recognized educational institution</li>
              <li>Stable income source or co-applicant with stable income</li>
              <li>Minimum CIBIL score of 650</li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Documents Required
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Identity & Address Proof</li>
              <li>Admission letter from the educational institution</li>
              <li>Income Proof (Salary slips/IT returns)</li>
              <li>Bank statements (last 6 months)</li>
              <li>Co-applicant details (if applicable)</li>
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
            Our education loan interest rates start from a competitive 9.5% per annum. The actual rate offered may vary based on your eligibility and the loan amount.
          </p>
          <p className="text-lg text-slate-700 mb-4">
            In addition to the interest rate, please be aware of the following potential fees:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Processing Fees</li>
            <li>Legal Fees</li>
            <li>Prepayment Charges (if applicable)</li>
          </ul>
          <p className="text-sm text-slate-500 mt-4">
            For a detailed breakdown of the applicable fees and charges, please refer to our loan agreement or contact our customer support.
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

export default EducationLoanPage;