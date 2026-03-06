"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  PlusCircle, Loader2, Package, DollarSign, 
  Image as ImageIcon, Tag, CheckCircle2, AlertCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "Mens",
    description: "" // এক্সট্রা ডেসক্রিপশন ফিল্ড যোগ করা হয়েছে
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) router.push("/login");
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          router.push("/manage-products"); // প্রোডাক্ট সেভ হলে ম্যানেজ পেজে পাঠানো ভালো
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#f8fafc] dark:bg-gray-950 px-4">
      {/* Success Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-900/30 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-black dark:text-white">Success!</h2>
              <p className="text-gray-500">Your product has been published.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Left Side: Image Preview */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800 sticky top-32">
            <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-4 ml-2">Live Preview</p>
            <div className="aspect-[4/5] rounded-[2rem] bg-gray-100 dark:bg-gray-800 overflow-hidden relative group">
              {formData.image ? (
                <img src={formData.image} alt="Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 p-6 text-center">
                  <ImageIcon size={48} strokeWidth={1} className="mb-4 opacity-20" />
                  <p className="text-sm font-medium">Image preview will appear here once you paste a link</p>
                </div>
              )}
            </div>
            <div className="mt-4 p-2">
              <h3 className="font-bold text-lg dark:text-white truncate">{formData.name || "Product Title"}</h3>
              <p className="text-blue-600 font-black text-xl">${formData.price || "0.00"}</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-3">
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 lg:p-10 shadow-sm border border-gray-100 dark:border-gray-800"
          >
            <div className="mb-10">
              <h1 className="text-3xl font-black dark:text-white tracking-tight">Post New Item</h1>
              <p className="text-gray-500 mt-2 font-medium">Create a new listing in your fashion store</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Product Title */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-black mb-3 dark:text-gray-300 uppercase tracking-wider">
                  <Package size={16} className="text-blue-600" /> Product Title
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Slim Fit Denim Jacket"
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-2 border-transparent focus:border-blue-600/20 focus:bg-white dark:focus:bg-gray-800 rounded-2xl transition-all outline-none dark:text-white font-medium"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Price */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-black mb-3 dark:text-gray-300 uppercase tracking-wider">
                    <DollarSign size={16} className="text-blue-600" /> Price
                  </label>
                  <input
                    required
                    type="number"
                    placeholder="0.00"
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-2 border-transparent focus:border-blue-600/20 rounded-2xl outline-none dark:text-white font-bold text-lg"
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-black mb-3 dark:text-gray-300 uppercase tracking-wider">
                    <Tag size={16} className="text-blue-600" /> Category
                  </label>
                  <select
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-2 border-transparent focus:border-blue-600/20 rounded-2xl outline-none dark:text-white font-bold appearance-none cursor-pointer"
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Mens">Mens Fashion</option>
                    <option value="Womens">Womens Fashion</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label className="flex items-center gap-2 text-sm font-black mb-3 dark:text-gray-300 uppercase tracking-wider">
                  <ImageIcon size={16} className="text-blue-600" /> Image Source Link
                </label>
                <input
                  required
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-2 border-transparent focus:border-blue-600/20 rounded-2xl outline-none dark:text-white text-sm"
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-black py-5 rounded-[1.5rem] shadow-xl shadow-blue-500/25 transition-all flex items-center justify-center gap-3 text-lg mt-4 active:scale-[0.98]"
              >
                {loading ? (
                  <Loader2 className="animate-spin w-6 h-6" />
                ) : (
                  <>Publish Item <PlusCircle size={20} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}