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




// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// export default function ProductForm() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     imageSrc: "",
//     gender: "Men",
//     description: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         toast.success("Archive Updated: Piece Added");
//         router.push("/admin/products");
//       }
//     } catch (err) {
//       toast.error("Manifest Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto">
//       <div className="mb-12">
//         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 block mb-2">Inventory Input</span>
//         <h1 className="text-4xl font-light tracking-tighter uppercase">New Archive Entry</h1>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 border border-zinc-200 rounded-sm shadow-sm">
//         <div className="space-y-2">
//           <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Designation Name</label>
//           <input 
//             required
//             className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm"
//             placeholder="e.g., OVERSIZED NOIR TEE"
//             onChange={(e) => setFormData({...formData, name: e.target.value})}
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-8">
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Valuation (INR)</label>
//             <input 
//               required
//               type="number"
//               className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm"
//               placeholder="2999"
//               onChange={(e) => setFormData({...formData, price: e.target.value})}
//             />
//           </div>
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Gender Category</label>
//             <select 
//               className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm bg-transparent"
//               onChange={(e) => setFormData({...formData, gender: e.target.value})}
//             >
//               <option value="Men">Men</option>
//               <option value="Women">Women</option>
//               <option value="Unisex">Unisex</option>
//             </select>
//           </div>
//         </div>

//         <div className="space-y-2">
//           <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Asset URL (Cloudinary/S3)</label>
//           <input 
//             required
//             className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm"
//             placeholder="https://..."
//             onChange={(e) => setFormData({...formData, imageSrc: e.target.value})}
//           />
//         </div>

//         <button 
//           disabled={loading}
//           className="w-full bg-black text-white py-5 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-800 transition-all disabled:bg-zinc-400"
//         >
//           {loading ? "Syncing Archive..." : "Commit to Store"}
//         </button>
//       </form>
//     </div>
//   );
// }














// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// export default function ProductForm() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     imageSrc: "",
//     gender: "Men",
//     description: "",
//     slug: "", // Added slug field
//   });

//   // Helper to turn "Oversized Noir Tee" into "oversized-noir-tee"
//   const generateSlug = (name) => {
//     return name
//       .toLowerCase()
//       .replace(/[^\w ]+/g, "")
//       .replace(/ +/g, "-");
//   };

//   const handleNameChange = (e) => {
//     const name = e.target.value;
//     setFormData({
//       ...formData,
//       name: name,
//       slug: generateSlug(name), // Automatically sets slug when name is typed
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         toast.success("Archive Updated: Piece Added");
//         router.push("/admin/products");
//         router.refresh();
//       } else {
//         const errorData = await res.json();
//         toast.error(errorData.error || "Submission Failed");
//       }
//     } catch (err) {
//       toast.error("Manifest Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto py-10 px-6">
//       <div className="mb-12">
//         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 block mb-2">Inventory Input</span>
//         <h1 className="text-4xl font-light tracking-tighter uppercase">New Archive Entry</h1>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 border border-zinc-200 rounded-sm shadow-sm">
//         {/* Designation Name */}
//         <div className="space-y-2">
//           <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Designation Name</label>
//           <input 
//             required
//             className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm uppercase"
//             placeholder="e.g., OVERSIZED NOIR TEE"
//             value={formData.name}
//             onChange={handleNameChange}
//           />
//         </div>

//         {/* URL Slug (Visual confirmation) */}
//         <div className="space-y-2">
//           <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">URL Identifier (Auto-generated)</label>
//           <input 
//             required
//             className="w-full border-b border-zinc-200 py-3 text-zinc-400 outline-none text-xs italic bg-zinc-50/50 px-2"
//             value={formData.slug}
//             readOnly // Keeps it consistent with name
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-8">
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Valuation (INR)</label>
//             <input 
//               required
//               type="number"
//               className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm"
//               placeholder="2999"
//               onChange={(e) => setFormData({...formData, price: e.target.value})}
//             />
//           </div>
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Gender Category</label>
//             <select 
//               className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm bg-transparent"
//               onChange={(e) => setFormData({...formData, gender: e.target.value})}
//             >
//               <option value="Men">Men</option>
//               <option value="Women">Women</option>
//               <option value="Unisex">Unisex</option>
//             </select>
//           </div>
//         </div>

