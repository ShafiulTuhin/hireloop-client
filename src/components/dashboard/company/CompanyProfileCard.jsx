import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const CompanyProfileCard = ({ company }) => {
  // ✅ If no data
  if (!company || company.length === 0) {
    return (
      <div className="w-full lg:w-[60%] mx-auto bg-gradient-to-b from-[#0b1220] via-gray-900 to-black border border-zinc-900 rounded-xl p-6 shadow-2xl text-white">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 border-b border-zinc-800 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl bg-zinc-800 animate-pulse" />

            <div>
              <h1 className="text-2xl font-semibold text-zinc-500">
                No Company Found
              </h1>

              <span className="inline-flex mt-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-950/40 text-amber-400 border border-amber-900">
                Profile Not Created
              </span>
            </div>
          </div>

          <Link href="/dashboard/recruiter/company/new">
            <Button className="bg-gradient-to-r from-violet-600 to-indigo-500 text-black font-semibold">
              Create Company
            </Button>
          </Link>
        </div>

        <div className="py-6 border-b border-zinc-800">
          <h2 className="text-lg font-medium mb-3">About Company</h2>
          <p className="text-zinc-500">
            You haven't created a company profile yet. Create your company
            profile and submit it for admin approval before posting jobs.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {company.map((data) => {
        const {
          _id,
          companyname,
          industry,
          logo,
          description,
          status,
          employeeRange,
          location,
        } = data;

        return (
          <div
            key={_id}
            className="w-full lg:w-[60%] mx-auto bg-gradient-to-b from-[#0b1220] via-gray-900 to-black border border-zinc-900 rounded-xl p-4 sm:p-6 shadow-2xl text-white mb-6"
          >
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 border-b border-zinc-800 pb-6">
              {/* Logo + Name */}
              <div className="flex items-center gap-4">
                <Image
                  src={logo || "/placeholder-company.png"}
                  alt={companyname || "Company"}
                  width={80}
                  height={80}
                  className="rounded-xl object-cover border border-zinc-800"
                />

                <div>
                  <h1 className="text-xl sm:text-2xl font-semibold">
                    {companyname}
                  </h1>

                  <div className="mt-2">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                        status === "active"
                          ? "bg-emerald-950/40 text-emerald-400 border-emerald-900"
                          : "bg-amber-950/40 text-amber-400 border-amber-900"
                      }`}
                    >
                      {status === "active" ? "Active" : "Pending Approval"}
                    </span>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/dashboard/recruiter/company/edit">
                  <Button
                    className="bg-zinc-900 border border-zinc-800 text-zinc-200 w-full sm:w-auto"
                    size="sm"
                  >
                    Edit Profile
                  </Button>
                </Link>

                <Button
                  size="sm"
                  className="bg-red-950/40 border border-red-900 text-red-400 w-full sm:w-auto"
                >
                  Delete Profile
                </Button>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="py-6 border-b border-zinc-800">
              <h2 className="text-lg font-medium mb-3">About Company</h2>
              <p className="text-zinc-400 leading-relaxed">
                {description || "No company description available."}
              </p>
            </div>

            {/* INFO GRID */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-zinc-500 text-sm">Industry</p>
                <p className="text-white font-medium mt-1">{industry || "-"}</p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">Location</p>
                <p className="text-white font-medium mt-1">{location || "-"}</p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">Employee Range</p>
                <p className="text-white font-medium mt-1">
                  {employeeRange || "-"}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CompanyProfileCard;
