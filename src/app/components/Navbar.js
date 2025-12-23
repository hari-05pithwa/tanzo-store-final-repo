// 1)imp

// "use client";
// import { SignedOut, SignedIn, UserButton, useUser } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";

// export default function Navbar() {
//   const { cartItems } = useCart();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [isMobileMenuOpen]);

//   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
//   const { user } = useUser(); // Clerk hook
// const isAdmin = user?.primaryEmailAddress?.emailAddress === "haripithwa2005@gmail.com";

// // In your JSX links:
// {isAdmin && (
//   <Link href="/admin/products" className="text-red-500 font-bold">
//     ADMIN PANEL
//   </Link>
// )}
//   const NavLinks = ({ mobile = false }) => (
//     <div className={`flex ${mobile ? "flex-col w-full items-center gap-2" : "flex-row gap-6 lg:gap-8"}`}>
//       <Link href="/explore" onClick={() => setIsMobileMenuOpen(false)}
//         className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
//         Explore
//       </Link>
//       <Link href="/men" onClick={() => setIsMobileMenuOpen(false)}
//         className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
//         Men
//       </Link>
//       <Link href="/women" onClick={() => setIsMobileMenuOpen(false)}
//         className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
//         Women
//       </Link>
//       <SignedIn>
//         <Link href="/orders" onClick={() => setIsMobileMenuOpen(false)}
//           className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
//           Orders
//         </Link>
//       </SignedIn>
//     </div>
//   );

//   return (
//     <>
//       {/* MOBILE DRAWER */}
//       <div className={`fixed inset-0 w-full h-screen bg-[#0A0A0A] z-[999] flex flex-col transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
//         <div className="flex items-center justify-between px-8 py-10">
//           <span className="text-[10px] text-white/30 uppercase tracking-[0.6em] font-bold">Navigation</span>
//           <button className="p-2 text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
//             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
//               <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//         </div>

//         <div className="flex-1 flex flex-col items-center justify-center px-10">
//           <NavLinks mobile={true} />
//         </div>

//         <div className="px-10 py-12 border-t border-white/5">
//           <div className="flex flex-col gap-6 opacity-30">
//             <div className="flex justify-between items-center text-white">
//               <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Craftsmanship</span>
//               <span className="text-[9px] uppercase">Premium Organic</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAVBAR */}
//       <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 left-0 z-[100]">
//         <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">

//           <div className="flex items-center flex-1 lg:w-[40%]">
//             <button className="md:hidden p-2 -ml-2 text-black" onClick={() => setIsMobileMenuOpen(true)}>
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                 <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>
//             <div className="hidden md:block">
//               <NavLinks />
//             </div>
//           </div>

//           <Link href="/" className="flex-shrink-0">
//             <Image src="/TanzoStoreLogo.svg" className="h-5 md:h-6 w-auto" height={100} width={100} alt="Tanzo Logo" priority />
//           </Link>

//           <div className="flex-1 flex items-center justify-end gap-3 md:gap-6 lg:w-[40%] pl-4">
//             <SignedIn>
//               <Link href="/cart" className="relative p-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" className="fill-gray-800">
//                   <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z" />
//                 </svg>
//                 {totalQuantity > 0 && (
//                   <span className="absolute top-0 right-0 bg-black text-white text-[8px] font-bold h-4 w-4 flex items-center justify-center rounded-full ring-2 ring-white">
//                     {totalQuantity}
//                   </span>
//                 )}
//               </Link>
//               <div className="ml-1 border-l border-gray-100 pl-2 md:pl-6">
//                 <UserButton appearance={{ elements: { userButtonAvatarBox: "h-7 w-7 md:h-8 md:w-8" } }} />
//               </div>
//             </SignedIn>

//             <SignedOut>
//               {/* Added Sign In Link here */}
//               <Link href="/auth/sign-in" className="text-[12px] uppercase tracking-widest font-medium text-gray-600 hover:text-black transition-colors">
//                 Sign In
//               </Link>
//               <Link href="/auth/sign-up" className="px-6 py-2 bg-black text-white text-[9px] md:text-[12px] uppercase tracking-[0.2em] font-bold rounded-full">
//                 Join
//               </Link>
//             </SignedOut>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }

// 2) imp
// "use client";
// import { SignedOut, SignedIn, UserButton, useUser } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";