//         <div className="space-y-2">
//           <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Asset URL (Cloudinary/S3)</label>
//           <input 
//             required
//             className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm"
//             placeholder="https://..."
//             onChange={(e) => setFormData({...formData, imageSrc: e.target.value})}
//           />
//         </div>

//         <button 
//           disabled={loading}
//           className="w-full bg-black text-white py-5 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-800 transition-all disabled:bg-zinc-400 active:scale-95"
//         >
//           {loading ? "Syncing Archive..." : "Commit to Store"}
//         </button>
//       </form>
//     </div>
//   );
// }











// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// export default function ProductForm() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     imageSrc: "",
//     gender: "male", // Strictly "male" or "female"
//     description: "",
//     slug: "",
//   });

//   const generateSlug = (name) => {
//     return name.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");
//   };

//   const handleNameChange = (e) => {
//     const name = e.target.value;
//     setFormData({
//       ...formData,
//       name: name,
//       slug: generateSlug(name),
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         toast.success("Archive Updated: Piece Added");
//         router.push("/admin/products");
//       }
//     } catch (err) {
//       toast.error("Manifest Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto py-10 px-6">
//       <h1 className="text-4xl font-light tracking-tighter uppercase mb-12">New Archive Entry</h1>
//       <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 border border-zinc-200">
//         <div className="space-y-2">
//           <label className="text-[10px] uppercase font-bold text-zinc-400">Designation Name</label>
//           <input required className="w-full border-b border-zinc-200 py-3 outline-none uppercase text-sm" value={formData.name} onChange={handleNameChange} />
//         </div>

//         <div className="grid grid-cols-2 gap-8">
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase font-bold text-zinc-400">Valuation (INR)</label>
//             <input required type="number" className="w-full border-b border-zinc-200 py-3 outline-none" onChange={(e) => setFormData({...formData, price: e.target.value})} />
//           </div>
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase font-bold text-zinc-400">Gender Category</label>
//             <select 
//               className="w-full border-b border-zinc-200 py-3 outline-none bg-transparent text-sm"
//               value={formData.gender}
//               onChange={(e) => setFormData({...formData, gender: e.target.value})}
//             >
//               <option value="male">Men</option>
//               <option value="female">Women</option>
//             </select>
//           </div>
//         </div>

//         <div className="space-y-2">
//           <label className="text-[10px] uppercase font-bold text-zinc-400">Asset URL</label>
//           <input required className="w-full border-b border-zinc-200 py-3 outline-none" onChange={(e) => setFormData({...formData, imageSrc: e.target.value})} />
//         </div>

//         <button disabled={loading} className="w-full bg-black text-white py-5 text-[11px] uppercase tracking-[0.4em] font-bold">
//           {loading ? "Syncing..." : "Commit to Store"}
//         </button>
//       </form>
//     </div>
//   );
// }

















// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// export default function AddProductPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [uploadingImage, setUploadingImage] = useState(false);
  
//   // const [formData, setFormData] = useState({
//   //   name: "",
//   //   price: "",
//   //   imageSrc: "",
//   //   gender: "male",
//   //   slug: "",
//   // });

//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     imageSrc: "",
//     gender: "male",
//     slug: "",
//     // These defaults prevent the "map" error on the product page
//     sizes: ["S", "M", "L", "XL"], 
//     description: "Premium soft oversized cotton tee.",
//     material: "100% Cotton", // Good to have as a default too
//     color: "Black",         // Good to have as a default too
//   });

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploadingImage(true);
//     const data = new FormData();
//     data.append("file", file);
//     // ✅ Updated with your preset
//     data.append("upload_preset", "tanzo_preset"); 

//     try {
//       const res = await fetch(
//         // ✅ Updated with your cloud name
//         `https://api.cloudinary.com/v1_1/dfn4nidvg/image/upload`, 
//         { method: "POST", body: data }
//       );
//       const fileData = await res.json();
      
//       if (fileData.secure_url) {
//         setFormData((prev) => ({ ...prev, imageSrc: fileData.secure_url }));
//         toast.success("Image uploaded successfully");
//       }
//     } catch (err) {
//       toast.error("Image upload failed");
//     } finally {
//       setUploadingImage(false);
//     }
//   };

