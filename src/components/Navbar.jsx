// "use client";
// import { useState } from "react";
// import { Link, Button } from "@heroui/react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
//       <header className="mx-auto flex h-16 items-center justify-between px-6">
//         <div className="flex items-center gap-4">
//           <button
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//             aria-expanded={isMenuOpen}
//           >
//             <span className="sr-only">Menu</span>
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//           <div className="flex items-center gap-3">
//             <p className="font-bold">Logo</p>
//           </div>
//         </div>
//         <ul className="hidden items-center gap-4 md:flex">
//           <li>
//             <Link href="#">Features</Link>
//           </li>
//           <li>
//             <Link
//               href="#"
//               className="font-medium text-accent"
//               aria-current="page"
//             >
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link href="#">Pricing</Link>
//           </li>
//         </ul>
//         <div className="hidden items-center gap-4 md:flex">
//           <Link href="#">Login</Link>
//           <Button>Sign Up</Button>
//         </div>
//       </header>
//       {isMenuOpen && (
//         <div className="border-t border-separator md:hidden">
//           <ul className="flex flex-col gap-2 p-4">
//             <li>
//               <Link href="#" className="block py-2">
//                 Features
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="block py-2 font-medium text-accent">
//                 Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="block py-2">
//                 Pricing
//               </Link>
//             </li>
//             <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
//               <Link href="#" className="block py-2">
//                 Login
//               </Link>
//               <Button className="w-full">Sign Up</Button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
"use client";

import { useState } from "react";
import { Button, Link } from "@heroui/react";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a] px-4 py-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md shadow-lg">
          {/* Logo */}
          <Link href="/" className="p-0">
            <Image
              src={Logo} // replace with your logo
              alt="Logo"
              width={130}
              height={40}
              priority
            />
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
