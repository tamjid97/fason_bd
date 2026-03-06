"use client";
import React, { use } from "react";
import Image from "next/image";
import dressData from "@/data/dress.json";
import { ShoppingCart, Star, ArrowLeft, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import Link from "next/link";

const ProductDetails = ({ params }) => {
  // Next.js 15+ এ params আনর‍্যাপ করতে use() ব্যবহার করা হয়
  const { id } = use(params); 
  
  const products = Array.isArray(dressData) ? dressData : (dressData?.default ?? []);
  
  // আইডি অনুযায়ী প্রোডাক্ট খোঁজা (ID match ensure করতে toString() ব্যবহার করা হয়েছে)
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Product Not Found!</h1>
        <Link href="/" className="text-blue-600 underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link href="/#products" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-10 transition-colors font-bold">
          <ArrowLeft size={20} /> Back to Collection
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-2xl">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
          
          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-black tracking-widest uppercase text-xs">{product.category || "Premium Fashion"}</span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-3 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-2 mt-4 text-orange-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} className={i < 4 ? "" : "text-gray-300"} />)}
                <span className="text-gray-500 font-bold ml-2 text-sm uppercase tracking-tighter">Verified Review</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-5xl font-black text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
              <div className="flex flex-col">
                <span className="text-xl text-gray-400 line-through font-bold">${(product.price + 25).toFixed(2)}</span>
                <span className="text-red-500 text-xs font-black uppercase italic tracking-widest">Special Discount</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed border-l-4 border-blue-600 pl-6 italic">
              Experience the pinnacle of fashion with our exclusive {product.name}. 
              Designed for those who value elegance and premium comfort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex-1 bg-blue-600 text-white h-16 rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30">
                <ShoppingCart size={22} /> Add to Bag
              </button>
              <button className="flex-1 bg-gray-900 dark:bg-white dark:text-gray-900 text-white h-16 rounded-[1.5rem] font-black text-lg hover:opacity-90 transition-all">
                Buy It Now
              </button>
            </div>

            {/* Service Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100 dark:border-gray-900">
              <div className="flex items-center gap-3 text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                <Truck className="text-blue-600" size={24} /> Free Express Shipping
              </div>
              <div className="flex items-center gap-3 text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                <ShieldCheck className="text-blue-600" size={24} /> 100% Original
              </div>
              <div className="flex items-center gap-3 text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                <RotateCcw className="text-blue-600" size={24} /> Easy Returns
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;