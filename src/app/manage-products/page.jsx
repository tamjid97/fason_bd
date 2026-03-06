"use client";

import { useState, useEffect } from "react";
import { Trash2, Edit3, Loader2, PackageOpen } from "lucide-react";
import Link from "next/link";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ১. ডাটাবেস থেকে প্রোডাক্ট নিয়ে আসা
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

  // ২. প্রোডাক্ট ডিলিট করার ফাংশন
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      if (res.ok) {
        setProducts(products.filter((p) => p._id !== id));
      }
    } catch (error) {
      alert("Failed to delete product");
    }
  };

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-white dark:bg-gray-950">
      <Loader2 className="animate-spin text-blue-600 w-10 h-10" />
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#f8fafc] dark:bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black dark:text-white tracking-tight">Manage Store</h1>
            <p className="text-gray-500 mt-1">Total {products.length} products listed</p>
          </div>
          <Link href="/add-product" className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-500/20">
            + Add New
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-20 text-center border border-dashed border-gray-200 dark:border-gray-800">
            <PackageOpen className="mx-auto text-gray-300 mb-4" size={64} />
            <h2 className="text-xl font-bold dark:text-white">No products found!</h2>
            <p className="text-gray-500">Try adding your first product to the store.</p>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th className="px-6 py-4 text-xs font-black uppercase text-gray-400">Product</th>
                  <th className="px-6 py-4 text-xs font-black uppercase text-gray-400">Category</th>
                  <th className="px-6 py-4 text-xs font-black uppercase text-gray-400">Price</th>
                  <th className="px-6 py-4 text-xs font-black uppercase text-gray-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {products.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img src={product.image} className="w-12 h-12 rounded-xl object-cover" alt="" />
                        <span className="font-bold dark:text-white">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium">{product.category}</td>
                    <td className="px-6 py-4 font-black text-blue-600">${product.price}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => handleDelete(product._id)} className="p-2.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}