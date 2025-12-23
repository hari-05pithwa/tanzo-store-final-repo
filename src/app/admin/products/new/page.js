// "use client";
// import { useState } from "react";
// import { toast } from "sonner";

// export default function NewProduct() {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "", slug: "", price: "", imageSrc: "",
//     description: "", material: "100% Cotton", color: "",
//     gender: "male", sizes: ["S", "M", "L", "XL"]
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin/products", {
//         method: "POST",
//         body: JSON.stringify(formData),
//       });
//       if (res.ok) {
//         toast.success("Product Added!");
//         setFormData({ ...formData, name: "", slug: "", price: "", imageSrc: "" });
//       }
//     } catch (err) {
//       toast.error("Error adding product");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-sm">
//       <h1 className="text-2xl font-bold mb-6 uppercase tracking-tight">Add New Product</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input 
//           placeholder="Product Name" 
//           className="w-full p-3 border rounded"
//           value={formData.name}
//           onChange={(e) => setFormData({...formData, name: e.target.value})}
//           required
//         />
//         <div className="grid grid-cols-2 gap-4">
//           <input placeholder="Slug (e.g. black-tee)" className="p-3 border rounded" value={formData.slug} onChange={(e)=>setFormData({...formData, slug: e.target.value})} />
//           <input placeholder="Price (₹)" type="number" className="p-3 border rounded" value={formData.price} onChange={(e)=>setFormData({...formData, price: e.target.value})} />
//         </div>
//         <input placeholder="Image URL (Cloudinary link)" className="w-full p-3 border rounded" value={formData.imageSrc} onChange={(e)=>setFormData({...formData, imageSrc: e.target.value})} />
        
//         <div className="grid grid-cols-2 gap-4">
//           <select className="p-3 border rounded text-gray-500" onChange={(e)=>setFormData({...formData, gender: e.target.value})}>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="unisex">Unisex</option>
//           </select>
//           <input placeholder="Color" className="p-3 border rounded" value={formData.color} onChange={(e)=>setFormData({...formData, color: e.target.value})} />
//         </div>

//         <textarea placeholder="Description" className="w-full p-3 border rounded h-32" value={formData.description} onChange={(e)=>setFormData({...formData, description: e.target.value})} />
        
//         <button disabled={loading} className="w-full bg-black text-white py-4 uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all">
//           {loading ? "Uploading..." : "Publish Product"}
//         </button>
//       </form>
//     </div>
//   );
// }




"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ProductForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageSrc: "",
    gender: "Men",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Archive Updated: Piece Added");
        router.push("/admin/products");
      }
    } catch (err) {
      toast.error("Manifest Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 block mb-2">Inventory Input</span>
        <h1 className="text-4xl font-light tracking-tighter uppercase">New Archive Entry</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 border border-zinc-200 rounded-sm shadow-sm">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Designation Name</label>
          <input 
            required
            className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm"
            placeholder="e.g., OVERSIZED NOIR TEE"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Valuation (INR)</label>
            <input 
              required
              type="number"
              className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm"
              placeholder="2999"
              onChange={(e) => setFormData({...formData, price: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Gender Category</label>
            <select 
              className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm bg-transparent"
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Asset URL (Cloudinary/S3)</label>
          <input 
            required
            className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm"
            placeholder="https://..."
            onChange={(e) => setFormData({...formData, imageSrc: e.target.value})}
          />
        </div>

        <button 
          disabled={loading}
          className="w-full bg-black text-white py-5 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-800 transition-all disabled:bg-zinc-400"
        >
          {loading ? "Syncing Archive..." : "Commit to Store"}
        </button>
      </form>
    </div>
  );
}