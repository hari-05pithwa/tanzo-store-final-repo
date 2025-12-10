"use client";

import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="text-xl font-semibold">
          <Link href="/">TANZO</Link>
        </div>

        {/* Menu Links */}
        <div className="flex gap-8 text-xl font-medium">
          <Link href="/men" className="hover:text-gray-600">
            Men
          </Link>
          <Link href="/women" className="hover:text-gray-600">
            Women
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <SignedIn>
            <Link
              href="/cart"
              className="px-4 py-1 border border-black rounded-md hover:bg-black hover:text-white transition"
            >
              Cart
            </Link>
            <div className="scale-125 flex items-center justify-center">
            <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <Link
              href="https://harmless-treefrog-61.accounts.dev/sign-up"
              className="px-4 py-1 border border-black rounded-md hover:bg-black hover:text-white transition"
            >
              Signin
            </Link>
            <Link
              href="https://harmless-treefrog-61.accounts.dev/sign-in"
              className="px-4 py-1 border border-black rounded-md hover:bg-black hover:text-white transition"
            >
              Signup
            </Link>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}
