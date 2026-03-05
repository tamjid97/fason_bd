"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg animate-fadeIn">
            Get in Touch with Us
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl animate-fadeIn delay-200">
            We’re here to answer your questions, help you with your orders, and make your IconFashion experience seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Reach out via email, phone, or social media. We love hearing from our customers!
              </p>
              <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> support@iconfashion.com</p>
              <p className="text-gray-700 dark:text-gray-300"><strong>Phone:</strong> +880 1234 567890</p>
              <p className="text-gray-700 dark:text-gray-300"><strong>Address:</strong> 123 Fashion Street, Dhaka, Bangladesh</p>

              {/* Social Icons */}
              <div className="flex mt-6 space-x-4">
                <a href="#" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-300 transition">
                  <FaTwitter />
                </a>
                <a href="#" className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-400 transition">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:from-teal-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.904042135642!2d90.38727381543117!3d23.750903994394384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f17f56b1a1%3A0x6e6c3a3fa1aaf2b1!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1695111229968!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Fade-in Animations */}
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
      `}</style>
    </section>
  );
};

export default Contact;