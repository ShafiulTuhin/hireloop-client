import Image from "next/image";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const MyCompanies = ({ company, appliedJobs = [] }) => {
  const hasCompany = company && company.companyname;

  return (
    <div className="border border-white/10 bg-gray-800/60 backdrop-blur-md p-6 rounded-xl hover:shadow-lg transition-all duration-300">
      {/* Header stays ALWAYS */}
      <h2 className="text-2xl font-bold text-white mb-5 border-b border-white/10 pb-3">
        My Companies
      </h2>

      {/* Conditional content ONLY */}
      {!hasCompany ? (
        <div className="text-center py-10">
          <h2 className="text-lg font-semibold text-gray-300">
            No company found
          </h2>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          {/* Left Side */}
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
              <Image
                src={company.logo}
                alt={company.companyname}
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg">
                {company.companyname}
              </h2>

              <p className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                {company.industry}
                <FaLocationArrow className="text-violet-400 text-xs" />
                {company.location}
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="text-right">
            <h2 className="text-white font-bold text-2xl">
              {appliedJobs.length}
            </h2>
            <p className="text-gray-400 font-medium text-sm">ACTIVE JOBS</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCompanies;
