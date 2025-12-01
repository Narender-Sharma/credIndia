import React from "react";
import {
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const FAQsSection = () => {
  const faqs = [
    {
      question: "What types of loans do you offer?",
      answer:
        "We offer a variety of loans, including personal loans, home loans, auto loans, and business loans.",
    },
    {
      question: "How do I apply for a loan?",
      answer:
        "You can apply for a loan online through our website. Simply fill out the application form, upload the required documents, and submit your application.",
    },
    {
      question: "What are the interest rates?",
      answer:
        "Our interest rates vary depending on the type of loan and your credit profile. We offer competitive rates, and you can get a personalized rate quote during the application process.",
    },
    {
      question: "How long does it take to get approved?",
      answer:
        "Our streamlined process ensures quick decisions. You can expect a decision within 24 hours of submitting your application and all required documents.",
    },
    {
      question: "What documents do I need to apply?",
      answer:
        "The required documents may vary depending on the type of loan. Generally, you will need proof of income, proof of identity, and proof of residence. For more details, please refer to our application guidelines.",
    },
    {
      question: "Is my information secure?",
      answer:
        "Yes, your information is secure. We use advanced encryption and security measures to protect your personal and financial information.",
    },
  ];

  return (
    <section className="relative bg-cover bg-center text-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-900 max-w-3xl mx-auto">
            Find answers to some of the most common questions.
          </p>
        </div>

        {/* FAQs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {faqs.map((faq, index) => {
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:border-blue-500 transition-all
  [clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)]"
              >
                <div className="flex items-center mb-4">
                  <QuestionMarkCircleIcon className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-900">{faq.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
