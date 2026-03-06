"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send, ShieldCheck, Sparkles } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 dark:opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-400 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative group"
      >
        {/* Main Card */}
        <div className="relative bg-blue-600 dark:bg-blue-700 rounded-[3.5rem] p-10 md:p-20 overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
          
          {/* Animated Decorative Shapes */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Icon Badge */}
            <div className="mb-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
              <Sparkles className="text-white w-8 h-8 animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Join the <span className="text-blue-200">Icon Insider</span>
            </h2>
            
            <p className="text-blue-50/80 mb-10 max-w-xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Get early access to new drops, secret sales, and curated fashion trends delivered straight to your inbox.
            </p>

            {/* Form Container */}
            <form className="w-full max-w-2xl flex flex-col md:flex-row gap-3 p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl">
              <input 
                type="email" 
                required
                placeholder="Enter your premium email" 
                className="flex-1 bg-transparent px-8 py-5 rounded-2xl text-white placeholder:text-blue-100/50 outline-none text-lg"
              />
              <button 
                type="submit"
                className="group flex items-center justify-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-[1.5rem] font-black text-lg hover:bg-blue-50 transition-all active:scale-95 shadow-lg shadow-black/10"
              >
                Subscribe Now
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-blue-100/60 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} />
                No Spam, Ever.
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} />
                Unsubscribe anytime.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;