"use client";
import React from "react";
import Image from "next/image";

// Dummy review data
const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    photo: "/assets/user1.jpg",
    rating: 5,
    text: "Amazing dresses! The quality is excellent and the fit is perfect. Highly recommend IconFashion.",
  },
  {
    id: 2,
    name: "David Smith",
    photo: "/assets/user2.jpg",
    rating: 4,
    text: "Great customer service and stylish outfits. I will definitely shop here again!",
  },
  {
    id: 3,
    name: "Emma Williams",
    photo: "/assets/user3.jpg",
    rating: 5,
    text: "The collection is stunning. Loved my new evening gown, perfect for the event!",
  },
];

const Review = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
          What Our Customers Say
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* User Photo */}
              <div className="w-16 h-16 mb-4 mx-auto md:mx-0 relative rounded-full overflow-hidden">
                <Image
                  src={review.photo}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* User Name */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center md:text-left">
                {review.name}
              </h3>

              {/* Rating */}
              <div className="flex justify-center md:justify-start mb-2">
                {Array(review.rating)
                  .fill(0)
                  .map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                {Array(5 - review.rating)
                  .fill(0)
                  .map((_, idx) => (
                    <span key={idx} className="text-gray-300 dark:text-gray-600 text-xl">
                      ★
                    </span>
                  ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-300 text-center md:text-left">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;