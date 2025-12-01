import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/home/HeroSection";
import LoanServicesSection from "../components/home/LoanServicesSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import LoanCalculatorSection from "../components/home/LoanCalculatorSection";
import CustomerTestimonialsSection from "../components/home/CustomerTestimonialsSection";
import FAQsSection from "../components/home/FAQsSection";
import CallToActionSection from "../components/home/CallToActionSection";
import Footer from "../components/home/Footer";
import EnquiryForm from "../components/EnquiryForm";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LoanServicesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <LoanCalculatorSection />
      <CustomerTestimonialsSection />
      <EnquiryForm
        isOpenByDefault={true}
        buttonPosition={{ bottom: "4rem", right: "2rem" }}
      />
      <FAQsSection />
      {/* <CallToActionSection/> */}
      <Footer />
    </div>
  );
}

export default Home;