// export default function Navbar() {
//   const { cartItems } = useCart();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { user, isSignedIn } = useUser();

//   // 1. Correct Admin Email Check
//   const isAdmin = user?.primaryEmailAddress?.emailAddress === "haripithwa2005@gmail.com";

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [isMobileMenuOpen]);

//   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

//   const NavLinks = ({ mobile = false }) => (
//     <div className={`flex ${mobile ? "flex-col w-full items-center gap-2" : "flex-row gap-6 lg:gap-8 items-center"}`}>
//       <Link href="/explore" onClick={() => setIsMobileMenuOpen(false)}
//         className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
//         Explore
//       </Link>
//       <Link href="/men" onClick={() => setIsMobileMenuOpen(false)}
//         className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
//         Men
//       </Link>
//       <Link href="/women" onClick={() => setIsMobileMenuOpen(false)}
//         className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
//         Women
//       </Link>

//       {/* 2. Admin Panel Link added inside NavLinks */}
//       {/* {isSignedIn && isAdmin && (
//         <Link href="/admin/products" onClick={() => setIsMobileMenuOpen(false)}
//           className={`${mobile ? "text-3xl py-6 border-b border-white/10 text-red-500 font-bold" : "text-[11px] text-red-600 font-bold"} uppercase tracking-[0.4em] hover:opacity-60 transition-all w-full text-center md:border-none`}>
//           Admin Panel
//         </Link>
//       )} */}

//       <SignedIn>
//         <Link href="/orders" onClick={() => setIsMobileMenuOpen(false)}
//           className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
//           Orders
//         </Link>
//       </SignedIn>
//     </div>
//   );

//   return (
//     <>
//       {/* MOBILE DRAWER */}
//       <div className={`fixed inset-0 w-full h-screen bg-[#0A0A0A] z-[999] flex flex-col transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
//         <div className="flex items-center justify-between px-8 py-10">
//           <span className="text-[10px] text-white/30 uppercase tracking-[0.6em] font-bold">Navigation</span>
//           <button className="p-2 text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
//             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
//               <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//         </div>
//         <div className="flex-1 flex flex-col items-center justify-center px-10">
//           <NavLinks mobile={true} />
//         </div>
//       </div>

//       {/* MAIN NAVBAR */}
//       <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 left-0 z-[100]">
//         <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
//           <div className="flex items-center flex-1 lg:w-[40%]">
//             <button className="md:hidden p-2 -ml-2 text-black" onClick={() => setIsMobileMenuOpen(true)}>
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                 <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>
//             <div className="hidden md:block">
//               <NavLinks />
//             </div>
//           </div>

//           <Link href="/" className="flex-shrink-0">
//             <Image src="/TanzoStoreLogo.svg" className="h-5 md:h-6 w-auto" height={100} width={100} alt="Tanzo Logo" priority />
//           </Link>

//           <div className="flex-1 flex items-center justify-end gap-3 md:gap-6 lg:w-[40%] pl-4">
//             <SignedIn>
//               <Link href="/cart" className="relative p-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" className="fill-gray-800">
//                   <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z" />
//                 </svg>
//                 {totalQuantity > 0 && (
//                   <span className="absolute top-0 right-0 bg-black text-white text-[8px] font-bold h-4 w-4 flex items-center justify-center rounded-full ring-2 ring-white">
//                     {totalQuantity}
//                   </span>
//                 )}
//               </Link>
//               <div className="ml-1 border-l border-gray-100 pl-2 md:pl-6">
//                 <UserButton appearance={{ elements: { userButtonAvatarBox: "h-7 w-7 md:h-8 md:w-8" } }} />
//               </div>
//             </SignedIn>
//             <SignedOut>
//               <Link href="/auth/sign-in" className="text-[12px] uppercase tracking-widest font-medium text-gray-600 hover:text-black transition-colors">Sign In</Link>
//               <Link href="/auth/sign-up" className="px-6 py-2 bg-black text-white text-[9px] md:text-[12px] uppercase tracking-[0.2em] font-bold rounded-full">Join</Link>
//             </SignedOut>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }

// "use client";
// import { SignedOut, SignedIn, UserButton, useUser } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";

// export default function Navbar() {
//   const { cartItems } = useCart();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { user } = useUser();

//   // Updated Admin Logic
//   const isAdmin =
//     user?.primaryEmailAddress?.emailAddress === "haripithwa2005@gmail.com";