//   const handleNameChange = (e) => {
//     const name = e.target.value;
//     setFormData((prev) => ({
//       ...prev,
//       name: name,
//       slug: name.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-"),
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.imageSrc) return toast.error("Please upload an image first");
    
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         toast.success("Archive Updated: Piece Added");
//         router.push("/admin/products");
//         router.refresh();
//       }
//     } catch (err) {
//       toast.error("Database error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto py-10 px-6">
//       <div className="mb-12">
//         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 block mb-2">Inventory Management</span>
//         <h1 className="text-4xl font-light tracking-tighter uppercase">New Archive Entry</h1>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 border border-zinc-200 shadow-sm">
//         <div className="space-y-2">
//           <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Product Visual</label>
//           <div className="flex items-center gap-4">
//             {formData.imageSrc && (
//               <img src={formData.imageSrc} alt="Preview" className="w-16 h-20 object-cover border border-zinc-200" />
//             )}
//             <input 
//               type="file" 
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="text-[10px] file:mr-4 file:py-2 file:px-4 file:border-0 file:text-[10px] file:font-bold file:uppercase file:bg-zinc-100 file:text-black hover:file:bg-zinc-200 cursor-pointer"
//             />
//           </div>
//           {uploadingImage && <p className="text-[9px] uppercase animate-pulse pt-2 text-zinc-500">Uploading to Cloudinary...</p>}
//         </div>

//         <div className="space-y-2">
//           <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Designation Name</label>
//           <input 
//             required
//             placeholder="E.G. VINTAGE OVERSIZED HOODIE"
//             value={formData.name} 
//             onChange={handleNameChange}
//             className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black transition-all uppercase text-sm" 
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">URL Identifier (Auto-Generated)</label>
//           <input 
//             required
//             placeholder="vintage-oversized-hoodie"
//             value={formData.slug} 
//             onChange={(e) => setFormData({...formData, slug: e.target.value})}
//             className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black transition-all text-zinc-500 text-sm" 
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-10">
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Valuation (INR)</label>
//             <input 
//               required
//               type="number"
//               placeholder="2499"
//               value={formData.price} 
//               onChange={(e) => setFormData({...formData, price: e.target.value})}
//               className="w-full border-b border-zinc-200 py-2 outline-none text-sm" 
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Gender Category</label>
//             <select 
//               value={formData.gender} 
//               onChange={(e) => setFormData({...formData, gender: e.target.value})}
//               className="w-full border-b border-zinc-200 py-2 outline-none bg-transparent text-sm"
//             >
//               <option value="male">Men</option>
//               <option value="female">Women</option>
//             </select>
//           </div>
//         </div>

//         <button 
//           disabled={loading || uploadingImage}
//           className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-zinc-800 disabled:bg-zinc-200 transition-all"
//         >
//           {loading ? "Processing..." : "Commit to Archive"}
//         </button>
//       </form>
//     </div>
//   );
// }

















// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// export default function AddProductPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [uploadingImage, setUploadingImage] = useState(false);
  
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     imageSrc: "",
//     gender: "male",
//     slug: "",
//     description: "",
//     material: "",
//     color: "",
//     // Hardcoded sizes so the Product Detail page doesn't crash
//     sizes: ["S", "M", "L", "XL"], 
//   });

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploadingImage(true);
//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", "tanzo_preset"); 

//     try {
//       const res = await fetch(
//         `https://api.cloudinary.com/v1_1/dfn4nidvg/image/upload`, 
//         { method: "POST", body: data }
//       );
//       const fileData = await res.json();
      
//       if (fileData.secure_url) {
//         setFormData((prev) => ({ ...prev, imageSrc: fileData.secure_url }));
//         toast.success("Image uploaded successfully");
//       }
//     } catch (err) {
//       toast.error("Image upload failed");
//     } finally {
//       setUploadingImage(false);
//     }
//   };

//   const handleNameChange = (e) => {
//     const name = e.target.value;
//     setFormData((prev) => ({
//       ...prev,
//       name: name,
//       slug: name.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-"),
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.imageSrc) return toast.error("Please upload an image first");
    
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         toast.success("Archive Updated: Piece Added");
//         router.push("/admin/products");
//         router.refresh();
//       }
//     } catch (err) {
//       toast.error("Database error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto py-10 px-6">
//       <div className="mb-12">
//         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 block mb-2">Inventory Management</span>
//         <h1 className="text-4xl font-light tracking-tighter uppercase text-zinc-900">New Archive Entry</h1>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 border border-zinc-200 shadow-sm">
        
