"use client";

import { useState } from "react";
import { Button, Link } from "@heroui/react";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a] py-5">
      <div className="md:px-10 px-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md shadow-lg">
          {/* Logo */}
          <Link href="/" className="p-0">
            <Image src={Logo} alt="Logo" width={130} height={40} priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="#" className="text-sm text-gray-300 hover:text-white">
              Browse Jobs
            </Link>

            <Link href="#" className="text-sm text-gray-300 hover:text-white">
              Company
            </Link>

            <Link href="#" className="text-sm text-gray-300 hover:text-white">
              Pricing
            </Link>

            <div className="h-5 w-px bg-white/20" />

            <Link
              href="#"
              className="text-sm font-medium text-violet-400 hover:text-violet-300"
            >
              Sign In
            </Link>

            <Button
              radius="lg"
              className="
                bg-gradient-to-r
                from-violet-600
                to-indigo-500
                px-6
                text-white
                font-medium
              "
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md md:hidden">
            <div className="flex flex-col p-5">
              <Link href="#" className="py-3 text-gray-300 hover:text-white">
                Browse Jobs
              </Link>

              <Link href="#" className="py-3 text-gray-300 hover:text-white">
                Company
              </Link>

              <Link href="#" className="py-3 text-gray-300 hover:text-white">
                Pricing
              </Link>

              <div className="my-4 h-px bg-white/10" />

              <Link href="#" className="py-3 font-medium text-violet-400">
                Sign In
              </Link>

              <Button
                radius="lg"
                className="mt-3 bg-gradient-to-r from-violet-600 to-indigo-500 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