//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
//   }, [isMobileMenuOpen]);

//   const totalQuantity = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   const NavLinks = ({ mobile = false }) => (
//     <div
//       className={`flex ${
//         mobile
//           ? "flex-col w-full items-start gap-2"
//           : "flex-row gap-6 lg:gap-8 items-center"
//       }`}
//     >
//       {["Explore", "Men", "Women"].map((item) => (
//         <Link
//           key={item}
//           href={`/${item.toLowerCase()}`}
//           onClick={() => setIsMobileMenuOpen(false)}
//           className={`${
//             mobile
//               ? "text-4xl py-4 border-b border-white/5 w-full text-left font-light tracking-tighter"
//               : "text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-medium"
//           } text-white md:text-black/70 hover:text-black transition-all`}
//         >
//           {item}
//         </Link>
//       ))}

//       <SignedIn>
//         <Link
//           href="/orders"
//           onClick={() => setIsMobileMenuOpen(false)}
//           className={`${
//             mobile
//               ? "text-4xl py-4 border-b border-white/5 w-full text-left font-light tracking-tighter"
//               : "text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-medium"
//           } text-white md:text-black/70 hover:text-black transition-all`}
//         >
//           Orders
//         </Link>

//         {/* NEW: Admin Link added to Navbar for your specific email */}
//         {isAdmin && (
//           <Link
//             href="/admin"
//             onClick={() => setIsMobileMenuOpen(false)}
//             className={`${
//               mobile
//                 ? "text-4xl py-4 border-b border-white/10 w-full text-left font-light tracking-tighter text-yellow-200"
//                 : "text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-sm hover:bg-indigo-100"
//             } transition-all`}
//           >
//             Admin
//           </Link>
//         )}
//       </SignedIn>

//       <SignedOut>
//         {mobile && (
//           <Link
//             href="/auth/sign-up"
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="text-xl mt-8 py-3 px-6 bg-white text-black uppercase tracking-widest font-bold rounded-full"
//           >
//             Create Account
//           </Link>
//         )}
//       </SignedOut>
//     </div>
//   );

//   return (
//     <>
//       {/* MOBILE DRAWER */}
//       <div
//         className={`fixed inset-0 w-full h-screen bg-[#0A0A0A] z-[999] flex flex-col transition-all duration-500 ease-in-out md:hidden ${
//           isMobileMenuOpen
//             ? "opacity-100 visible"
//             : "opacity-0 invisible pointer-events-none"
//         }`}
//       >
//         <div className="flex items-center justify-between px-6 py-8">
//           <span className="text-[10px] text-white/30 uppercase tracking-[0.6em] font-bold">
//             Menu
//           </span>
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="text-white p-2"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.5"
//             >
//               <path d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div className="flex-1 flex flex-col justify-center px-8">
//           <NavLinks mobile={true} />
//         </div>
//       </div>

//       {/* MAIN NAVBAR */}
//       <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-xl sticky top-0 left-0 z-[100]">
//         <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-10 py-3.5 md:py-5">
//           <div className="flex items-center flex-1">
//             <button
//               className="md:hidden flex flex-col gap-1.5 p-2 -ml-2 group"
//               onClick={() => setIsMobileMenuOpen(true)}
//             >
//               <div className="w-5 h-[1.2px] bg-black"></div>
//               <div className="w-3.5 h-[1.2px] bg-black"></div>
//             </button>
//             <div className="hidden md:block">
//               <NavLinks />
//             </div>
//           </div>

//           <Link href="/" className="absolute left-1/2 -translate-x-1/2">
//             <Image
//               src="/TanzoStoreLogo.svg"
//               className="h-[14px] md:h-[18px] lg:h-[22px] w-auto"
//               height={30}
//               width={100}
//               alt="Tanzo"
//               priority
//             />
//           </Link>

