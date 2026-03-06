"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Verified Buyer",
    photo: "/assets/t1.png",
    rating: 5,
    text: "Amazing dresses! The quality is beyond my expectations. The fabric feels premium and the fit is absolutely perfect. Highly recommend IconFashion!",
  },
  {
    id: 2,
    name: "David Smith",
    role: "Fashion Enthusiast",
    photo: "/assets/premium_photo-1682089810582-f7b200217b67.avif",
    rating: 4,
    text: "Great customer service and very stylish outfits. I had a small issue with sizing, but their team resolved it instantly. Will definitely shop again!",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Regular Customer",
    photo: "/assets/images.jpg",
    rating: 5,
    text: "The collection is stunning. I wore the evening gown to a gala, and I received so many compliments. IconFashion is now my go-to brand!",
  },
];

const Review = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl -translate-x-1/2 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3 block"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            What Our <span className="text-blue-600">Icons</span> Say
          </motion.h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Real stories from our global community of fashion-forward customers.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-gray-50 dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-8 right-8 text-gray-200 dark:text-gray-800 group-hover:text-blue-500/20 transition-colors" size={48} />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < review.rating ? "currentColor" : "none"}
                    className={i < review.rating ? "text-orange-400" : "text-gray-300 dark:text-gray-600"}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 relative z-10">
                &quot;{review.text}&quot;
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-teal-400">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-gray-900">
                    <Image
                      src={review.photo}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle2 size={14} className="text-blue-500 fill-blue-500/10" />
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;