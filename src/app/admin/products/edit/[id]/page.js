// "use client";
// import { useEffect, useState, React } from "react";
// import { useRouter, useParams } from "next/navigation";
// import { toast } from "sonner";

// export default function EditProductPage() {
//   const router = useRouter();
//   const { id } = useParams(); // Grabs the ID from the URL
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     imageSrc: "",
//     gender: "Men",
//     description: "",
//   });

//   // 1. Fetch current product data to fill the form
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`/api/admin/products/${id}`);
//         const data = await res.json();
//         if (res.ok) {
//           setFormData(data);
//         } else {
//           toast.error("Could not find this piece in archive");
//         }
//       } catch (err) {
//         toast.error("Connection error");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setUpdating(true);

//     try {
//       // 2. Use PATCH to update the existing record
//       const res = await fetch(`/api/admin/products/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         toast.success("Manifest Updated: Piece modified successfully");
//         router.push("/admin/products");
//       }
//     } catch (err) {
//       toast.error("Update failed");
//     } finally {
//       setUpdating(false);
//     }
//   };

//   if (loading) return <div className="p-20 text-[10px] uppercase tracking-widest animate-pulse">Retrieving Piece Data...</div>;

//   return (
//     <div className="max-w-2xl mx-auto py-10">
//       <div className="mb-12">
//         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 block mb-2">Inventory Correction</span>
//         <h1 className="text-4xl font-light tracking-tighter uppercase text-zinc-900">Edit Archive Entry</h1>
//       </div>

//       <form onSubmit={handleUpdate} className="space-y-10 bg-white p-10 border border-zinc-200 shadow-sm rounded-sm">
//         <div className="space-y-2">
//           <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Designation Name</label>
//           <input 
//             required 
//             value={formData.name}
//             className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-all text-sm uppercase tracking-wider" 
//             onChange={(e) => setFormData({...formData, name: e.target.value})} 
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-10">
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Valuation (INR)</label>
//             <input 
//               required 
//               type="number" 
//               value={formData.price}
//               className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-all text-sm" 
//               onChange={(e) => setFormData({...formData, price: e.target.value})} 
//             />
//           </div>
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Categorization</label>
//             <select 
//               value={formData.gender}
//               className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-all text-sm bg-transparent"
//               onChange={(e) => setFormData({...formData, gender: e.target.value})}
//             >
//               <option value="Men">Men</option>
//               <option value="Women">Women</option>
//               <option value="Unisex">Unisex</option>
//             </select>
//           </div>
//         </div>

//         <div className="space-y-2">
//           <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Asset Source URL</label>
//           <input 
//             required 
//             value={formData.imageSrc}
//             className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-all text-sm" 
//             onChange={(e) => setFormData({...formData, imageSrc: e.target.value})} 
//           />
//         </div>

//         <div className="flex gap-4">
//             <button 
//                 type="button"
//                 onClick={() => router.back()}
//                 className="flex-1 border border-zinc-200 text-black py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-zinc-50 transition-all"
//             >
//                 Cancel
//             </button>
//             <button 
//                 disabled={updating} 
//                 className="flex-[2] bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-zinc-800 transition-all disabled:opacity-50"
//             >
//                 {updating ? "Updating Archive..." : "Save Modifications"}
//             </button>
//         </div>
//       </form>
//     </div>
//   );
// }









// "use client";
// import { useEffect, useState, use } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// export default function EditProductPage({ params }) {
//   const router = useRouter();
//   const resolvedParams = use(params); 
//   const id = resolvedParams.id;
  
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     imageSrc: "",
//     gender: "Men",
//   });

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`/api/admin/products/${id}`);
//         const data = await res.json();
//         if (res.ok) {
//           setFormData(data);
//         } else {
//           toast.error("Could not find this piece in archive");
//         }
//       } catch (err) {
//         toast.error("Connection error");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setUpdating(true);
//     try {
//       const res = await fetch(`/api/admin/products/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         toast.success("Manifest Updated");
//         router.push("/admin/products");
//         router.refresh();
//       }
//     } catch (err) {
//       toast.error("Update failed");
//     } finally {
//       setUpdating(false);
//     }
//   };

//   if (loading) return <div className="p-20 text-[10px] uppercase tracking-widest animate-pulse">Retrieving Piece...</div>;

//   return (
//     <div className="max-w-2xl mx-auto py-10">
//       <h1 className="text-4xl font-light uppercase mb-12">Edit Archive Entry</h1>
//       <form onSubmit={handleUpdate} className="space-y-10 bg-white p-10 border border-zinc-200">
//         <div className="space-y-2">
//           <label className="text-[10px] uppercase font-bold text-zinc-400">Designation Name</label>
//           <input required value={formData.name} className="w-full border-b border-zinc-200 py-3 outline-none" 
//             onChange={(e) => setFormData({...formData, name: e.target.value})} />
//         </div>
//         <div className="grid grid-cols-2 gap-10">
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase font-bold text-zinc-400">Valuation</label>
//             <input required type="number" value={formData.price} className="w-full border-b border-zinc-200 py-3 outline-none" 
//               onChange={(e) => setFormData({...formData, price: e.target.value})} />
//           </div>
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase font-bold text-zinc-400">Category</label>
//             <select value={formData.gender} className="w-full border-b border-zinc-200 py-3 outline-none bg-transparent"
//               onChange={(e) => setFormData({...formData, gender: e.target.value})}>
//               <option value="Men">Men</option>
//               <option value="Women">Women</option>
//               <option value="Unisex">Unisex</option>
//             </select>
//           </div>
//         </div>
//         <div className="space-y-2">
//           <label className="text-[10px] uppercase font-bold text-zinc-400">Asset URL</label>
//           <input required value={formData.imageSrc} className="w-full border-b border-zinc-200 py-3 outline-none" 
//             onChange={(e) => setFormData({...formData, imageSrc: e.target.value})} />
//         </div>
//         <button disabled={updating} className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.4em]">
//           {updating ? "Updating..." : "Save Modifications"}
//         </button>
//       </form>
//     </div>
//   );
// }









"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function EditProductPage({ params }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageSrc: "",
    gender: "Men",
    slug: "", // Added slug to the form state
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/admin/products/${id}`);
        const data = await res.json();
        if (res.ok) {
          setFormData(data);
        } else {
          toast.error("Archive data not found");
        }
      } catch (err) {
        toast.error("Database connection error");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const res = await fetch(`/api/admin/products/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Product Archive Updated");
        router.push("/admin/products");
        router.refresh();
      }
    } catch (err) {
      toast.error("Update failed");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="p-20 text-[10px] uppercase tracking-widest animate-pulse">Loading Archive...</div>;

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-4xl font-light uppercase mb-12">Edit Product</h1>
      <form onSubmit={handleUpdate} className="space-y-8 bg-white p-10 border border-zinc-200">
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-zinc-400">Product Name</label>
          <input 
            value={formData.name} 
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black transition-all" 
          />
        </div>



        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-zinc-400">Price (INR)</label>
            <input 
              type="number"
              value={formData.price} 
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="w-full border-b border-zinc-200 py-2 outline-none" 
            />
          
          </div>
        </div>

        <button 
          disabled={updating}
          className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-zinc-800 disabled:opacity-50"
        >
          {updating ? "Saving Changes..." : "Update Archive"}
        </button>
      </form>
    </div>
  );
}