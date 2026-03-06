"use client";
import React from "react";
import Image from "next/image";
import dressData from "@/data/dress.json";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react"; // Icons for premium look

const Products = () => {
  const products = Array.isArray(dressData) ? dressData : (dressData?.default ?? []);

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
            Trendy Collection
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            Our Featured <span className="text-blue-600">Products</span>
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    New
                  </span>
                </div>

                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors">
                    <Heart size={18} />
                  </button>
                  <button className="p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors">
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mb-1">
                      {product.category || "Fashion"}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors truncate w-full">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 text-orange-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} className="text-gray-300" />
                  <span className="text-xs text-gray-500 ml-1">(4.0)</span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-2xl font-black text-gray-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </p>
                  
                  {/* Cart Button */}
                  <button className="flex items-center justify-center p-3 bg-gray-900 dark:bg-blue-600 text-white rounded-2xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-all active:scale-90 shadow-xl shadow-gray-200 dark:shadow-blue-900/20">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;