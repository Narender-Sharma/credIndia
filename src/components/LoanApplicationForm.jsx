import React, { useRef, useState } from "react";
import { CheckCircle } from "lucide-react"; // Lucide icon for check

const loanTypes = [
  "Home Loan",
  "Personal Loan",
  "Business Loan",
  "Education Loan",
  "Vehicle Loan",
  "Loan Against Property",
  "Construction Loan",
  "Agricultural Loan",
  "Credit Card Loan",
  "Working Capital Loan",
  "Startup Loan",
];

const LoanApplicationForm = ({ id }) => {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   const firstName = formData.get("firstName");
  //   const lastName = formData.get("lastName");
  //   const email = formData.get("email");
  //   const phone = formData.get("phone");
  //   const loanType = formData.get("loanType");
  //   const amount = formData.get("amount");
  //   const employment = formData.get("employment");

  //   const message = `Loan Application:
  //   First Name: ${firstName}
  //   Last Name: ${lastName}
  //   Email: ${email}
  //   Phone: ${phone}
  //   Loan Type: ${loanType}
  //   Amount: ${amount}
  //   Employment Type: ${employment}`;

  //   const whatsappNumber = "917982151029";
  //   const whatsappURL = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(
  //     message
  //   )}`;
  //   window.location.href = whatsappURL;

  //   formRef.current.reset(); // Clear the form
  //   setSuccess(true); // Show success message

  //   // Hide success message after 5 seconds
  //   setTimeout(() => setSuccess(false), 10000);
  // };



  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   const data = {
  //     first_name: formData.get("firstName"),
  //     last_name: formData.get("lastName"),
  //     email: formData.get("email"),
  //     phone_number: formData.get("phone"),
  //     loan_type: formData.get("loanType"), // Only if you're storing this
  //     amount_requested: parseFloat(formData.get("amount")),
  //     employment_type: formData.get("employment") // Only if you're storing this
  //   };

  //   try {
  //     const response = await fetch("http://localhost:8000/api/loanApp/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data)
  //     });

  //     if (response.ok) {
  //       formRef.current.reset(); // Clear the form
  //       setSuccess(true); // Show success message
  //       setTimeout(() => setSuccess(false), 10000);
  //     } else {
  //       console.error("Failed to submit application:", await response.text());
  //     }
  //   } catch (error) {
  //     console.error("Error submitting application:", error);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      first_name: formData.get("firstName"),
      last_name: formData.get("lastName"),
      email: formData.get("email"),
      phone_number: formData.get("phone"),
      loan_type: formData.get("loanType"),
      amount: parseFloat(formData.get("amount")),
      employment_status: formData.get("employment")
    };
    try {
      const response = await fetch("http://localhost:8000/api/loanApp/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        formRef.current.reset(); // Clear the form
        setSuccess(true); // Show success message
        setTimeout(() => setSuccess(false), 10000); // Hide success message after 10 seconds
      } else {
        console.error("Failed to submit application:", await response.text());
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };


  return (
    <section id={id} className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto shadow-lg rounded-2xl bg-white p-8 sm:p-12">
        <h2 className="text-center font-montserrat text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
          Loan Application Form
        </h2>

        {/* Success Message */}
        {success && (
          <div className="flex items-center justify-center gap-3 mb-8 bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-xl shadow-sm">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-md font-semibold">
              Successfully Submitted
            </span>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="loanType"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Loan Type
              </label>
              <select
                id="loanType"
                name="loanType"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              >
                <option value="">-- Select loan type --</option>
                {loanTypes.map((loan, index) => (
                  <option key={index} value={loan}>
                    {loan}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Loan Amount (₹)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="Enter desired loan amount"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Employment Type
            </label>
            <div className="flex space-x-8">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="employment"
                  value="Salaried"
                  className="text-blue-600 focus:ring-blue-500"
                  required
                />
                <span className="ml-2 text-sm text-gray-700">Salaried</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="employment"
                  value="Self-Employed"
                  required
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Self-Employed
                </span>
              </label>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-[#fafafa] py-3 px-4 rounded-xl font-semibold text-lg shadow-md transition-colors cursor-pointer"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoanApplicationForm;
