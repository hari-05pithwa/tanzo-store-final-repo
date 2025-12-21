import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "@/context/CartContext";
import { ClerkProvider } from "@clerk/nextjs";
import { Lexend } from "next/font/google";
import { Toaster } from "sonner";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Tanzo",
  description: "Premium T-shirts for everyone.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${lexend.className} bg-[#fafafa] text-black`}>
          {/* Wrap everything in CartProvider so Navbar can access cart count */}
          <CartProvider>
            {/* <Toaster position="top-right" richColors /> */}
            <Toaster
              position="bottom-right"
              expand={false} // Keeps them stacked nicely
              richColors
              closeButton // Adds an 'x' to close manually
            />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}