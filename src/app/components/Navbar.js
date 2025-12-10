"use client";
import { SignedOut, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { user } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 left-0 z-50">
      <nav className="flex items-center justify-between px-20 py-6">
        <div className="flex items-center gap-6 text-gray-800 font-light w-[40%]">
          <Link href="/explore" className="hover:text-gray-700">
            Explore
          </Link>
          <Link href="/men" className="hover:text-gray-700">
            Men
          </Link>
          <Link href="/women" className="hover:text-gray-700">
            Women
          </Link>

          {/* Show Admin Link only for admin users */}
          {isAdmin && (
            <Link
              href="/admin"
              className="hover:text-gray-600 text-red-600 font-semibold"
            >
              Admin Panel
            </Link>
          )}
        </div>

        <Link href="/" className="w-[20%] flex items-center justify-center">
          <Image
            src={"/TanzoStoreLogo.svg"}
            className="h-5 w-auto"
            height={400}
            width={400}
            alt="logo"
          />
        </Link>

        {/* Right Side */}
        <div className="gap-6 w-[40%] flex items-center justify-end">
          <SignedIn>
            {/* Cart */}
            <Link
              href="/cart"
              className="rounded-full transition hover:scale-95 translate-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#222"
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z" />
              </svg>
            </Link>

            {/* User Button */}
            <div className="scale-125 flex items-center justify-center">
              <UserButton />
            </div>
          </SignedIn>

          <SignedOut>
            <Link href="/auth/sign-up">
              <button className="cursor-pointer px-6 py-2 border border-gray-950 text-gray-950 hover:scale-95 translate-all duration-300">
                Signup
              </button>
            </Link>
            <Link href="/auth/sign-in">
              <button className="cursor-pointer px-6 py-2 bg-gray-950 text-white hover:scale-95 translate-all duration-300">
                Signin
              </button>
            </Link>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}
