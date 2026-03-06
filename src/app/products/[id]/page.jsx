"use client";
import React, { use, useState, useEffect } from "react";
import Image from "next/image";
import {
  ShoppingCart,
  Star,
  ArrowLeft,
  ShieldCheck,
  Truck,
  RotateCcw,
  Loader2,
} from "lucide-react";
import Link from "next/link";

const ProductDetails = ({ params }) => {
  // Next.js 15+ এ params আনর‍্যাপ করতে use() ব্যবহার করা হয়
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // ব্যাকএন্ড থেকে এই নির্দিষ্ট আইডি-র প্রোডাক্ট নিয়ে আসা
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        // MongoDB-র _id এর সাথে ম্যাচ করানো হচ্ছে
        const found = data.find((p) => p._id === id);
        setProduct(found);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <Loader2 className="animate-spin text-blue-600 w-12 h-12" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <h1 className="text-2xl font-black tracking-tighter uppercase">
          Product Not Found!
        </h1>
        <Link href="/" className="text-blue-600 underline font-bold">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-28 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-10 transition-colors font-bold"
        >
          <ArrowLeft size={20} /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-black tracking-widest uppercase text-xs">
                {product.category || "Premium Fashion"}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-3 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mt-4 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < 4 ? "currentColor" : "none"}
                    className={i < 4 ? "" : "text-gray-300"}
                  />
                ))}
                <span className="text-gray-500 font-bold ml-2 text-sm uppercase tracking-tighter">
                  Verified Review
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-5xl font-black text-gray-900 dark:text-white">
                ${Number(product.price).toFixed(2)}
              </span>
              <div className="flex flex-col">
                <span className="text-xl text-gray-400 line-through font-bold">
                  ${(Number(product.price) + 25).toFixed(2)}
                </span>
                <span className="text-red-500 text-xs font-black uppercase italic tracking-widest">
                  Special Discount
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed border-l-4 border-blue-600 pl-6 italic">
              Experience the pinnacle of fashion with our exclusive{" "}
              {product.name}. Designed for those who value elegance and premium
              comfort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/coming-soon"
                className="flex-1 bg-blue-600 text-white h-16 rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 active:scale-95"
              >
                <ShoppingCart size={22} /> Add to Bag
              </Link>
              <Link
                href="/coming-soon"
                className="flex flex-1 items-center justify-center bg-gray-900 dark:bg-white dark:text-gray-900 text-white h-16 rounded-[1.5rem] font-black text-lg hover:opacity-90 transition-all active:scale-95"
              >
                Buy It Now
              </Link>
            </div>

            {/* Service Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100 dark:border-gray-900">
              <div className="flex items-center gap-3 text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                <Truck className="text-blue-600" size={24} /> Free Express
                Shipping
              </div>
              <div className="flex items-center gap-3 text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                <ShieldCheck className="text-blue-600" size={24} /> 100%
                Original
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
