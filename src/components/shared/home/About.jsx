"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            About Us
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6">
            At IconFashion, we believe in empowering your style. From elegant evening gowns to casual chic outfits, 
            our curated collections are designed to make you feel confident, stylish, and unique.  
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6">
            Our mission is to provide high-quality, trendy fashion for every occasion. We prioritize sustainability, 
            comfort, and timeless design to ensure our customers always look their best.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition">
            Explore Our Collection
          </button>
        </div>

        {/* Image / Illustration */}
        <div className="flex-1 relative w-full h-80 md:h-96">
          <Image
            src="/assets/about-fashion.jpg" // public/assets folder এ রাখবে
            alt="Fashion Illustration"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;