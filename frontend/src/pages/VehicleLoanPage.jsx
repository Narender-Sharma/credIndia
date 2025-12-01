import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import FeaturesSection from "../components/FeaturesSection";
import vehicleLoan from "../assets/images/vehicle-loan-page/vehicle-loan.png";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import FAQsSection from "../components/home/FAQsSection";
import { ArrowRightIcon } from "lucide-react";
import BalanceTransferSection from "../components/BalanceTransferSection";

const VehicleLoanPage = () => {
  const vehicleLoanData = {
    title: "Drive Your Dream Car with Our Vehicle Loan",
    description:
      "Whether it's a car or a bike, our Vehicle Loan provides attractive interest rates, flexible tenures, and quick processing to help you hit the road faster.",
    benefits: [
      {
        title: "High Loan Amount",
        description:
          "Get loan amounts up to ₹30 Lakh, covering up to 90% of the vehicle's on-road price.",
        iconName: "HomeIcon",
      },
      {
        title: "Competitive Interest Rates",
        description:
          "Enjoy interest rates starting at 7.75% per annum, making your EMIs affordable.",
        iconName: "CurrencyRupeeIcon",
      },
      {
        title: "Flexible Repayment Tenure",
        description:
          "Choose repayment tenures up to 7 years, with EMI plans tailored to your budget.",
        iconName: "ClockIcon",
      },
      {
        title: "Quick Approval & Disbursal",
        description:
          "Fast processing ensures that you can drive away your dream vehicle without delay.",
        iconName: "CheckBadgeIcon",
      },
      {
        title: "No Collateral Required",
        description:
          "Enjoy hassle-free, secured loans with the vehicle itself as collateral.",
        iconName: "ShieldCheckIcon",
      },
    ],
  };

  const features = [
    {
      title: "High Loan Amount",
      description: "Loan amounts up to ₹20 Lakh based on eligibility",
      iconName: "BanknotesIcon",
    },
    {
      title: "Affordable Interest Rates",
      description: "Interest rates starting at 9.5% per annum",
      iconName: "CurrencyRupeeIcon",
    },
    {
      title: "Flexible Tenure",
      description: "Repayment tenure options up to 7 years",
      iconName: "ClockIcon",
    },
    {
      title: "Balance Transfer",
      description: "Transfer your existing loan at better rates",
      iconName: "ArrowPathIcon",
    },
    {
      title: "Fast Approval & Collection",
      description: "Quick approval and doorstep document collection",
      iconName: "CheckBadgeIcon",
    },
    {
      title: "Low Processing Fees",
      description: "Minimal charges for application processing",
      iconName: "DocumentTextIcon",
    },
    {
      title: "Tax Benefits",
      description: "Save tax under Section 80C",
      iconName: "AcademicCapIcon",
    },
    {
      title: "Wide Eligibility",
      description: "Available for both salaried and self-employed individuals",
      iconName: "UserGroupIcon",
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
              Drive Your Dreams with Our Vehicle Loan
            </h1>
            <p className="text-lg mb-6">
              Looking to buy your dream vehicle? We offer competitive loans with
              flexible terms and a quick approval process.
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
              src={vehicleLoan}
              alt="Happy family with a new car"
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
            About Our Vehicle Loans
          </h2>
          <p className="text-lg">
            Whether you're buying a new car, a used car, or any other vehicle,
            our Vehicle Loans offer unmatched flexibility, low interest rates,
            and a seamless approval process.
          </p>
          <p className="text-lg mt-4">
            We understand that buying a vehicle is a significant decision.
            That's why we are committed to providing you with a hassle-free and
            transparent loan process. Our expert team is here to guide you every
            step of the way, from application to disbursement.
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
              <li>Vehicle-related documents</li>
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
            Our vehicle loan interest rates start from a competitive 9.5% per
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

      {/* Balance Transfer Section */}
      <BalanceTransferSection data={vehicleLoanData} />

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

export default VehicleLoanPage;
