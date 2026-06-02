"use client";

import Image from "next/image";
import globe from "@/assets/globe.webp";
import { Briefcase, Building2, Users, Star } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "50K", label: "Active Jobs" },
  { icon: Building2, value: "12K", label: "Companies" },
  { icon: Users, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
];

export default function Banner() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="">
        {/* Globe */}
        <div className="relative flex justify-center">
          <Image
            src={globe}
            alt="Global Jobs"
            priority
            className="w-full  object-cover opacity-90"
          />

          {/* Text overlay */}
          <div className="absolute left-1/2 top-[50%] w-full -translate-x-1/2 -translate-y-1/2 px-6 text-center">
            <h1 className="mx-auto max-w-6xl text-2xl font-medium leading-relaxed text-white md:text-6xl">
              Assisting over{" "}
              <span className="font-semibold text-white">
                15,000 job seekers
              </span>
              <br />
              find their dream positions.
            </h1>
          </div>
        </div>

        {/* ⭐ Stats (mobile-safe, no absolute positioning) */}
        <div className="relative z-10 mt-[-200px] pb-12 px-2">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 container mx-auto">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    p-6 md:p-10
                    backdrop-blur-xl
                    transition
                    hover:border-white/20
                    hover:bg-white/10
                  "
                >
                  <Icon className="h-6 w-6 text-white" />

                  <h3 className="mt-10 text-4xl md:text-5xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-gray-400">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
