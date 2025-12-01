import React from "react";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTimes,
} from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function App() {
  return (
    <footer className="bg-light text-center text-white py-6">
      <section
        className="relative bg-cover bg-center text-slate-900 pb-10 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-slate-900 max-w-3xl mx-auto">
              Don't miss out on the opportunity to achieve your financial goals.
              Contact us today to get started.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 justify-center">
            <a
              href="tel:+918377003037"
              className="bg-blue-900 text-white font-medium px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-blue-800 transition-all"
            >
              <PhoneIcon className="w-6 h-6" />
              <span>Call Us</span>
            </a>
            <a
              href="mailto:loans@crediindia.com"
              className="bg-blue-900 text-white font-medium px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-blue-800 transition-all"
            >
              <EnvelopeIcon className="w-6 h-6" />
              <span>Email Us</span>
            </a>
            <a
              href="/loan-apply"
              target="_blank"
              className="bg-blue-900 text-white font-medium px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-blue-800 transition-all"
            >
              <ArrowRightIcon className="w-6 h-6" />
              <span>Apply Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <div className="container mx-auto px-4">
        <section className="flex justify-center gap-4 mb-4">
          {/* Facebook Button */}
          <a
            href="https://www.facebook.com/share/1CajLpkSbJ/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
            style={{
              backgroundColor: "#3b5998",
              background: "linear-gradient(145deg, #3b5998, #2d4373)",
            }}
          >
            <FaFacebookF className="text-white w-5 h-5 " />
            <span className="sr-only">Facebook</span>
          </a>

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/peakforcerealty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
            style={{
              background:
                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
            }}
          >
            <FaInstagram className="text-white w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </a>

          {/* X Button */}
          <a
            href="https://twitter.com/peakforcerealty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
            style={{
              backgroundColor: "#000000",
              background: "linear-gradient(145deg, #000000, #333333)",
            }}
          >
            <SiX className="text-white w-5 h-5" />
            <span className="sr-only">X (Twitter)</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/company/peak-force-realty/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
            style={{
              backgroundColor: "#0077b5",
              background: "linear-gradient(145deg, #0077b5, #005582)",
            }}
          >
            <FaLinkedinIn className="text-white w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </section>
      </div>

      <div
        className="text-center p-4 text-slate-900"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p>
          © 2025 Copyright:{" "}
          <a
            className="text-slate-900"
            href="https://www.crediindia.com/"
          >
            www.crediindia.com
          </a>
        </p>
      </div>
    </footer>
  );
}
