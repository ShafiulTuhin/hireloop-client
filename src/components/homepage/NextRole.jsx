"use client";

import Image from "next/image";
import globe from "@/assets/cta-bg.png";
import { Briefcase, Building2, Users, Star } from "lucide-react";
import { Button } from "@heroui/react";

export default function NextRole() {
  return (
    <section className="bg-black overflow-hidden pt-20">
      <div className="">
        {/* Globe */}
        <div className="relative flex justify-center">
          <Image
            src={globe}
            alt="Global Jobs"
            priority
            className="w-full   object-cover opacity-90"
          />

          {/* Text overlay */}
          <div className="absolute left-1/2 top-[40%] w-full -translate-x-1/2 -translate-y-1/2 px-6 text-center">
            <h1 className="mx-auto max-w-6xl text-2xl font-medium leading-relaxed text-white md:text-6xl">
              Your next role is
              <span className="font-semibold text-white"></span>
              <br />
              already looking for you
            </h1>
            <p>
              Build a profile in three minutes. The matches start arriving
              tomorrow morning.
            </p>
            <div className="space-x-5">
              <Button variant="outline" className="bg-white rounded-lg py-3">
                Create a free account
              </Button>
              <Button variant="outline" className="text-white rounded-lg">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
