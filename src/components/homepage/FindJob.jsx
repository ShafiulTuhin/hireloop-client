import { MapPin, Search } from "lucide-react";
import React from "react";
import { FaToolbox } from "react-icons/fa";

const FindJob = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-[#0b1220] lg:px-0 px-4">
      <div className="container mx-auto text-white py-30 ">
        <h2 className="flex items-center justify-center gap-2 max-w-3xl mx-auto py-3 text-gray-300">
          <span className="h-[1px] w-6 bg-gray-500"></span>

          <span className="flex items-center gap-2 bg-gray-900 px-4 py-1 rounded-full">
            <FaToolbox color="#FFFF00" />
            <span>
              <span className="font-bold">50,000+</span> new jobs this month
            </span>
          </span>

          <span className="h-[1px] w-6 bg-gray-500"></span>
        </h2>

        <h2 className="md:text-4xl text-2xl font-bold mt-5 text-center">
          Find Your Dream Job Today
        </h2>
        <p className="text-gray-500 text-center mt-3">
          HireLoop connects top talent with world-class companies. Browse
          thousands of <br /> curated opportunities and land your next role —
          faster.
        </p>

        <div className="flex justify-center mt-6 px-4">
          <div className="flex w-full max-w-3xl items-center bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
            {/* Left: Job input */}
            <div className="flex items-center gap-2 px-4 flex-1">
              <Search className="h-5 w-5 text-gray-400" />

              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
              />
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-700" />

            {/* Middle: Location */}
            <div className="flex items-center gap-2 px-4 flex-1">
              <MapPin className="h-5 w-5 text-gray-400" />

              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
              />
            </div>

            {/* Search button */}
            <button className="bg-gradient-to-r from-violet-600 to-indigo-500 hover:bg-blue-500 px-5 py-4 flex items-center justify-center cursor-pointer">
              <Search className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 mt-6 text-gray-500">
          <h2 className="font-bold">Trending Position :</h2>
          <p className="bg-gray-800 rounded-full font-bold py-2 px-4">
            Product Manager
          </p>
          <p className="bg-gray-800 rounded-full font-bold py-2 px-4">
            AI Engineer
          </p>
          <p className="bg-gray-800 rounded-full font-bold py-2 px-4">
            Dev-ops Engineer
          </p>
        </div>
      </div>
    </div>
  );
};

export default FindJob;
