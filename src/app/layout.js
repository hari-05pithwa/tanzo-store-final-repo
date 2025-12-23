// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { CartProvider } from "@/context/CartContext";
// import { ClerkProvider } from "@clerk/nextjs";
// import { Lexend } from "next/font/google";
// import { Toaster } from "sonner";

// const lexend = Lexend({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });

// export const metadata = {
//   title: "Tanzo",
//   description: "Premium T-shirts for everyone.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={`${lexend.className} bg-[#fafafa] text-black`}>
//           {/* Wrap everything in CartProvider so Navbar can access cart count */}
//           <CartProvider>
//             {/* <Toaster position="top-right" richColors /> */}
//             <Toaster
//               position="bottom-right"
//               expand={false} // Keeps them stacked nicely
//               richColors
//               closeButton // Adds an 'x' to close manually
//             />
//             <Navbar />
//             <main>{children}</main>
//             <Footer />
//           </CartProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }







//og
// "use client";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { CartProvider } from "@/context/CartContext";
// import { ClerkProvider } from "@clerk/nextjs";
// import { Lexend } from "next/font/google";
// import { Toaster } from "sonner";
// import { usePathname } from "next/navigation";

// const lexend = Lexend({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   const isAdminPage = pathname.startsWith("/admin");

//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={`${lexend.className} bg-[#fafafa] text-black`}>
//           <CartProvider>
//             <Toaster position="bottom-right" expand={false} richColors closeButton />
//             <Navbar />
//             <main>{children}</main>
//             {/* Footer is hidden on all admin pages */}
//             {!isAdminPage && <Footer />}
//           </CartProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }







//og

// "use client";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { CartProvider } from "@/context/CartContext";
// import { ClerkProvider } from "@clerk/nextjs";
// import { Lexend } from "next/font/google";
// import { Toaster } from "sonner";
// import { usePathname } from "next/navigation";
// import NextTopLoader from 'nextjs-toploader'; // Import the loader

// const lexend = Lexend({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   const isAdminPage = pathname.startsWith("/admin");

//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={`${lexend.className} bg-[#fafafa] text-black`}>
//           {/* This loader provides instant feedback when a link is clicked.
//               We've disabled the spinner to maintain the "Archive" aesthetic.
//           */}
//           <NextTopLoader 
//             color="#000"
//             initialPosition={0.08}
//             crawlSpeed={200}
//             height={2}
//             crawl={true}
//             showSpinner={false}
//             easing="ease"
//             speed={200}
//             shadow="0 0 10px #000,0 0 5px #000"
//           />
//           <CartProvider>
//             <Toaster position="bottom-right" expand={false} richColors closeButton />
//             <Navbar />
//             <main>{children}</main>
//             {!isAdminPage && <Footer />}
//           </CartProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }




"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "@/context/CartContext";
import { ClerkProvider } from "@clerk/nextjs";
import { Lexend } from "next/font/google";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";
import NextTopLoader from 'nextjs-toploader';
import { AnimatePresence } from "framer-motion"; // Added this

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${lexend.className} bg-[#fafafa] text-black`}>
          <NextTopLoader 
            color="#000"
            initialPosition={0.08}
            crawlSpeed={200}
            height={2}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #000,0 0 5px #000"
          />
          <CartProvider>
            <Toaster position="bottom-right" expand={false} richColors closeButton />
            <Navbar />
            
            {/* AnimatePresence allows PageTransition to play exit animations.
                The 'key' on main is CRITICAL: it tells React/Framer that the 
                page has changed so it should restart animations.
            */}
            <AnimatePresence mode="wait">
              <main key={pathname}>
                {children}
              </main>
            </AnimatePresence>

            {!isAdminPage && <Footer />}
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}