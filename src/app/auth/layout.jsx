// import { CartProvider } from "@/context/CartContext";
// import { ClerkProvider } from "@clerk/nextjs";

// export default function RootLayout({ children }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={`bg-[#fafafa] text-black`}>
//           <main>
//             <CartProvider>{children}</CartProvider>
//           </main>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import { CartProvider } from "@/context/CartContext";
import { ClerkProvider } from "@clerk/nextjs";
import { Montserrat } from "next/font/google"; // Recommended for the premium look

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: "blockButton",
          shimmer: true,
        },
        variables: {
          colorPrimary: "#000000",
          colorText: "#1a1a1a",
          colorBackground: "#ffffff",
          borderRadius: "12px",
        },
        elements: {
          card: "shadow-none border border-gray-100",
          formButtonPrimary: 
            "bg-black hover:bg-gray-800 text-[10px] font-bold uppercase tracking-[0.2em] transition-all py-3",
          footerActionLink: "text-black hover:text-gray-600 font-medium",
          identityPreviewText: "text-gray-500",
          formFieldLabel: "text-[11px] font-bold uppercase tracking-widest text-gray-900",
          formFieldInput: "rounded-lg border-gray-200 focus:ring-black focus:border-black",
        },
      }}
    >
      <html lang="en">
        <body className={`${montserrat.className} bg-[#FAFAFA] text-black antialiased`}>
          <main>
            <CartProvider>{children}</CartProvider>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}