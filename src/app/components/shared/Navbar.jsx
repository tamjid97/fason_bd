"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Menu,
  X,
  Sun,
  Moon,
  ShoppingBag,
  ArrowRight,
  User,
  LogOut,
  PlusSquare,
  LayoutDashboard,
  ChevronDown
} from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // localStorage থেকে ইউজার ডাটা চেক
    const checkUser = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    checkUser();
    // লগইন করার পর যাতে সাথে সাথে নাম দেখায় তার জন্য একটি ইভেন্ট লিসেনার
    window.addEventListener("storage", checkUser);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", checkUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  if (!mounted) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-lg border-b border-gray-100 dark:border-gray-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* 1. Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-blue-500/30">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">
            Icon<span className="text-blue-600">Fashion</span>
          </span>
        </Link>

        {/* 2. Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 3. Actions (Theme & Auth) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:scale-110 transition-all active:scale-90"
          >
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Conditional User Dropdown or Login */}
          <div className="hidden md:block">
            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 pl-1 pr-3 py-1 rounded-full hover:shadow-md transition-all">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {user.name[0].toUpperCase()}
                  </div>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-200">{user.name.split(" ")[0]}</span>
                  <ChevronDown size={14} className="text-gray-400 group-hover:rotate-180 transition-transform" />
                </button>

                {/* Dropdown Card */}
                <div className="absolute right-0 top-full mt-3 w-64 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 p-3 overflow-hidden">
                  <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-2">
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Active Account</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{user.email}</p>
                  </div>
                  
                  <Link href="/add-product" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 rounded-xl transition-all">
                    <PlusSquare size={18} /> Add Product
                  </Link>
                  <Link href="/manage-products" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 rounded-xl transition-all">
                    <LayoutDashboard size={18} /> Manage Products
                  </Link>
                  
                  <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all mt-1 border-t border-gray-50 dark:border-gray-800">
                    <LogOut size={18} /> Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-black text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/40 transition-all active:scale-95"
              >
                Sign In <ArrowRight size={16} />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-x-0 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 transition-all duration-300 ease-in-out ${
          menuOpen ? "top-[73px] opacity-100 visible" : "-top-full opacity-0 invisible"
        }`}
      >
        <div className="p-6 space-y-4">
          {user && (
            <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">{user.name[0]}</div>
              <div>
                <p className="text-sm font-black dark:text-white">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="px-4 py-3 text-lg font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
            {user ? (
              <>
                <Link href="/add-product" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 font-bold text-gray-600 dark:text-gray-400">
                  <PlusSquare size={20} /> Add Product
                </Link>
                <Link href="/manage-products" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 font-bold text-gray-600 dark:text-gray-400">
                  <LayoutDashboard size={20} /> Manage Products
                </Link>
                <button onClick={handleLogout} className="w-full py-4 rounded-2xl bg-red-500 text-white font-black shadow-lg shadow-red-500/20">
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 rounded-2xl bg-blue-600 text-white font-black shadow-lg shadow-blue-500/20"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;