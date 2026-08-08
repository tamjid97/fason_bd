"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ShoppingBag, Star } from "lucide-react";

// ডেমো প্রডাক্টের তালিকা
const demoProducts = [
  {
    _id: "1",
    name: "Classic Denim Jacket",
    category: "Outerwear",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&q=80&w=800"
  },
  {
    _id: "2",
    name: "Casual Oversized Hoodie",
    category: "Streetwear",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
  },
  {
    _id: "3",
    name: "Minimalist Black T-Shirt",
    category: "Basics",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800"
  },
  {
    _id: "4",
    name: "Slim Fit Chino Pants",
    category: "Bottoms",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800"
  },
  {
    _id: "5",
    name: "Vintage Bomber Jacket",
    category: "Outerwear",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800"
  },
  {
    _id: "6",
    name: "Checkered Flannel Shirt",
    category: "Casual Wear",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800"
  },
  {
    _id: "7",
    name: "Urban Cargo Pants",
    category: "Bottoms",
    price: 52.00,
    image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=800"
  },
  {
    _id: "8",
    name: "Graphic Print Hoodie",
    category: "Streetwear",
    price: 42.50,
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=800"
  },
  {
    _id: "9",
    name: "Classic Summer Shorts",
    category: "Bottoms",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ProductDetailsPage() {
  const params = useParams();
  const { id } = params;

  // আইডি অনুযায়ী নির্দিষ্ট প্রডাক্ট খুঁজে বের করা
  const product = demoProducts.find((p) => p._id === id);

  if (!product) {
    return (
      <div className="py-32 text-center bg-white dark:bg-gray-950 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Product Not Found</h2>
        <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold transition-all hover:bg-blue-700">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-24 bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-10 hover:underline">
          <ArrowLeft size={16} /> Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div>
            <span className="text-xs text-blue-600 font-black uppercase tracking-widest">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mt-2 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < 4 ? "#fbbf24" : "none"} className={i < 4 ? "text-yellow-400" : "text-gray-300"} />
              ))}
              <span className="text-xs text-gray-400 ml-2 font-bold">(In Stock)</span>
            </div>

            <div className="text-3xl font-black text-gray-900 dark:text-white mb-6">
              ${Number(product.price).toFixed(2)}
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Experience top-tier quality and modern design with this exclusive piece. Crafted for comfort and versatility, it's a perfect addition to your wardrobe.
            </p>

            <button className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/20 active:scale-95">
              <ShoppingBag size={20} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}