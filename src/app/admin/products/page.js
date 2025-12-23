// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function InventoryPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/admin/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-10">
//         <h1 className="text-3xl font-light tracking-tighter uppercase">Inventory</h1>
//         <Link href="/admin/products/new" className="bg-black text-white px-6 py-2 text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-zinc-800">
//           + Add Product
//         </Link>
//       </div>

//       <div className="bg-white rounded-sm border border-gray-100 overflow-hidden">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-gray-50 border-b border-gray-100">
//               <th className="p-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Product</th>
//               <th className="p-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Gender</th>
//               <th className="p-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Price</th>
//               <th className="p-4 text-[10px] uppercase tracking-widest font-bold text-gray-400 text-right">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {products.map((product) => (
//               <tr key={product._id} className="hover:bg-gray-50/50 transition-colors">
//                 <td className="p-4 flex items-center gap-4">
//                   <div className="w-12 h-12 relative bg-gray-100 rounded">
//                     <Image src={product.imageSrc} fill className="object-cover rounded" alt="" />
//                   </div>
//                   <span className="text-sm font-medium">{product.name}</span>
//                 </td>
//                 <td className="p-4 text-xs uppercase tracking-widest text-gray-500">{product.gender}</td>
//                 <td className="p-4 text-sm font-semibold">₹{product.price}</td>
//                 <td className="p-4 text-right">
//                   <button className="text-[10px] uppercase font-bold text-red-400 hover:text-red-600">Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }










// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { toast } from "sonner";

// export default function InventoryPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/admin/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   const deleteProduct = async (id) => {
//     if(!confirm("Are you sure? This will remove the item from the store.")) return;
//     // (Add your delete API logic here)
//     toast.success("Item removed from archive");
//   };

  

//   return (
//     <div className="max-w-6xl mx-auto">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
//         <div>
//           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 block mb-2">Stock Management</span>
//           <h1 className="text-4xl font-light tracking-tighter uppercase">Product Archive</h1>
//         </div>
//         <Link href="/admin/products/new" className="group flex items-center gap-3 bg-black text-white px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold rounded-sm hover:bg-zinc-800 transition-all active:scale-95">
//           <span>Add New Piece</span>
//           <span className="group-hover:translate-x-1 transition-transform">+</span>
//         </Link>
//       </div>

//       <div className="bg-white rounded-sm border border-zinc-200 shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-zinc-50/50 border-b border-zinc-100">
//                 <th className="p-6 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400">Product Identity</th>
//                 <th className="p-6 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400">Category</th>
//                 <th className="p-6 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400">Valuation</th>
//                 <th className="p-6 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-zinc-50">
//               {products.map((product) => (
//                 <tr key={product._id} className="group hover:bg-zinc-50/30 transition-colors">
//                   <td className="p-6">
//                     <div className="flex items-center gap-5">
//                       <div className="w-14 h-16 relative bg-zinc-100 rounded-sm overflow-hidden border border-zinc-100">
//                         <Image src={product.imageSrc} fill className="object-cover transition-all duration-500" alt="" />
//                       </div>
//                       <div>
//                         <p className="text-[12px] font-bold uppercase tracking-tight">{product.name}</p>
//                         <p className="text-[9px] text-zinc-400 uppercase tracking-widest mt-1">ID: {product._id.slice(-6)}</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="p-6 text-[10px] uppercase tracking-widest text-zinc-500">{product.gender}</td>
//                   <td className="p-6">
//                     <span className="text-sm font-light tracking-tighter">₹{product.price}</span>
//                   </td>
//                   <td className="p-6 text-right">
//                     <div className="flex justify-end gap-4">
//                       <button className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 hover:text-black transition-colors underline underline-offset-4">Edit</button>
//                       <button onClick={() => deleteProduct(product._id)} className="text-[9px] uppercase font-bold tracking-widest text-red-400 hover:text-red-600 transition-colors">Terminate</button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }








// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { toast } from "sonner";

// export default function InventoryPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/api/admin/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   const deleteProduct = async (id) => {
//     const confirmDeletion = confirm("REMOVAL ACTION: Are you sure you want to terminate this piece from the archive?");
//     if (!confirmDeletion) return;

//     try {
//       const res = await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
//       if (res.ok) {
//         setProducts((prev) => prev.filter((product) => product._id !== id));
//         toast.success("Piece successfully purged from inventory");
//       } else {
//         throw new Error();
//       }
//     } catch (error) {
//       toast.error("Operation failed: System could not remove the item");
//     }
//   };

//   if (loading) return <div className="p-12 text-[10px] uppercase tracking-[0.5em] animate-pulse">Synchronizing Archive...</div>;

//   return (
//     <div className="max-w-6xl mx-auto">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
//         <div>
//           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 block mb-2">Stock Management</span>
//           <h1 className="text-4xl font-light tracking-tighter uppercase">Product Archive</h1>
//         </div>
//         <Link href="/admin/products/new" className="group flex items-center gap-3 bg-black text-white px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold rounded-sm hover:bg-zinc-800 transition-all active:scale-95">
//           <span>Add New Piece</span>
//           <span className="group-hover:translate-x-1 transition-transform">+</span>
//         </Link>
//       </div>

