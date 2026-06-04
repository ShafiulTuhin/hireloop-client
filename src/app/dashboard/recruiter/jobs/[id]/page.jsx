// import { getSingleJob } from "@/lib/actions/jobs";
// import React from "react";

// const RecruiterJobDetailsPage = async ({ params }) => {
//   const { id } = await params;
//   const job = await getSingleJob(id);
//   console.log(job);

//   return (
//     <div>
//       <h2 className="text-white">Job details page</h2>
//     </div>
//   );
// };

// export default RecruiterJobDetailsPage;
import { getSingleJob } from "@/lib/actions/jobs";
import { Button, Card, Chip } from "@heroui/react";
import {
  FiBriefcase,
  FiCalendar,
  FiDollarSign,
  FiEdit,
  FiGlobe,
  FiMapPin,
} from "react-icons/fi";

const RecruiterJobDetailsPage = async ({ params }) => {
  const { id } = await params;

  const job = await getSingleJob(id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#0b1220] p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Card className="border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white md:text-4xl">
                {job.jobTitle}
              </h1>

              <p className="mt-2 text-gray-400">Company ID: {job.companyId}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Chip color="primary" variant="flat">
                  {job.jobCategory}
                </Chip>

                <Chip color="success" variant="flat">
                  {job.jobType}
                </Chip>

                <Chip
                  color={job.status === "active" ? "success" : "danger"}
                  variant="flat"
                >
                  {job.status}
                </Chip>

                <Chip
                  color={job.isPubliclyVisible ? "secondary" : "warning"}
                  variant="flat"
                >
                  {job.isPubliclyVisible ? "Public" : "Private"}
                </Chip>
              </div>
            </div>

            <Button
              color="primary"
              startContent={<FiEdit />}
              className="font-medium"
            >
              Edit Job
            </Button>
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
                  <FiMapPin className="mt-1 text-lg text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-white">{job.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiBriefcase className="mt-1 text-lg text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-500">Job Type</p>
                    <p className="capitalize text-white">{job.jobType}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiDollarSign className="mt-1 text-lg text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-500">Salary Range</p>
                    <p className="text-white">
                      {job.currency} {job.minSalary} - {job.maxSalary}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiCalendar className="mt-1 text-lg text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-500">
                      Application Deadline
                    </p>
                    <p className="text-white">{job.deadline}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiGlobe className="mt-1 text-lg text-cyan-400" />
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

export default RecruiterJobDetailsPage;
