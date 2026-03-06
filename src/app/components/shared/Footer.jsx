"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-white">
              Icon<span className="text-blue-500">Fashion</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Elevating your everyday style with premium collections. We bring the latest trends from the global runway directly to your wardrobe.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#products" className="hover:text-blue-500 transition">New Arrivals</Link></li>
              <li><Link href="#about" className="hover:text-blue-500 transition">Our Story</Link></li>
              <li><Link href="/shop" className="hover:text-blue-500 transition">Shop All</Link></li>
              <li><Link href="/blog" className="hover:text-blue-500 transition">Fashion Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-500" />
                123 Fashion Street, NY 10001
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                support@iconfashion.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Join Our Club</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe to get special offers and once-in-a-lifetime deals.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-blue-500 transition"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 IconFashion. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;