//           <div className="flex-1 flex items-center justify-end gap-1.5 md:gap-5">
//             <SignedIn>
//               <Link
//                 href="/cart"
//                 className="relative p-2 hover:opacity-60 transition-opacity"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="18"
//                   viewBox="0 -960 960 960"
//                   width="18"
//                   className="fill-black"
//                 >
//                   <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z" />
//                 </svg>
//                 {totalQuantity > 0 && (
//                   <span className="absolute top-1 right-1 bg-black text-white text-[7px] font-bold h-3 w-3 flex items-center justify-center rounded-full">
//                     {totalQuantity}
//                   </span>
//                 )}
//               </Link>
//               <div className="pl-1 md:pl-2 border-l border-gray-100">
//                 <UserButton
//                   appearance={{
//                     elements: { userButtonAvatarBox: "h-7 w-7 md:h-8 md:w-8" },
//                   }}
//                 />
//               </div>
//             </SignedIn>
//             <SignedOut>
//               <div className="flex items-center gap-1.5 md:gap-4">
//                 <Link
//                   href="/auth/sign-in"
//                   className="text-[9px] md:text-[11px] uppercase tracking-widest font-bold text-gray-500 hover:text-black"
//                 >
//                   Sign In
//                 </Link>
//                 <Link
//                   href="/auth/sign-up"
//                   className="px-3.5 md:px-6 py-1.5 md:py-2 bg-black text-white text-[8px] md:text-[11px] uppercase tracking-widest font-bold rounded-full"
//                 >
//                   Join
//                 </Link>
//               </div>
//             </SignedOut>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }


















// "use client";
// import { SignedOut, SignedIn, UserButton, useUser } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation"; // Added for active state
// import { useCart } from "@/context/CartContext";

// export default function Navbar() {
//   const { cartItems } = useCart();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { user } = useUser();
//   const pathname = usePathname(); // Get current active route

//   const isAdmin = user?.primaryEmailAddress?.emailAddress === "haripithwa2005@gmail.com";

//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
//   }, [isMobileMenuOpen]);

//   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

//   // Helper to check if a link is active
//   const isActive = (path) => pathname === path;

//   const NavLinks = ({ mobile = false }) => {
//     const links = [
//       { name: "Explore", href: "/explore" },
//       { name: "Men", href: "/men" },
//       { name: "Women", href: "/women" },
//     ];

//     return (
//       <div className={`flex ${mobile ? "flex-col w-full items-start" : "flex-row gap-6 lg:gap-8 items-center"}`}>
//         {links.map((link) => (
//           <Link
//             key={link.name}
//             href={link.href}
//             onClick={() => setIsMobileMenuOpen(false)}
//             className={`${
//               mobile
//                 ? `text-4xl py-5 border-b border-white/5 w-full text-left font-light tracking-tighter ${
//                     isActive(link.href) ? "text-white" : "text-white/40"
//                   }`
//                 : `text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-bold py-1 border-b-2 transition-all ${
//                     isActive(link.href) 
//                       ? "text-black border-black" 
//                       : "text-black/40 border-transparent hover:text-black"
//                   }`
//             }`}
//           >
//             {link.name}
//           </Link>
//         ))}

//         <SignedIn>
//           <Link
//             href="/orders"
//             onClick={() => setIsMobileMenuOpen(false)}
//             className={`${
//               mobile
//                 ? `text-4xl py-5 border-b border-white/5 w-full text-left font-light tracking-tighter ${
//                     isActive("/orders") ? "text-white" : "text-white/40"
//                   }`
//                 : `text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-bold py-1 border-b-2 transition-all ${
//                     isActive("/orders") 
//                       ? "text-black border-black" 
//                       : "text-black/40 border-transparent hover:text-black"
//                   }`
//             }`}
//           >
//             Orders
//           </Link>

//           {isAdmin && (
//             <Link
//               href="/admin"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={`${
//                 mobile
//                   ? `text-4xl py-5 border-b border-white/10 w-full text-left font-light tracking-tighter ${
//                       isActive("/admin") ? "text-cyan-400" : "text-cyan-400/50"
//                     }`
//                   : `text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-bold px-3 py-1 rounded-sm transition-all ${
//                       isActive("/admin") 
//                         ? "bg-indigo-600 text-white" 
//                         : "text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
//                     }`
//               }`}
//             >
//               Admin
//             </Link>
//           )}
//         </SignedIn>
//       </div>
//     );
//   };

//   return (
//     <>
//       {/* MOBILE DRAWER */}
//       <div
//         className={`fixed inset-0 w-full h-screen bg-[#0A0A0A] z-[999] flex flex-col transition-all duration-500 ease-in-out md:hidden ${
//           isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
//         }`}
//       >
//         <div className="flex items-center justify-between px-6 py-8">
//           <span className="text-[10px] text-white/30 uppercase tracking-[0.6em] font-bold">Menu</span>
//           <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//               <path d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div className="flex-1 flex flex-col justify-center px-8">
//           <NavLinks mobile={true} />
//           <SignedOut>
//              <Link
//               href="/auth/sign-in"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-2xl mt-12 py-4 border border-white/20 text-white text-center uppercase tracking-widest font-light"
//             >
//               Sign In
//             </Link>
//           </SignedOut>
//         </div>
//       </div>

