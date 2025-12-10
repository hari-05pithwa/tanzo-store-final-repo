import { CartProvider } from "@/context/CardContext";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`bg-[#fafafa] text-black`}>
          <main>
            <CartProvider>{children}</CartProvider>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
