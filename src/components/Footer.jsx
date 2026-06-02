"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className=" px-15 py-16">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="max-w-md">
            <Link href="/" className="p-0">
              <Image src={Logo} alt="Logo" width={130} height={40} priority />
            </Link>

            <p className="mt-4 leading-relaxed">
              HireLoop is a modern job-seeking platform that helps professionals
              discover opportunities, connect with employers, and manage their
              career journey with ease.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {/* Products */}
            <div>
              <h3 className="mb-5 text-lg font-semibold text-blue-500">
                Products
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Job Search
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-white transition">
                    Resume Builder
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-white transition">
                    Career Dashboard
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-white transition">
                    Job Alerts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="mb-5 text-lg font-semibold text-blue-500">
                Navigation
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/jobs" className="hover:text-white transition">
                    Jobs
                  </Link>
                </li>

                <li>
                  <Link
                    href="/companies"
                    className="hover:text-white transition"
                  >
                    Companies
                  </Link>
                </li>

                <li>
                  <Link href="/pricing" className="hover:text-white transition">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-5 text-lg font-semibold text-blue-500">
                Resources
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-white transition">
                    Help Center
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-white transition">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 hover:border-violet-500 hover:text-violet-500 transition"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 hover:border-violet-500 hover:text-violet-500 transition"
            >
              <FaLinkedinIn />
            </Link>

            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 hover:border-violet-500 hover:text-violet-500 transition"
            >
              <FaGithub />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} HireLoop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
