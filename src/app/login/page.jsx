"use client";
import React from 'react';
import { Mail, Lock, EyeOff, Github, Chrome } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        // ডেমো প্রজেক্টের জন্য আমরা সেশন ম্যানেজমেন্ট localStorage এ করছি
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Welcome Back!");
        router.push("/");
        router.refresh();
      } else {
        alert("Invalid email or password!");
      }
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 flex items-center justify-center p-6 transition-colors">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl shadow-blue-500/5 p-10 border border-gray-100 dark:border-gray-800">
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <Lock className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Welcome Back</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input name="email" type="email" required placeholder="name@company.com" className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-blue-600 dark:text-white" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Password</label>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input name="password" type="password" required placeholder="••••••••" className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 py-4 pl-12 pr-12 rounded-2xl outline-none focus:border-blue-600 dark:text-white" />
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-700 active:scale-[0.98] transition-all">
            Sign In
          </button>
        </form>

        <p className="text-center mt-10 text-sm font-medium text-gray-500 dark:text-gray-400">
          Don't have an account? <Link href="/rejister" className="text-blue-600 font-black">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;