//       {/* MAIN NAVBAR */}
//       <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-xl sticky top-0 left-0 z-[100]">
//         <nav className="max-w-[1440px] mx-auto flex items-center px-4 md:px-10 py-4 md:py-5">
          
//           {/* LEFT: Nav Links / Hamburger */}
//           <div className="flex-1 flex items-center">
//             <button
//               className="md:hidden flex flex-col gap-1.5 p-2 -ml-2 group"
//               onClick={() => setIsMobileMenuOpen(true)}
//             >
//               <div className="w-5 h-[1.2px] bg-black"></div>
//               <div className="w-3.5 h-[1.2px] bg-black"></div>
//             </button>
//             <div className="hidden md:block">
//               <NavLinks />
//             </div>
//           </div>

//           {/* CENTER: Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <Image
//               src="/TanzoStoreLogo.svg"
//               className="h-[16px] md:h-[18px] lg:h-[22px] w-auto"
//               height={30}
//               width={100}
//               alt="Tanzo"
//               priority
//             />
//           </Link>

//           {/* RIGHT: Actions */}
//           <div className="flex-1 flex items-center justify-end gap-2 md:gap-5">
//             <SignedIn>
//               <Link href="/cart" className="relative p-2 hover:opacity-60 transition-opacity">
//                 <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" className="fill-black">
//                   <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z" />
//                 </svg>
//                 {totalQuantity > 0 && (
//                   <span className="absolute top-1 right-1 bg-black text-white text-[7px] font-bold h-3.5 w-3.5 flex items-center justify-center rounded-full">
//                     {totalQuantity}
//                   </span>
//                 )}
//               </Link>
//               <div className="pl-2 border-l border-gray-100 ml-1">
//                 <UserButton
//                   appearance={{
//                     elements: { userButtonAvatarBox: "h-7 w-7 md:h-8 md:w-8" },
//                   }}
//                 />
//               </div>
//             </SignedIn>
            
//             <SignedOut>
//               <div className="flex items-center gap-4">
//                 <Link
//                   href="/auth/sign-in"
//                   className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-black/50 hover:text-black transition-colors"
//                 >
//                   Sign In
//                 </Link>
//                 <Link
//                   href="/auth/sign-up"
//                   className="hidden md:block px-6 py-2 bg-black text-white text-[11px] uppercase tracking-widest font-bold rounded-full hover:bg-zinc-800 transition-colors"
//                 >
//                   Join
//                 </Link>
//               </div>
//             </SignedOut>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }










// "use client";
// import { SignedOut, SignedIn, UserButton, useUser } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation"; 
// import { useCart } from "@/context/CartContext";

// export default function Navbar() {
//   const { cartItems } = useCart();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { user } = useUser();
//   const pathname = usePathname();

//   const isAdmin = user?.primaryEmailAddress?.emailAddress === "haripithwa2005@gmail.com";

//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
//   }, [isMobileMenuOpen]);

//   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
//   const isActive = (path) => pathname === path;

//   const NavLinks = ({ mobile = false }) => {
//     const links = [
//       { name: "Explore", href: "/explore" },
//       { name: "Men", href: "/men" },
//       { name: "Women", href: "/women" },
//     ];

//     return (
//       <div className={`flex ${mobile ? "flex-col w-full items-start" : "flex-row gap-8 lg:gap-10 items-center"}`}>
//         {links.map((link) => (
//           <Link
//             key={link.name}
//             href={link.href}
//             onClick={() => setIsMobileMenuOpen(false)}
//             className={`${
//               mobile
//                 ? `text-4xl py-6 border-b border-white/10 w-full text-left font-light tracking-tighter text-white`
//                 : `text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300 relative group ${
//                     isActive(link.href) ? "text-black" : "text-zinc-400 hover:text-black"
//                   }`
//             }`}
//           >
//             {link.name}
//             {!mobile && (
//               <span className={`absolute -bottom-1 left-0 h-[1px] bg-black transition-all duration-300 ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
//             )}
//           </Link>
//         ))}

