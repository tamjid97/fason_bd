"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-teal-50 dark:bg-teal-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3 block"
          >
            Contact Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            Let’s Start a <span className="text-blue-600">Conversation</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Inquiry Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Email Us</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">support@iconfashion.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Call Support</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">+880 1234 567 890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Our Studio</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">123 Fashion Street, Dhaka, BD</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Business Hours</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">Mon - Fri: 10AM - 8PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Follow Our Journey</p>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <button key={i} className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm">
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <form className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?" 
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Your message here..." 
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button className="w-full flex items-center justify-center gap-3 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all active:scale-[0.98]">
                <Send size={20} />
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>

        {/* Professional Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 rounded-[3rem] overflow-hidden border-8 border-gray-50 dark:border-gray-900 shadow-2xl h-80 md:h-[450px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.272186938928!2d90.3654215!3d23.7449454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b170726b1d%3A0x70f6c27948e3674b!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1690000000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;