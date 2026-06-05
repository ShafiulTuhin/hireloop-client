import {
  FiBriefcase,
  FiCalendar,
  FiDollarSign,
  FiGlobe,
  FiMapPin,
} from "react-icons/fi";

import { Card, Chip } from "@heroui/react";
import Image from "next/image";

const JobDetails = ({ job }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#0b1220] p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Card className="border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <div className="">
            <div className="md:flex justify-between">
              <div className="flex gap-4">
                <div className="relative w-14 h-14">
                  <Image
                    src={job.companyLogo}
                    alt={job.companyname}
                    fill
                    className="rounded-lg object-cover bg-white/10"
                  />
                </div>
                <div>
                  {" "}
                  <h1 className="text-3xl font-bold text-white md:text-4xl">
                    {job.jobTitle}
                  </h1>
                  <p className="mt-2 text-gray-400">
                    Company Name: {job.companyname}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Chip color="primary" variant="flat" className="px-5">
                  {job.jobCategory}
                </Chip>

                <Chip color="success" variant="flat" className="px-5">
                  {job.jobType}
                </Chip>

                <Chip
                  color={job.status === "active" ? "success" : "danger"}
                  variant="flat"
                  className="px-5"
                >
                  {job.status}
                </Chip>

                <Chip
                  color={job.isPubliclyVisible ? "secondary" : "warning"}
                  variant="flat"
                  className="px-5"
                >
                  {job.isPubliclyVisible ? "Public" : "Private"}
                </Chip>
              </div>
            </div>{" "}
          </div>
        </Card>

        {/* Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Left Side */}
          <div className="space-y-6 lg:col-span-2">
            <Card className="border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Responsibilities
              </h2>

              <p className="whitespace-pre-line leading-7 text-gray-300">
                {job.responsibilities}
              </p>
            </Card>

            <Card className="border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Requirements
              </h2>

              <p className="whitespace-pre-line leading-7 text-gray-300">
                {job.requirements}
              </p>
            </Card>

            <Card className="border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Benefits
              </h2>

              <p className="whitespace-pre-line leading-7 text-gray-300">
                {job.benefits}
              </p>
            </Card>
          </div>

          {/* Right Side */}
          <div>
            <Card className="sticky top-6 border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Job Overview</h2>

              <div className="my-5 h-px bg-white/10" />

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <FiMapPin className="mt-1 text-lg text-indigo-400 font-bold" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-white">{job.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiBriefcase className="mt-1 text-lg text-indigo-400 font-bold" />
                  <div>
                    <p className="text-sm text-gray-500">Job Type</p>
                    <p className="capitalize text-white">{job.jobType}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiDollarSign className="mt-1 text-lg text-indigo-400 font-bold" />
                  <div>
                    <p className="text-sm text-gray-500">Salary Range</p>
                    <p className="text-white">
                      {job.currency} {job.minSalary} - {job.maxSalary}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiCalendar className="mt-1 text-lg text-indigo-400 font-bold" />
                  <div>
                    <p className="text-sm text-gray-500">
                      Application Deadline
                    </p>
                    <p className="text-white">{job.deadline}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiGlobe className="mt-1 text-lg text-indigo-400 font-bold" />
                  <div>
                    <p className="text-sm text-gray-500">Work Mode</p>
                    <p className="text-white">
                      {job.isRemote ? "Remote" : "On-site"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-5 h-px bg-white/10" />

              <div>
                <p className="text-sm text-gray-500">Job ID</p>
                <p className="break-all text-sm text-white">{job._id}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