//         <SignedIn>
//           <Link
//             href="/orders"
//             onClick={() => setIsMobileMenuOpen(false)}
//             className={`${
//               mobile
//                 ? `text-4xl py-6 border-b border-white/10 w-full text-left font-light tracking-tighter text-white`
//                 : `text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300 relative group ${
//                     isActive("/orders") ? "text-black" : "text-zinc-400 hover:text-black"
//                   }`
//             }`}
//           >
//             Orders
//             {!mobile && (
//               <span className={`absolute -bottom-1 left-0 h-[1px] bg-black transition-all duration-300 ${isActive("/orders") ? "w-full" : "w-0 group-hover:w-full"}`} />
//             )}
//           </Link>

//           {isAdmin && (
//             <Link
//               href="/admin"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={`${
//                 mobile
//                   ? `text-4xl py-6 border-b border-white/10 w-full text-left font-light tracking-tighter text-yellow-400`
//                   : `text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-bold px-4 py-1.5 rounded-sm transition-all ${
//                       isActive("/admin") 
//                         ? "bg-indigo-600 text-white" 
//                         : "text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
//                     }`
//               }`}
//             >
//               Admin
//             </Link>
//           )}
//         </SignedIn>
//       </div>
//     );
//   };

//   return (
//     <>
//       {/* MOBILE DRAWER */}
//       <div
//         className={`fixed inset-0 w-full h-screen bg-[#080808] z-[999] flex flex-col transition-all duration-700 ease-in-out md:hidden ${
//           isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//         }`}
//       >
//         <div className="flex items-center justify-between px-6 py-8">
//           <span className="text-[10px] text-white/70 uppercase tracking-[0.8em] font-medium">Navigation</span>
//           <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//               <path d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div className="flex-1 flex flex-col justify-center px-10">
//           <NavLinks mobile={true} />
//           <SignedOut>
//              <Link
//               href="/auth/sign-in"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-xl mt-16 py-4 border border-white/20 text-white text-center uppercase tracking-[0.4em] font-light"
//             >
//               Sign In
//             </Link>
//           </SignedOut>
//         </div>
//       </div>

//       {/* MAIN NAVBAR */}
//       <header className="w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 left-0 z-[100]">
//         <nav className="max-w-[1440px] mx-auto flex items-center px-6 md:px-12 py-4 md:py-6">
//           <div className="flex-1 flex items-center">
//             <button
//               className="md:hidden flex flex-col gap-2 p-2 -ml-2"
//               onClick={() => setIsMobileMenuOpen(true)}
//             >
//               <div className="w-6 h-[px] bg-black"></div>
//               <div className="w-4 h-[1px] bg-black"></div>
//             </button>
//             <div className="hidden md:block">
//               <NavLinks />
//             </div>
//           </div>

//           <Link href="/" className="flex-shrink-0">
//             <Image
//               src="/TanzoStoreLogo.svg"
//               className="h-[14px] md:h-[18px] lg:h-[20px] w-auto"
//               height={30}
//               width={100}
//               alt="Tanzo"
//               priority
//             />
//           </Link>

//           <div className="flex-1 flex items-center justify-end gap-3 md:gap-6">
//             <SignedIn>
//               <Link href="/cart" className="relative p-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" className="fill-black">
//                   <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z" />
//                 </svg>
//                 {totalQuantity > 0 && (
//                   <span className="absolute top-0 right-0 bg-black text-white text-[8px] font-medium h-4 w-4 flex items-center justify-center rounded-full">
//                     {totalQuantity}
//                   </span>
//                 )}
//               </Link>
//               <div className="pl-4 border-l border-zinc-100 ml-2">
//                 <UserButton
//                   appearance={{
//                     elements: { userButtonAvatarBox: "h-8 w-8" },
//                   }}
//                 />
//               </div>
//             </SignedIn>
            
//             <SignedOut>
//               <div className="flex items-center gap-6">
//                 <Link
//                   href="/auth/sign-in"
//                   className="text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-400 hover:text-black transition-colors"
//                 >
//                   Sign In
//                 </Link>
//                 <Link
//                   href="/auth/sign-up"
//                   className="hidden md:block px-8 py-2.5 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold rounded-sm hover:bg-zinc-800 transition-all"
//                 >
//                   Join
//                 </Link>
//               </div>
//             </SignedOut>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }









