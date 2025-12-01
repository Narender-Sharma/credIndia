import React from "react";
import Marquee from "react-fast-marquee";
import defaultImg from "../../assets/images/home/hero-section.jpg";

const CustomerReviewsMarquee = () => {
  // Static customer reviews data with added image and rating fields
  const reviews = [
    {
      text: "Excellent service! Highly recommend!",
      name: "Chandan Keshri",
      company: "Peak Force",
      image: "path/to/john-doe-image.jpg", // Image field
      rating: 5, // Rating field
    },
    {
      text: "A game-changer for our business. Great experience.",
      name: "Chandan Keshri",
      company: "Peak Force",
      image: "path/to/jane-smith-image.jpg", // Image field
      rating: 4, // Rating field
    },
    {
      text: "Fantastic support and seamless experience.",
      name: "Chandan Keshri",
      company: "Peak Force",
      image: "path/to/samuel-lee-image.jpg", // Image field
      rating: 5, // Rating field
    },
    {
      text: "Very satisfied with their services. Professional and reliable.",
      name: "Chandan Keshri",
      company: "Peak Force",
      image: "path/to/emily-zhang-image.jpg", // Image field
      rating: 4, // Rating field
    },
    {
      text: "The best in the industry. Will continue to work with them.",
      name: "Chandan Keshri",
      company: "Peak Force",
      image: "path/to/david-brown-image.jpg", // Image field
      rating: 5, // Rating field
    },
    // Add more reviews as needed
  ];

  // Function to render the rating stars with improved shape
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.4 7.6h8.4l-6.6 4.8 2.4 7.6-6.6-4.8-6.6 4.8 2.4-7.6-6.6-4.8h8.4L12 2z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="flex justify-center font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 py-10">
          What Our Customers Are Saying
        </h2>
        <Marquee
          speed={50}
          pauseOnHover
          gradient={false}
          className="overflow-hidden"
        >
          {reviews.map((review, index) => (
            <div key={index} className="inline-flex items-center mx-4 md:mx-8">
              <div className="bg-white p-6 rounded-xl shadow-lg w-72 md:w-96">
                {/* Rating */}
                <div className="flex mb-2">{renderStars(review.rating)}</div>

                {/* Customer Image with error handling */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                  onError={(e) => (e.target.src = defaultImg)} // Fallback to default image on error
                />

                {/* Customer Review Text */}
                <p className="text-sm italic text-gray-600">"{review.text}"</p>
                <div className="mt-2 text-right text-sm font-semibold text-gray-800">
                  {/* Customer Name and Company */}
                  <p>{review.name}</p>
                  <p className="text-xs text-gray-500">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default CustomerReviewsMarquee;