//         {/* 1. Image Upload Section */}
//         <div className="space-y-2">
//           <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Product Visual</label>
//           <div className="flex items-center gap-4">
//             {formData.imageSrc && (
//               <img src={formData.imageSrc} alt="Preview" className="w-16 h-20 object-cover border border-zinc-200 shadow-sm" />
//             )}
//             <input 
//               type="file" 
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="text-[10px] file:mr-4 file:py-2 file:px-4 file:border-0 file:text-[10px] file:font-bold file:uppercase file:bg-zinc-100 file:text-black hover:file:bg-zinc-200 cursor-pointer"
//             />
//           </div>
//           {uploadingImage && <p className="text-[9px] uppercase animate-pulse pt-2 text-zinc-500">Uploading to Cloudinary...</p>}
//         </div>

//         {/* 2. Name & Slug */}
//         <div className="space-y-8">
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Designation Name</label>
//             <input 
//               required
//               placeholder="E.G. HARDIK PANDYA GT TSHIRT"
//               value={formData.name} 
//               onChange={handleNameChange}
//               className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black transition-all uppercase text-sm" 
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">URL Identifier (Auto-Generated)</label>
//             <input 
//               required
//               placeholder="hardik-pandya-gt-tshirt"
//               value={formData.slug} 
//               onChange={(e) => setFormData({...formData, slug: e.target.value})}
//               className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black transition-all text-zinc-500 text-sm" 
//             />
//           </div>
//         </div>

//         {/* 3. Description Field */}
//         <div className="space-y-2">
//           <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Description</label>
//           <textarea 
//             required
//             placeholder="Describe the aesthetic and fit of this piece..."
//             value={formData.description} 
//             onChange={(e) => setFormData({...formData, description: e.target.value})}
//             className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black transition-all text-sm min-h-[80px] resize-none" 
//           />
//         </div>

//         {/* 4. Color & Material */}
//         <div className="grid grid-cols-2 gap-10">
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Color</label>
//             <input 
//               required
//               placeholder="E.G. NAVY BLUE"
//               value={formData.color} 
//               onChange={(e) => setFormData({...formData, color: e.target.value})}
//               className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black text-sm" 
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Material</label>
//             <input 
//               required
//               placeholder="E.G. 100% JERSEY COTTON"
//               value={formData.material} 
//               onChange={(e) => setFormData({...formData, material: e.target.value})}
//               className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black text-sm" 
//             />
//           </div>
//         </div>

//         {/* 5. Price & Gender */}
//         <div className="grid grid-cols-2 gap-10">
//           <div className="space-y-2">
//             <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Valuation (INR)</label>
//             <input 
//               required
//               type="number"
//               placeholder="1499"
//               value={formData.price} 
//               onChange={(e) => setFormData({...formData, price: e.target.value})}
//               className="w-full border-b border-zinc-200 py-2 outline-none text-sm" 
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Gender Category</label>
//             <select 
//               value={formData.gender} 
//               onChange={(e) => setFormData({...formData, gender: e.target.value})}
//               className="w-full border-b border-zinc-200 py-2 outline-none bg-transparent text-sm"
//             >
//               <option value="male">Men</option>
//               <option value="female">Women</option>
//             </select>
//           </div>
//         </div>

//         {/* Visual Sizes Guide (Non-editable as per your request) */}
//         <div className="pt-4 border-t border-zinc-50">
//            <label className="text-[10px] uppercase font-bold text-zinc-300 tracking-widest block mb-3">Enabled Sizes</label>
//            <div className="flex gap-2">
//               {formData.sizes.map(s => (
//                 <span key={s} className="w-8 h-8 flex items-center justify-center border border-zinc-100 text-[10px] text-zinc-400 font-bold uppercase">{s}</span>
//               ))}
//            </div>
//         </div>

//         <button 
//           disabled={loading || uploadingImage}
//           className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-zinc-800 disabled:bg-zinc-200 transition-all shadow-lg"
//         >
//           {loading ? "Processing..." : "Commit to Archive"}
//         </button>
//       </form>
//     </div>
//   );
// }






