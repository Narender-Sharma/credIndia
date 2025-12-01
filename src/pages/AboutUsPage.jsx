import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import teamMeeting from "../assets/images/about-us-page/our-team.png";
// import founder from "../assets/images/about-us/founder.jpg";
// import valuesIllustration from "../assets/images/about-us-page/values.svg";
import {
  AcademicCapIcon,
  BeakerIcon,
  ChartBarIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const AboutUsPage = () => {
  const values = [
    {
      icon: <AcademicCapIcon className="h-12 w-12 text-indigo-500 mx-auto" />,
      title: "Innovation",
      description:
        "We continuously seek new and better ways to serve our clients.",
    },
    {
      icon: <BeakerIcon className="h-12 w-12 text-indigo-500 mx-auto" />,
      title: "Integrity",
      description: "Honesty and transparency guide all our interactions.",
    },
    {
      icon: <ChartBarIcon className="h-12 w-12 text-indigo-500 mx-auto" />,
      title: "Growth",
      description: "We strive to empower our clients to reach new heights.",
    },
    {
      icon: <HeartIcon className="h-12 w-12 text-indigo-500 mx-auto" />,
      title: "Passion",
      description: "We’re passionate about delivering exceptional results.",
    },
  ];

  return (
    <main className="text-slate-900">
      {/* Navigation bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center  overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Transforming the lending experience through technology,
            transparency, and trust.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              Founded in 2025, we’re a digital-first financial services company
              based in Gurgaon and Delhi NCR. We are committed to making
              borrowing simple, fast, and fair for all.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              We specialize in a wide range of loan products, including Home
              Loans, Personal Loans, Business Loans, Education Loans, Vehicle
              Loans, and more. What began as a small, ambitious team has quickly
              grown to serve customers across the Delhi NCR region.
            </p>
            <p className="text-lg text-slate-700">
              Unlike traditional banks, we've built our systems to be
              digital-native, enabling us to offer faster approvals, better
              rates, and a completely paperless experience. We pride ourselves
              on simplifying the borrowing process for our customers with
              low-interest rates and quick approvals.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={teamMeeting}
              alt="Our team in a strategy meeting"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:order-2">
            <h2 className="font-montserrat text-3xl sm:text-4xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              Our Mission
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              To empower individuals and small businesses with accessible,
              affordable credit through a completely transparent and hassle-free
              process.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              We believe everyone deserves fair access to financial tools that
              can help them achieve their goals, whether that's buying a home,
              growing a business, or handling unexpected expenses.
            </p>
          </div>
          <div className="order-2 md:order-1">
            <div className="bg-blue-100 p-8 rounded-lg h-full flex items-center justify-center relative">
              <blockquote className="text-center relative">
                <svg
                  className="absolute top-0 left-0 w-8 h-8 text-blue-400 opacity-30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17h3v-7H6V7h4v3h3v7H7zm7 0h3v-7h-4V7h4v3h3v7h-6z" />
                </svg>
                <p className="text-2xl font-medium text-slate-800 mb-4">
                  "Financial services should work for people, not the other way
                  around."
                </p>
                <footer className="text-lg text-slate-600">
                  — Aakash Tiwari, Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
            Our Values
          </h2>
          <p className="text-lg text-slate-700 mb-12 text-center max-w-3xl mx-auto">
            These principles guide every decision we make as a company
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:border-blue-500 transition-all 
  [clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)]"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
};

export default AboutUsPage;
