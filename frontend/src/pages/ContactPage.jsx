import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import FAQsSection from "../components/home/FAQsSection";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <main className="text-slate-900">
      {/* Navigation bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            We're Here to Help
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Have questions about our loans or services? Reach out to our
            friendly team.
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-500 text-white grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
              <EnvelopeIcon className="h-8 w-8 mb-2 text-white" />
              <h3 className="font-bold text-lg mb-1">Email</h3>
              <p className="text-sm">bankloans.crediindia@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <PhoneIcon className="h-8 w-8 mb-2 text-white" />
              <h3 className="font-bold text-lg mb-1">Phone Number</h3>
              <p className="text-sm">+91-8377003037</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="h-8 w-8 mb-2 text-white" />
              <h3 className="font-bold text-lg mb-1">Office Address</h3>
              <p className="text-sm">
                Office Adress : 218 ,2nd floor , Vipul trade centre ,Sector 48 , Sohna road ,Gurugram ,Haryana Pin -122102
              </p>
            </div>
          </div>

          {/* Updated Grid Layout with wider map */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 mt-15">
              <div className="w-full">
                <ContactForm />
              </div>

              <div className="w-full">
                <div className="h-full w-full max-w-full rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-[400px] lg:h-full"
                    style={{ width: "100%" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.505738595512!2d77.04183221508047!3d28.40684128250843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2299943b9043%3A0x2f521df48a7e3413!2sVipul%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1649763043456!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="max-w-6xl m-auto">
        <FAQsSection />
      </div>

      {/* Footer Section */}
      <Footer />
    </main>
  );
};

export default ContactPage;
