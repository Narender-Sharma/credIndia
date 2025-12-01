import React from "react";
import LoanCalculatorSection from "../components/home/LoanCalculatorSection";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";

function CalculatorPage() {
  return (
    <div>
      <Navbar />
      <div className="py-10">
        <LoanCalculatorSection />
      </div>
      <Footer />
    </div>
  );
}

export default CalculatorPage;
