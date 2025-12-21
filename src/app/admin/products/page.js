"use client";
import { useState } from "react";
import { toast } from "sonner";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    price: "",
    imageSrc: "",
    gender: "male",
    category: "T-shirt",
    description: "",
    countInStock: 10,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          countInStock: Number(formData.countInStock),
        }),
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        setFormData({ name: "", slug: "", price: "", imageSrc: "", gender: "male", category: "T-shirt", description: "", countInStock: 10 });
      } else {
        const data = await res.json();
        toast.error(data.message || "Failed to add product");
      }
    } catch (err) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-10">
        <h1 className="text-2xl font-light tracking-tight">Add New Product</h1>
        <p className="text-sm text-gray-500">Enter details to list a new item in Atlas.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Product Name</label>
            <input
              required
              className="px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-1 focus:ring-black transition-all"
              type="text"
              placeholder="e.g. Premium Black Tee"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Slug */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Slug (URL)</label>
            <input
              required
              className="px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-1 focus:ring-black transition-all"
              type="text"
              placeholder="premium-black-tee"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Price (₹)</label>
            <input
              required
              className="px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-1 focus:ring-black transition-all"
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Gender</label>
            <select
              className="px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-1 focus:ring-black transition-all"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        {/* Image Source */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Image URL</label>
          <input
            required
            className="px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-1 focus:ring-black transition-all"
            type="text"
            placeholder="https://cloudinary.com/..."
            value={formData.imageSrc}
            onChange={(e) => setFormData({ ...formData, imageSrc: e.target.value })}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Description</label>
          <textarea
            rows="4"
            className="px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:ring-1 focus:ring-black transition-all"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full py-4 bg-black text-white rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gray-800 transition-all disabled:bg-gray-400"
        >
          {loading ? "Processing..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}