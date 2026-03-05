import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">IconFashion</h2>
          <p className="mt-4 text-sm">
            IconFashion is a modern fashion marketplace where you can explore
            trendy products and manage your fashion business easily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Dashboard Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Dashboard
          </h3>

          <ul className="space-y-2">
            <li>
              <Link href="/add-product" className="hover:text-white">
                Add Product
              </Link>
            </li>

            <li>
              <Link href="/manage-products" className="hover:text-white">
                Manage Products
              </Link>
            </li>

            <li>
              <Link href="/login" className="hover:text-white">
                Login
              </Link>
            </li>

            <li>
              <Link href="/register" className="hover:text-white">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex space-x-4">

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
            >
              🌐
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
            >
              📘
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
            >
              📸
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
            >
              🐦
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 text-center py-5 text-sm">
        © {new Date().getFullYear()} IconFashion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;