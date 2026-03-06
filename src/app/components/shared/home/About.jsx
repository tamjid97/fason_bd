"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Rocket, ShieldCheck } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Happy Clients", value: "50k+" },
    { label: "Premium Products", value: "1.2k+" },
    { label: "Years Experience", value: "10+" },
  ];

  return (
    <section id="about" className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image Gallery/Composition */}
          <div className="flex-1 relative w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900"
            >
              <Image
                src="/assets/elegant-evening-dresses-on-mannequins-stylish-fashionable-evening-gowns-photo.jpeg" 
                alt="Our Fashion Story"
                width={600}
                height={700}
                className="object-cover w-full h-[500px]"
              />
            </motion.div>

            {/* Experience Card Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -left-4 md:-left-8 z-20 bg-blue-600 p-6 md:p-8 rounded-3xl shadow-xl text-white"
            >
              <p className="text-4xl md:text-5xl font-black mb-1">10+</p>
              <p className="text-sm md:text-base font-medium opacity-90 leading-tight">
                Years of Excellence <br /> in Fashion Industry
              </p>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                The IconFashion Story
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-8">
                Defining the Future of <span className="text-blue-600">Modern Style</span>
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                At **IconFashion**, we don&apos;t just sell clothes; we curate identities. Our journey began with a simple mission: to make high-end fashion accessible without compromising on sustainability or comfort.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: <ShieldCheck className="text-blue-600" />, text: "Premium Quality Material" },
                  { icon: <Star className="text-blue-600" />, text: "Exclusive Limited Designs" },
                  { icon: <Rocket className="text-blue-600" />, text: "Fast Worldwide Delivery" },
                  { icon: <CheckCircle2 className="text-blue-600" />, text: "Eco-Friendly Production" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap gap-8 border-t border-gray-100 dark:border-gray-800 pt-10">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold shadow-2xl shadow-blue-500/30 transition-all"
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;