"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageSrc: "",
    gender: "male",
    slug: "",
    description: "",
    material: "",
    color: "",
    sizes: ["S", "M", "L", "XL"], 
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingImage(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "tanzo_preset"); 

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dfn4nidvg/image/upload`, 
        { method: "POST", body: data }
      );
      const fileData = await res.json();
      
      if (fileData.secure_url) {
        setFormData((prev) => ({ ...prev, imageSrc: fileData.secure_url }));
        toast.success("Image uploaded successfully");
      }
    } catch (err) {
      toast.error("Image upload failed");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setFormData((prev) => ({
      ...prev,
      name: name,
      slug: name.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-"),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.imageSrc) return toast.error("Please upload an image first");
    
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
        router.refresh();
      }
    } catch (err) {
      toast.error("Database error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-6 md:py-10 px-4 md:px-6 pb-20">
      <div className="mb-8 md:mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 block mb-2">Inventory Management</span>
        <h1 className="text-3xl md:text-4xl font-light tracking-tighter uppercase text-zinc-900">New Archive Entry</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 bg-white p-6 md:p-10 border border-zinc-200 shadow-sm">
        
        {/* 1. Image Upload Section */}
        <div className="space-y-3">
          <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Product Visual</label>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {formData.imageSrc ? (
              <img src={formData.imageSrc} alt="Preview" className="w-20 h-28 object-cover border border-zinc-200 shadow-sm" />
            ) : (
              <div className="w-20 h-28 bg-zinc-50 border border-dashed border-zinc-200 flex items-center justify-center text-[9px] text-zinc-400 uppercase tracking-tighter text-center px-2">No Image</div>
            )}
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageUpload}
              className="text-[10px] w-full file:mr-4 file:py-2 file:px-4 file:border-0 file:text-[10px] file:font-bold file:uppercase file:bg-zinc-100 file:text-black hover:file:bg-zinc-200 cursor-pointer"
            />
          </div>
          {uploadingImage && <p className="text-[9px] uppercase animate-pulse pt-2 text-zinc-500">Uploading to Cloudinary...</p>}
        </div>

        {/* 2. Name & Slug */}
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Designation Name</label>
            <input 
              required
              placeholder="E.G. HARDIK PANDYA GT TSHIRT"
              value={formData.name} 
              onChange={handleNameChange}
              className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black transition-all uppercase text-sm rounded-none" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">URL Identifier (Auto-Generated)</label>
            <input 
              required
              placeholder="hardik-pandya-gt-tshirt"
              value={formData.slug} 
              onChange={(e) => setFormData({...formData, slug: e.target.value})}
              className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black transition-all text-zinc-500 text-sm rounded-none" 
            />
          </div>
        </div>

        {/* 3. Description Field */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Description</label>
          <textarea 
            required
            placeholder="Describe the aesthetic and fit of this piece..."
            value={formData.description} 
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black transition-all text-sm min-h-[80px] resize-none rounded-none" 
          />
        </div>

        {/* 4. Color & Material - Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Color</label>
            <input 
              required
              placeholder="E.G. NAVY BLUE"
              value={formData.color} 
              onChange={(e) => setFormData({...formData, color: e.target.value})}
              className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black text-sm rounded-none" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Material</label>
            <input 
              required
              placeholder="E.G. 100% JERSEY COTTON"
              value={formData.material} 
              onChange={(e) => setFormData({...formData, material: e.target.value})}
              className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black text-sm rounded-none" 
            />
          </div>
        </div>

        {/* 5. Price & Gender - Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Valuation (INR)</label>
            <input 
              required
              type="number"
              placeholder="1499"
              value={formData.price} 
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="w-full border-b border-zinc-200 py-2 outline-none text-sm rounded-none" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Gender Category</label>
            <select 
              value={formData.gender} 
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
              className="w-full border-b border-zinc-200 py-2 outline-none bg-transparent text-sm rounded-none appearance-none"
            >
              <option value="male">Men</option>
              <option value="female">Women</option>
            </select>
          </div>
        </div>

        {/* Enabled Sizes */}
        <div className="pt-4 border-t border-zinc-50 text-center md:text-left">
           <label className="text-[10px] uppercase font-bold text-zinc-300 tracking-widest block mb-3">Enabled Sizes</label>
           <div className="flex gap-2 justify-center md:justify-start">
              {formData.sizes.map(s => (
                <span key={s} className="w-8 h-8 flex items-center justify-center border border-zinc-100 text-[10px] text-zinc-400 font-bold uppercase">{s}</span>
              ))}
           </div>
        </div>

        <button 
          disabled={loading || uploadingImage}
          className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-zinc-800 disabled:bg-zinc-200 transition-all shadow-lg active:scale-[0.98]"
        >
          {loading ? "Processing..." : "Commit to Archive"}
        </button>
      </form>
    </div>
  );
}