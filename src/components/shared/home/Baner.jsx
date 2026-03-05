"use client";
import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative w-full aspect-[16/9] md:aspect-[4/1] lg:aspect-[16/5] overflow-hidden rounded-xl shadow-2xl">
      {/* Background Image */}
      <Image
        src="/assets/486573641_606663855744146_6729202450791998174_n.jpg"
        alt="Fashion Banner"
        fill
        className="object-contain object-center"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
       
        <button className="mt-5 lg:mt-60 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-teal-500 hover:to-blue-600 transition-transform duration-300 animate-fadeIn delay-400">
          Shop Now
        </button>
      </div>

      {/* Animation classes */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fadeIn.delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default Banner;