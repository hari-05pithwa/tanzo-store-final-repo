import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "@/context/CardContext";
import { ClerkProvider } from "@clerk/nextjs";
import { Lexend } from "next/font/google";

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
