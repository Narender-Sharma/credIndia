import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Clean up any remaining timeout when component unmounts
    return () => {
      if (message?.timeoutId) {
        clearTimeout(message.timeoutId);
      }
    };
  }, [message]);

  const handleSubmit = () => {
    setIsSubmitting(true);

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim() || "Not provided";
    const messageText = messageInput.value.trim() || "No message";

    if (!name || !phone) {
      setMessage({
        type: "error",
        text: "Please fill in all required fields (Name and Phone).",
      });
      setIsSubmitting(false);
      return;
    }

    const whatsappMessage = `🔹 *New Enquiry Received* 🔹\n\n📌 *Name:* ${name}\n📞 *Phone:* ${phone}\n✉ *Email:* ${email}\n📝 *Message:* ${messageText}`;
    const whatsappNumber = "917982151029";

    // Create both URLs
    const directWhatsappURL = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(
      whatsappMessage
    )}`;
    const webWhatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Try to open WhatsApp app directly
    const anchor = document.createElement("a");
    anchor.href = directWhatsappURL;
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Fallback to web WhatsApp if app not detected
    const fallbackTimer = setTimeout(() => {
      if (!document.hidden) {
        window.location.href = webWhatsappURL;
      }
    }, 500);

    // Clean up timer if app opens successfully
    window.addEventListener("blur", () => {
      clearTimeout(fallbackTimer);
    });

    // Clear form fields
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    // Set success message that will disappear after 10 seconds
    const timeoutId = setTimeout(() => {
      setMessage(null);
    }, 10000);

    setMessage({
      type: "success",
      text: "Thank you for contacting us! We will get back to you within 24 hours.",
      timeoutId,
    });

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-sm mx-auto">
      <h3 className="text-md font-semibold border-b-2 border-black inline-block">
        CONTACT WITH US
      </h3>
      {message && (
        <div
          className={`mt-4 p-4 rounded-md ${
            message.type === "error"
              ? "bg-red-100 text-red-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {message.text}
        </div>
      )}
      <form
        className="mt-2 space-y-2 text-xs"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          id="name"
          placeholder="Name*"
          className="w-full p-2 bg-white border border-black rounded text-black"
          required
        />
        <input
          type="tel"
          id="phone"
          placeholder="Your phone number*"
          className="w-full p-2 bg-white border border-black rounded text-black"
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Your email address"
          className="w-full p-2 bg-white border border-black rounded text-black"
        />
        <textarea
          id="message"
          placeholder="Write Message"
          className="w-full p-2 bg-white border border-black rounded text-black h-16"
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-900 hover:bg-blue-800 text-[#fafafa] py-3 px-4 rounded-xl font-semibold text-lg shadow-md transition-colors cursor-pointer ${
            isSubmitting ? "opacity-70" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send via WhatsApp"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
