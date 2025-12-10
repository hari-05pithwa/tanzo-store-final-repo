"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white fixed top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        
        {/* Logo */}
        <div className="text-xl font-semibold">
          <Link href="/">TANZO</Link>
        </div>

        {/* Menu Links */}
        <div className="flex gap-8 text-xl font-medium">
          <Link href="#men" className="hover:text-gray-600">Men</Link>
          <Link href="#women" className="hover:text-gray-600">Women</Link>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <Link
            href="/cart"
            className="px-4 py-1 border border-black rounded-md hover:bg-black hover:text-white transition"
          >
            Cart
          </Link>
          <Link
            href="/login"
            className="px-4 py-1 border border-black rounded-md hover:bg-black hover:text-white transition"
          >
            Login
          </Link>
        </div>

      </nav>
    </header>
  );
}
