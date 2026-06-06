import Image from "next/image";
import React from "react";
import { LocationArrowFill } from "@gravity-ui/icons";
import { LocaleRouteNormalizer } from "next/dist/server/normalizers/locale-route-normalizer";
import { FaLocationArrow } from "react-icons/fa";

const MyCompanies = ({ company, appliedJobs = { appliedJobs } }) => {
  return (
    <div className="border-b border-black bg-gray-800 p-5 rounded-t-lg">
      <h2 className="text-3xl font-bold text-white mb-5 border-b border-zinc-700 pb-3">
        My Companies
      </h2>
      <div className="flex justify-between items-center ">
        {" "}
        <div className="flex gap-2 items-center text-[#fffgha]">
          <div className="w-16 h-16 flex items-center justify-center">
            <Image
              src={company.logo}
              alt={company.companyname}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="text-white font-bold text-[20px]">
              {company.companyname}
            </h2>
            <h2 className="flex items-center gap-1 text-[#727272] font-semibold">
              {company.industry} <FaLocationArrow /> {company.location}
            </h2>
          </div>
        </div>
        <div>
          <h2 className="text-end text-white font-bold text-2xl">
            {appliedJobs.length}
          </h2>
          <h2 className="text-[#727272] font-semibold">ACTIVE JOBS</h2>
        </div>
      </div>
    </div>
  );
};

export default MyCompanies;