"use client";
import { SignedOut, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useUser();
  const pathname = usePathname();

  const isAdmin = user?.primaryEmailAddress?.emailAddress === "haripithwa2005@gmail.com";

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const isActive = (path) => pathname === path;

  const NavLinks = ({ mobile = false }) => {
    const links = [
      { name: "Explore", href: "/explore" },
      { name: "Men", href: "/men" },
      { name: "Women", href: "/women" },
    ];

    // Combine standard links with Orders for the mobile mapping
    const mobileLinks = [...links];
    if (user) mobileLinks.push({ name: "Orders", href: "/orders" });

    return (
      <div className={`flex ${mobile ? "flex-col w-full items-start" : "flex-row gap-8 lg:gap-10 items-center"}`}>
        {mobileLinks.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ 
              transitionDelay: mobile ? `${index * 50 + 150}ms` : "0ms" 
            }}
            className={`${
              mobile
                ? `text-4xl py-6 border-b border-white/20 w-full text-left font-light tracking-widest text-white transition-all duration-500 ease-out ${
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  }`
                : `text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300 relative group ${
                    isActive(link.href) ? "text-black" : "text-zinc-400 hover:text-black"
                  }`
            }`}
          >
            {link.name}
            {!mobile && (
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-black transition-all duration-300 ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
            )}
          </Link>
        ))}

        <SignedIn>
          {isAdmin && (
            <Link
              href="/admin"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                transitionDelay: mobile ? `${mobileLinks.length * 50 + 150}ms` : "0ms" 
              }}
              className={`${
                mobile
                  ? `text-4xl py-6 border-b border-white/20 w-full text-left font-light tracking-widest text-yellow-200 transition-all duration-500 ease-out ${
                      isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                    }`
                  : `text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-bold px-4 py-1.5 rounded-sm transition-all ${
                      isActive("/admin") 
                        ? "bg-indigo-600 text-white" 
                        : "text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
                    }`
              }`}
            >
              Admin
            </Link>
          )}
        </SignedIn>
      </div>
    );
  };

  return (
    <>
      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 w-full h-screen bg-[#080808] z-[999] flex flex-col transition-all duration-700 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-8">
          <span className="text-[10px] text-white/40 uppercase tracking-[0.8em] font-medium">Navigation</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center px-10">
          <NavLinks mobile={true} />
          <SignedOut>
             <Link
              href="/auth/sign-in"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl mt-16 py-4 border border-white/20 text-white text-center uppercase tracking-[0.4em] font-light"
            >
              Sign In
            </Link>
          </SignedOut>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 left-0 z-[100]">
        <nav className="max-w-[1440px] mx-auto flex items-center px-6 md:px-12 py-4 md:py-6">
          <div className="flex-1 flex items-center">
            <button
              className="md:hidden flex flex-col gap-2 p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <div className="w-6 h-[1px] bg-black"></div>
              <div className="w-4 h-[1px] bg-black"></div>
            </button>
            <div className="hidden md:block">
              <NavLinks />
            </div>
          </div>

          <Link href="/" className="flex-shrink-0">
            <Image
              src="/TanzoStoreLogo.svg"
              className="h-[14px] md:h-[18px] lg:h-[20px] w-auto"
              height={30}
              width={100}
              alt="Tanzo"
              priority
            />
          </Link>

          <div className="flex-1 flex items-center justify-end gap-3 md:gap-6">
            <SignedIn>
              <Link href="/cart" className="relative p-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" className="fill-black">
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z" />
                </svg>
                {totalQuantity > 0 && (
                  <span className="absolute top-0 right-0 bg-black text-white text-[8px] font-medium h-4 w-4 flex items-center justify-center rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </Link>
              <div className="pl-4 border-l border-zinc-100 ml-2">
                <UserButton
                  appearance={{
                    elements: { userButtonAvatarBox: "h-8 w-8" },
                  }}
                />
              </div>
            </SignedIn>
            
            <SignedOut>
              <div className="flex items-center gap-6">
                <Link
                  href="/auth/sign-in"
                  className="text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-400 hover:text-black transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="hidden md:block px-8 py-2.5 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold rounded-sm hover:bg-zinc-800 transition-all"
                >
                  Join
                </Link>
              </div>
            </SignedOut>
          </div>
        </nav>
      </header>
    </>
  );
}