//       <div className="bg-white rounded-sm border border-zinc-200 shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-zinc-50/50 border-b border-zinc-100">
//                 <th className="p-6 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400">Product Identity</th>
//                 <th className="p-6 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400">Category</th>
//                 <th className="p-6 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400">Valuation</th>
//                 <th className="p-6 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-zinc-50">
//               {products.map((product) => (
//                 <tr key={product._id} className="group hover:bg-zinc-50/30 transition-colors">
//                   <td className="p-6">
//                     <div className="flex items-center gap-5">
//                       <div className="w-14 h-18 relative bg-zinc-100 rounded-sm overflow-hidden border border-zinc-100">
//                         <Image src={product.imageSrc} fill className="object-cover" alt="" />
//                       </div>
//                       <div>
//                         <p className="text-[12px] font-bold uppercase tracking-tight">{product.name}</p>
//                         <p className="text-[9px] text-zinc-400 uppercase tracking-widest mt-1 italic">ID: {product._id.slice(-6)}</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="p-6 text-[10px] uppercase tracking-widest text-zinc-500">{product.gender}</td>
//                   <td className="p-6 text-sm font-light tracking-tighter">₹{product.price.toLocaleString()}</td>
//                   <td className="p-6 text-right">
//                     <div className="flex justify-end gap-6">
//                       <Link href={`/admin/products/edit/${product._id}`} className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 hover:text-black transition-colors underline underline-offset-4">Edit</Link>
//                       <button onClick={() => deleteProduct(product._id)} className="text-[9px] uppercase font-bold tracking-widest text-red-400 hover:text-red-600 transition-colors">Terminate</button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function InventoryPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [terminatingId, setTerminatingId] = useState(null); // Track ID for modal
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const deleteProduct = async () => {
    if (!terminatingId) return;

    try {
      const res = await fetch(`/api/admin/products/${terminatingId}`, { method: "DELETE" });
      if (res.ok) {
        setProducts((prev) => prev.filter((product) => product._id !== terminatingId));
        toast.success("Piece successfully removed from inventory");
        router.refresh(); // Sync stats
      }
    } catch (error) {
      toast.error("Operation failed: System could not remove the item");
    } finally {
      setTerminatingId(null); // Close modal
    }
  };

  if (loading) return <div className="p-12 text-[10px] uppercase tracking-[0.5em] animate-pulse">Synchronizing Archive...</div>;

  return (
    <div className="max-w-6xl mx-auto relative">
      {/* TERMINATION MODAL */}
      {terminatingId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/10 backdrop-blur-sm">
          <div className="bg-white border border-zinc-200 p-10 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-500 block mb-4">Critical Action Required</span>
            <h2 className="text-2xl font-light tracking-tighter uppercase mb-2">Confirm Termination</h2>
            <p className="text-zinc-500 text-[11px] leading-relaxed uppercase tracking-tight mb-8">
              You are about to permanently remove this piece from the digital archive. This action is irreversible.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setTerminatingId(null)}
                className="flex-1 px-6 py-4 border border-zinc-200 text-[10px] uppercase font-bold tracking-widest hover:bg-zinc-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={deleteProduct}
                className="flex-1 px-6 py-4 bg-red-600 text-white text-[10px] uppercase font-bold tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-200"
              >
                Remove Item
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 block mb-2">Stock Management</span>
          <h1 className="text-4xl font-light tracking-tighter uppercase text-zinc-900">Product Archive</h1>
        </div>
        <Link href="/admin/products/new" className="group flex items-center gap-3 bg-black text-white px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold rounded-sm hover:bg-zinc-800 transition-all active:scale-95">
          <span>Add New Piece</span>
          <span className="group-hover:translate-x-1 transition-transform">+</span>
        </Link>
      </div>

      <div className="bg-white rounded-sm border border-zinc-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/50 border-b border-zinc-100">
                <th className="p-6 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400">Product Identity</th>
                <th className="p-6 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400">Category</th>
                <th className="p-6 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400">Valuation</th>
                <th className="p-6 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {products.map((product) => (
                <tr key={product._id} className="group hover:bg-zinc-50/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-18 relative bg-zinc-100 rounded-sm overflow-hidden border border-zinc-100 shadow-sm">
                        <Image src={product.imageSrc} fill className="object-cover" alt="" />
                      </div>
                      <div>
                        <p className="text-[12px] font-bold uppercase tracking-tight text-zinc-800">{product.name}</p>
                        <p className="text-[9px] text-zinc-400 uppercase tracking-widest mt-1 italic">ARCHIVE REF: {product._id.slice(-6).toUpperCase()}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-[10px] uppercase tracking-widest text-zinc-500 font-medium">{product.gender}</td>
                  <td className="p-6 text-sm font-light tracking-tighter text-zinc-900">₹{product.price.toLocaleString()}</td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-8">
                      <Link href={`/admin/products/edit/${product._id}`} className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 hover:text-black transition-colors underline underline-offset-4 decoration-zinc-200">Edit</Link>
                      <button 
                        onClick={() => setTerminatingId(product._id)} 
                        className="text-[9px] uppercase font-bold tracking-widest text-red-500 hover:text-red-600 transition-colors"
                      >
                        Terminate
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}