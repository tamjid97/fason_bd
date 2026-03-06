"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative w-full mt-16 md:mt-20 px-4 md:px-6">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl md:rounded-3xl shadow-xl bg-gray-200 dark:bg-gray-800">
        
        {/* Background Image */}
        <div className="absolute inset-0 transition-transform duration-1000 hover:scale-105">
          <Image
            src="/assets/how-long-should-a-prom-dress-be_1792x.webp"
            alt="Fashion Banner"
            fill
     
            quality={100}
            priority
            className="object-cover object-center"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-left">
          
          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 mb-3 text-[10px] md:text-xs font-bold tracking-widest text-white uppercase bg-blue-600 rounded-full"
          >
            New Collection 2026
          </motion.span>

         
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight max-w-xl"
          >
            Style That <span className="text-blue-500">Defines</span> You
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-gray-200 text-sm md:text-lg max-w-md font-light"
          >
            Discover premium quality outfits that blend comfort with iconic fashion trends.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Link href="/products" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/20">
              <ShoppingBag size={18} />
              Shop Now
            </Link>

            <Link href="/coming-soon" className="hidden sm:flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm md:text-base font-bold rounded-xl backdrop-blur-md border border-white/20 transition-all">
              Explore
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Decorative Indicators (Optional) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
          <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
          <div className="w-4 h-1 bg-white/40 rounded-full"></div>
          <div className="w-4 h-1 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;