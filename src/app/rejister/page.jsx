"use client";
import React from 'react';
import { User, Mail, Lock, Smartphone, ArrowRight, Github, Chrome, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Registration Successful! Please login.");
        router.push("/login");
      } else {
        const errorData = await res.json();
        alert(errorData.message || "Registration failed!");
      }
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 flex items-center justify-center p-6 transition-colors">
      <div className="max-w-xl w-full bg-white dark:bg-gray-900 rounded-[3rem] shadow-2xl shadow-blue-500/5 p-8 md:p-12 border border-gray-100 dark:border-gray-800">
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <User className="text-white" size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">Create Account</h1>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-500 dark:text-gray-400 ml-1 uppercase tracking-widest">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input name="name" type="text" required placeholder="John Doe" className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all dark:text-white text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-500 dark:text-gray-400 ml-1 uppercase tracking-widest">Phone</label>
              <div className="relative group">
                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input name="phone" type="tel" required placeholder="+880 1XXX" className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all dark:text-white text-sm" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-500 dark:text-gray-400 ml-1 uppercase tracking-widest">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input name="email" type="email" required placeholder="example@mail.com" className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all dark:text-white text-sm" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-500 dark:text-gray-400 ml-1 uppercase tracking-widest">Set Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input name="password" type="password" required placeholder="••••••••" className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all dark:text-white text-sm" />
            </div>
          </div>

          <button type="submit" className="w-full bg-gray-900 dark:bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-600 dark:hover:bg-blue-500 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group">
            Create My Account
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-gray-50 dark:border-gray-800 text-center">
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
            Already a member? <Link href="/login" className="text-blue-600 font-black">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;