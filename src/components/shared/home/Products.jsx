"use client";
import React from "react";
import products from "@/data/dress.json";
import Image from "next/image";

const Products = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-10">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Product Image */}
              {product.image && (
                <div className="relative w-full h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              )}

              {/* Product Info */}
              <div className="p-4">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {product.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
                  {product.description || "No description available."}
                </p>
                <p className="mt-4 text-blue-600 dark:text-blue-400 font-bold text-lg">
                  ${product.price.toFixed(2)}
                </p>

                {/* CTA Button */}
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;