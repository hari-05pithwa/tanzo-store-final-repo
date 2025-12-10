import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Tanzo",
  description: "Premium T-shirts for everyone.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fafafa] text-black">
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
