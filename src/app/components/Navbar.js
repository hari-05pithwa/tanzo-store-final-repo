// // "use client";
// // import { SignedOut, SignedIn, UserButton, useUser } from "@clerk/nextjs";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { useState, useEffect } from "react";
// // import { useCart } from "@/context/CartContext";

// // export default function Navbar() {
// //   const { user } = useUser();
// //   const { cartItems } = useCart();
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   useEffect(() => {
// //     if (isMobileMenuOpen) {
// //       document.body.style.overflow = 'hidden';
// //     } else {
// //       document.body.style.overflow = 'unset';
// //     }
// //   }, [isMobileMenuOpen]);

// //   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

// //   const NavLinks = ({ mobile = false }) => (
// //     <div className={`flex ${mobile ? "flex-col w-full items-center gap-2" : "flex-row gap-6 lg:gap-8"}`}>
// //       <Link href="/explore" onClick={() => setIsMobileMenuOpen(false)} 
// //         className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
// //         Explore
// //       </Link>
// //       <Link href="/men" onClick={() => setIsMobileMenuOpen(false)} 
// //         className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
// //         Men
// //       </Link>
// //       <Link href="/women" onClick={() => setIsMobileMenuOpen(false)} 
// //         className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
// //         Women
// //       </Link>
// //       <SignedIn>
// //         <Link href="/orders" onClick={() => setIsMobileMenuOpen(false)} 
// //           className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
// //           Orders
// //         </Link>
// //       </SignedIn>
// //     </div>
// //   );

// //   return (
// //     <>
// //       {/* MOBILE DRAWER - Moved outside header for perfect layering */}
// //       <div className={`fixed inset-0 w-full h-screen bg-[#0A0A0A] z-[999] flex flex-col transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
// //         {/* Drawer Header */}
// //         <div className="flex items-center justify-between px-8 py-10">
// //           <span className="text-[10px] text-white/30 uppercase tracking-[0.6em] font-bold">Navigation</span>
// //           <button className="p-2 text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
// //             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
// //               <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
// //             </svg>
// //           </button>
// //         </div>

// //         {/* Drawer Links */}
// //         <div className="flex-1 flex flex-col items-center justify-center px-10">
// //           <NavLinks mobile={true} />
          
// //           <SignedOut>
// //             <Link href="/auth/sign-in" onClick={() => setIsMobileMenuOpen(false)} 
// //               className="mt-12 text-[10px] uppercase tracking-[0.5em] font-bold text-white border border-white/20 px-16 py-5 rounded-full hover:bg-white hover:text-black transition-all">
// //               Sign In
// //             </Link>
// //           </SignedOut>
// //         </div>

// //         {/* Drawer Footer */}
// //         <div className="px-10 py-12 border-t border-white/5">
// //           <div className="flex flex-col gap-6 opacity-30">
// //             <div className="flex justify-between items-center text-white">
// //               <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Craftsmanship</span>
// //               <span className="text-[9px] uppercase">Premium Organic</span>
// //             </div>
// //             <div className="flex justify-between items-center text-white">
// //               <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Shipping</span>
// //               <span className="text-[9px] uppercase">Worldwide</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* MAIN NAVBAR */}
// //       <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 left-0 z-[100]">
// //         <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          
// //           {/* Left: Hamburger */}
// //           <div className="flex items-center flex-1 lg:w-[40%]">
// //             <button 
// //               className="md:hidden p-2 -ml-2 text-black"
// //               onClick={() => setIsMobileMenuOpen(true)}
// //             >
// //               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// //                 <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
// //               </svg>
// //             </button>
// //             <div className="hidden md:block">
// //               <NavLinks />
// //             </div>
// //           </div>

// //           {/* Center: Logo */}
// //           <Link href="/" className="flex-shrink-0">
// //             <Image
// //               src="/TanzoStoreLogo.svg"
// //               className="h-5 md:h-6 w-auto"
// //               height={100}
// //               width={100}
// //               alt="Tanzo Logo"
// //               priority
// //             />
// //           </Link>

// //           {/* Right: Icons */}
// //           <div className="flex-1 flex items-center justify-end gap-3 md:gap-6 lg:w-[40%]">
// //             <SignedIn>
// //               <Link href="/cart" className="relative p-2">
// //                 <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" className="fill-gray-800">
// //                   <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z" />
// //                 </svg>
// //                 {totalQuantity > 0 && (
// //                   <span className="absolute top-0 right-0 bg-black text-white text-[8px] font-bold h-4 w-4 flex items-center justify-center rounded-full ring-2 ring-white">
// //                     {totalQuantity}
// //                   </span>
// //                 )}
// //               </Link>
// //               <div className="ml-1 border-l border-gray-100 pl-3 md:pl-6">
// //                 <UserButton appearance={{ elements: { userButtonAvatarBox: "h-7 w-7 md:h-8 md:w-8" } }} />
// //               </div>
// //             </SignedIn>
// //             <SignedOut>
// //               <Link href="/auth/sign-up" className="px-5 py-2 bg-black text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-full">
// //                 Join
// //               </Link>
// //             </SignedOut>
// //           </div>
// //         </nav>
// //       </header>
// //     </>
// //   );
// // }

// "use client";
// import { SignedOut, SignedIn, UserButton, useUser } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";

// export default function Navbar() {
//   const { user } = useUser();
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
//           <SignedOut>
//             <Link href="/auth/sign-in" onClick={() => setIsMobileMenuOpen(false)} 
//               className="mt-12 text-[10px] uppercase tracking-[0.5em] font-bold text-white border border-white/20 px-16 py-5 rounded-full hover:bg-white hover:text-black transition-all">
//               Sign In
//             </Link>
//           </SignedOut>
//         </div>

//         <div className="px-10 py-12 border-t border-white/5">
//           <div className="flex flex-col gap-6 opacity-30">
//             <div className="flex justify-between items-center text-white">
//               <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Craftsmanship</span>
//               <span className="text-[9px] uppercase">Premium Organic</span>
//             </div>
//             <div className="flex justify-between items-center text-white">
//               <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Shipping</span>
//               <span className="text-[9px] uppercase">Worldwide</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAVBAR */}
//       <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 left-0 z-[100]">
//         <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          
//           {/* Left: Hamburger (Flex-1 ensures it takes space) */}
//           <div className="flex items-center flex-1 lg:w-[40%]">
//             <button 
//               className="md:hidden p-2 -ml-2 text-black"
//               onClick={() => setIsMobileMenuOpen(true)}
//             >
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                 <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>
//             <div className="hidden md:block">
//               <NavLinks />
//             </div>
//           </div>

//           {/* Center: Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <Image
//               src="/TanzoStoreLogo.svg"
//               className="h-5 md:h-6 w-auto"
//               height={100}
//               width={100}
//               alt="Tanzo Logo"
//               priority
//             />
//           </Link>

//           {/* Right: Icons (Increased padding-left on mobile to push away from logo) */}
//           <div className="flex-1 flex items-center justify-end gap-2 md:gap-6 lg:w-[40%] pl-4">
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
//               <Link href="/auth/sign-up" className="px-4 py-2 bg-black text-white text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold rounded-full">
//                 Join
//               </Link>
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

"use client";
import { SignedOut, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isSignedIn } = useUser();

  // 1. Correct Admin Email Check
  const isAdmin = user?.primaryEmailAddress?.emailAddress === "haripithwa2005@gmail.com";

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const NavLinks = ({ mobile = false }) => (
    <div className={`flex ${mobile ? "flex-col w-full items-center gap-2" : "flex-row gap-6 lg:gap-8 items-center"}`}>
      <Link href="/explore" onClick={() => setIsMobileMenuOpen(false)} 
        className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
        Explore
      </Link>
      <Link href="/men" onClick={() => setIsMobileMenuOpen(false)} 
        className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
        Men
      </Link>
      <Link href="/women" onClick={() => setIsMobileMenuOpen(false)} 
        className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
        Women
      </Link>

      {/* 2. Admin Panel Link added inside NavLinks */}
      {isSignedIn && isAdmin && (
        <Link href="/admin/products" onClick={() => setIsMobileMenuOpen(false)} 
          className={`${mobile ? "text-3xl py-6 border-b border-white/10 text-red-500 font-bold" : "text-[11px] text-red-600 font-bold"} uppercase tracking-[0.4em] hover:opacity-60 transition-all w-full text-center md:border-none`}>
          Admin Panel
        </Link>
      )}

      <SignedIn>
        <Link href="/orders" onClick={() => setIsMobileMenuOpen(false)} 
          className={`${mobile ? "text-3xl py-6 border-b border-white/10" : "text-[11px]"} uppercase tracking-[0.4em] font-light text-white md:text-black hover:opacity-60 transition-all w-full text-center md:border-none`}>
          Orders
        </Link>
      </SignedIn>
    </div>
  );

  return (
    <>
      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 w-full h-screen bg-[#0A0A0A] z-[999] flex flex-col transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex items-center justify-between px-8 py-10">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.6em] font-bold">Navigation</span>
          <button className="p-2 text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-10">
          <NavLinks mobile={true} />
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 left-0 z-[100]">
        <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          <div className="flex items-center flex-1 lg:w-[40%]">
            <button className="md:hidden p-2 -ml-2 text-black" onClick={() => setIsMobileMenuOpen(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="hidden md:block">
              <NavLinks />
            </div>
          </div>

          <Link href="/" className="flex-shrink-0">
            <Image src="/TanzoStoreLogo.svg" className="h-5 md:h-6 w-auto" height={100} width={100} alt="Tanzo Logo" priority />
          </Link>

          <div className="flex-1 flex items-center justify-end gap-3 md:gap-6 lg:w-[40%] pl-4">
            <SignedIn>
              <Link href="/cart" className="relative p-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" className="fill-gray-800">
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z" />
                </svg>
                {totalQuantity > 0 && (
                  <span className="absolute top-0 right-0 bg-black text-white text-[8px] font-bold h-4 w-4 flex items-center justify-center rounded-full ring-2 ring-white">
                    {totalQuantity}
                  </span>
                )}
              </Link>
              <div className="ml-1 border-l border-gray-100 pl-2 md:pl-6">
                <UserButton appearance={{ elements: { userButtonAvatarBox: "h-7 w-7 md:h-8 md:w-8" } }} />
              </div>
            </SignedIn>
            <SignedOut>
              <Link href="/auth/sign-in" className="text-[12px] uppercase tracking-widest font-medium text-gray-600 hover:text-black transition-colors">Sign In</Link>
              <Link href="/auth/sign-up" className="px-6 py-2 bg-black text-white text-[9px] md:text-[12px] uppercase tracking-[0.2em] font-bold rounded-full">Join</Link>
            </SignedOut>
          </div>
        </nav>
      </header>
    </>
  );
}