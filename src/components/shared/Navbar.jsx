"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // fake user for now
  const user = {
    name: "Epick",
    email: "epick@gmail.com",
  };

  // fix hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            IconFashion
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-200">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="text-xl hover:scale-110 transition"
              title="Toggle Theme"
            >
              {resolvedTheme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* User Dropdown */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                  👤 {user.name}
                </button>

                <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-800 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="p-4 border-b dark:border-gray-700">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <Link href="/add-product" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">➕ Add Product</Link>
                  <Link href="/manage-products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">📦 Manage Products</Link>
                  <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</button>
                </div>
              </div>
            ) : (
              <>
                <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">Login</Link>
                <Link href="/register" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">Register</Link>
              </>
            )}
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="text-xl"
              title="Toggle Theme"
            >
              {resolvedTheme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-3 text-gray-700 dark:text-gray-200">
            <Link href="/" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Home</Link>
            <Link href="/Products" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Products</Link>
            <Link href="/about" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">About</Link>
            <Link href="/contact" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Contact</Link>
            {user ? (
              <>
                <Link href="/add-product" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Add Product</Link>
                <Link href="/manage-products" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Manage Products</Link>
              </>
            ) : (
              <>
                <Link href="/login" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Login</Link>
                <Link href="/register" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Register</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;