import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeLoanPage from "./pages/HomeLoanPage";
import PersonalLoanPage from "./pages/PersonalLoanPage";
import BusinessLoanPage from "./pages/BusinessLoanPage";
import EducationLoanPage from "./pages/EducationLoanPage";
import LoanAgainstPropertyPage from "./pages/LoanAgainstPropertyPage";
import ConstructionLoanPage from "./pages/ConstructionLoanPage";
import AgriculturalLoanPage from "./pages/AgriculturalLoanPage";
import CreditCardLoanPage from "./pages/CreditCardLoanPage";
import WorkingCapitalLoanPage from "./pages/WorkingCapitalLoanPage";
import StartupLoanPage from "./pages/StartupLoanPage";
import VehicleLoanPage from "./pages/VehicleLoanPage";
import CalculatorPage from "./pages/CalculatorPage";
import LoanApplyPage from "./pages/LoanApplyPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* hello world */}
        {/* sdgdfgsdgdsfg */}
        <Route path="/" element={<Home />} />
        <Route path="/home-loan" element={<HomeLoanPage />} />
        <Route path="/personal-loan" element={<PersonalLoanPage />} />
        <Route path="/business-loan" element={<BusinessLoanPage />} />
        <Route path="/education-loan" element={<EducationLoanPage />} />
        <Route
          path="/loan-against-property"
          element={<LoanAgainstPropertyPage />}
        />
        <Route path="/construction-loan" element={<ConstructionLoanPage />} />
        <Route path="/agricultural-loan" element={<AgriculturalLoanPage />} />
        <Route path="/credit-card-loan" element={<CreditCardLoanPage />} />
        <Route
          path="/working-capital-loan"
          element={<WorkingCapitalLoanPage />}
        />
        <Route path="/startup-loan" element={<StartupLoanPage />} />
        <Route path="/vehicle-loan" element={<VehicleLoanPage />} />
        <Route path="/loan-emi-calculator" element={<CalculatorPage />} />
        <Route path="/loan-apply" element={<LoanApplyPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
