import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "@/context/CardContext";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Tanzo",
  description: "Premium T-shirts for everyone.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-[#fafafa] text-black">
          <Navbar />
          <main>
            <CartProvider>{children}</CartProvider>
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
