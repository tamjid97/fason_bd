"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-6">
      <div className="max-w-2xl text-center">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6"
        >
          Coming <span className="text-blue-600">Soon</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 text-lg mb-10"
        >
          We're working on something exciting for you.  
          This page will be available very soon. Stay tuned!
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
          >
            Back to Home
          </Link>
        </motion.div>

        {/* Decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-blue-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;