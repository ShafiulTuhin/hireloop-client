"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FiArrowLeft, FiHome, FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-[#0b1220] flex items-center justify-center px-4">
      {/* Background Glow */}
      <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-xl"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-10 text-center">
          {/* Icon */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10"
          >
            <FiSearch className="text-5xl text-cyan-400" />
          </motion.div>

          {/* 404 */}
          <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-7xl font-black text-transparent">
            404
          </h1>

          <h2 className="mt-3 text-3xl font-bold text-white">Page Not Found</h2>

          <p className="mt-4 leading-7 text-gray-400">
            The page you're looking for doesn't exist or may have been moved.
            <br />
            Try heading back to the homepage or return to the previous page.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              as={Link}
              href="/"
              color="primary"
              size="lg"
              startContent={<FiHome />}
              className="font-semibold"
            >
              Back to Home
            </Button>

            <Button
              variant="bordered"
              size="lg"
              startContent={<FiArrowLeft />}
              className="border-white/20 text-white hover:bg-white/10"
              onPress={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          HireLoop • The page you're looking for couldn't be found.
        </p>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
