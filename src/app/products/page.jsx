"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, ArrowRight, Loader2, ShoppingBag } from "lucide-react";
import Link from "next/link";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  // ব্যাকএন্ড থেকে ডাটা ফেচ করা
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // শুরুতে ৮টি দেখাবে, বাটন ক্লিক করলে সব দেখাবে
  const displayedProducts = showAll ? products : products.slice(0, 8);

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center bg-white dark:bg-gray-950">
        <Loader2 className="animate-spin text-blue-600 mb-4" size={40} />
        <p className="text-gray-500 font-bold animate-pulse uppercase tracking-widest text-xs">Loading Collection...</p>
      </div>
    );
  }

  return (
    <section id="products" className="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block"
          >
            New Arrivals
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            Our Exclusive <span className="text-blue-600">Collection</span>
          </motion.h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product, index) => (
              <motion.div
                key={product._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Image Area */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <button className="absolute top-5 right-5 p-2.5 bg-white/90 dark:bg-gray-800/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                    <Heart size={18} />
                  </button>
                  <div className="absolute top-5 left-5">
                    <span className="bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">New Item</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-7">
                  <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest mb-1.5">{product.category || "Premium Wear"}</p>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 truncate group-hover:text-blue-600 transition-colors">{product.name}</h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < 4 ? "#fbbf24" : "none"} className={i < 4 ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                    <span className="text-[10px] text-gray-400 ml-2 font-bold tracking-tighter uppercase">In Stock</span>
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 font-bold line-through decoration-red-400/50 mb-0.5">${(Number(product.price) + 25).toFixed(2)}</span>
                      <span className="text-2xl font-black text-gray-900 dark:text-white leading-none">${Number(product.price).toFixed(2)}</span>
                    </div>

                    {/* Dynamic Link */}
                    <Link href={`/products/${product._id}`} className="group/btn flex items-center gap-2 bg-gray-900 dark:bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-xs transition-all hover:bg-blue-600 dark:hover:bg-blue-500 active:scale-95 shadow-xl shadow-blue-500/10">
                      Details
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More Button */}
        {!showAll && products.length > 8 && (
          <div className="mt-16 text-center">
            <motion.button 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-3 px-12 py-5 bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white font-black rounded-3xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-xl shadow-gray-200/50 dark:shadow-none active:scale-95"
            >
              <ShoppingBag size={20} />
              Explore All Collection
              <ArrowRight size={20} />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;