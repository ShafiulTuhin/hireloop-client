// import {
//   FiBriefcase,
//   FiCalendar,
//   FiDollarSign,
//   FiGlobe,
//   FiMapPin,
// } from "react-icons/fi";

// import { Card, Chip } from "@heroui/react";
// import Image from "next/image";

// const JobDetails = ({ job }) => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#0b1220] p-4 md:p-8">
//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <Card className="border border-white/10 bg-white/5 p-6 backdrop-blur-md">
//           <div className="">
//             <div className="md:flex justify-between">
//               <div className="flex gap-4">
//                 <div className="relative w-14 h-14">
//                   <Image
//                     src={job.companyLogo}
//                     alt={job.companyname}
//                     fill
//                     className="rounded-lg object-cover bg-white/10"
//                   />
//                 </div>
//                 <div>
//                   {" "}
//                   <h1 className="text-3xl font-bold text-white md:text-4xl">
//                     {job.jobTitle}
//                   </h1>
//                   <p className="mt-2 text-gray-400">
//                     Company Name: {job.companyname}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-4 flex flex-wrap gap-2">
//                 <Chip color="primary" variant="flat" className="px-5">
//                   {job.jobCategory}
//                 </Chip>

//                 <Chip color="success" variant="flat" className="px-5">
//                   {job.jobType}
//                 </Chip>

//                 <Chip
//                   color={job.status === "active" ? "success" : "danger"}
//                   variant="flat"
//                   className="px-5"
//                 >
//                   {job.status}
//                 </Chip>

//                 <Chip
//                   color={job.isPubliclyVisible ? "secondary" : "warning"}
//                   variant="flat"
//                   className="px-5"
//                 >
//                   {job.isPubliclyVisible ? "Public" : "Private"}
//                 </Chip>
//               </div>
//             </div>{" "}
//           </div>
//         </Card>

//         {/* Content */}
//         <div className="mt-8 grid gap-8 lg:grid-cols-3">
//           {/* Left Side */}
//           <div className="space-y-6 lg:col-span-2">
//             <Card className="border border-white/10 bg-white/5 p-6">
//               <h2 className="mb-4 text-xl font-semibold text-white">
//                 Responsibilities
//               </h2>

//               <p className="whitespace-pre-line leading-7 text-gray-300">
//                 {job.responsibilities}
//               </p>
//             </Card>

//             <Card className="border border-white/10 bg-white/5 p-6">
//               <h2 className="mb-4 text-xl font-semibold text-white">
//                 Requirements
//               </h2>

//               <p className="whitespace-pre-line leading-7 text-gray-300">
//                 {job.requirements}
//               </p>
//             </Card>

//             <Card className="border border-white/10 bg-white/5 p-6">
//               <h2 className="mb-4 text-xl font-semibold text-white">
//                 Benefits
//               </h2>

//               <p className="whitespace-pre-line leading-7 text-gray-300">
//                 {job.benefits}
//               </p>
//             </Card>
//           </div>

//           {/* Right Side */}
//           <div>
//             <Card className="sticky top-6 border border-white/10 bg-white/5 p-6">
//               <h2 className="text-xl font-semibold text-white">Job Overview</h2>

//               <div className="my-5 h-px bg-white/10" />

//               <div className="space-y-5">
//                 <div className="flex items-start gap-3">
//                   <FiMapPin className="mt-1 text-lg text-indigo-400 font-bold" />
//                   <div>
//                     <p className="text-sm text-gray-500">Location</p>
//                     <p className="text-white">{job.location}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <FiBriefcase className="mt-1 text-lg text-indigo-400 font-bold" />
//                   <div>
//                     <p className="text-sm text-gray-500">Job Type</p>
//                     <p className="capitalize text-white">{job.jobType}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <FiDollarSign className="mt-1 text-lg text-indigo-400 font-bold" />
//                   <div>
//                     <p className="text-sm text-gray-500">Salary Range</p>
//                     <p className="text-white">
//                       {job.currency} {job.minSalary} - {job.maxSalary}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <FiCalendar className="mt-1 text-lg text-indigo-400 font-bold" />
//                   <div>
//                     <p className="text-sm text-gray-500">
//                       Application Deadline
//                     </p>
//                     <p className="text-white">{job.deadline}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <FiGlobe className="mt-1 text-lg text-indigo-400 font-bold" />
//                   <div>
//                     <p className="text-sm text-gray-500">Work Mode</p>
//                     <p className="text-white">
//                       {job.isRemote ? "Remote" : "On-site"}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="my-5 h-px bg-white/10" />

//               <div>
//                 <p className="text-sm text-gray-500">Job ID</p>
//                 <p className="break-all text-sm text-white">{job._id}</p>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobDetails;
import {
  FiArrowLeft,
  FiBriefcase,
  FiCalendar,
  FiDollarSign,
  FiGlobe,
  FiMapPin,
} from "react-icons/fi";

import Link from "next/link";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import ApplyJobForm from "./ApplyJobForm";
import { getUserSession } from "@/lib/core/session";
import { getMyAppliedJobs } from "@/lib/actions/jobs";

const JobDetails = async ({ job }) => {
  const user = await getUserSession();
  const jobs = user ? await getMyAppliedJobs(user.id) : [];
  console.log(jobs);
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#0b1220] p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-gray-300 backdrop-blur-md transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white"
          >
            <FiArrowLeft />
            Back to Jobs
          </Link>
        </div>

        {/* Header */}
        <Card className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              {/* Company Logo */}
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-white p-2 shadow-lg">
                <Image
                  src={job.companyLogo}
                  alt={job.companyname}
                  fill
                  className="rounded-xl object-contain"
                />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-white md:text-4xl">
                  {job.jobTitle}
                </h1>

                <p className="mt-2 text-gray-400">
                  Company Name: {job.companyname}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 md:mt-0">
              <Chip
                color="primary"
                variant="flat"
                className="rounded-full px-4 font-medium"
              >
                {job.jobCategory}
              </Chip>

              <Chip
                color="success"
                variant="flat"
                className="rounded-full px-4 font-medium"
              >
                {job.jobType}
              </Chip>

              <Chip
                color={job.status === "active" ? "success" : "danger"}
                variant="flat"
                className="rounded-full px-4 font-medium"
              >
                {job.status}
              </Chip>

              <Chip
                color={job.isPubliclyVisible ? "secondary" : "warning"}
                variant="flat"
                className="rounded-full px-4 font-medium"
              >
                {job.isPubliclyVisible ? "Public" : "Private"}
              </Chip>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Left Section */}
          <div className="space-y-6 lg:col-span-2">
            {/* Responsibilities */}
            <Card className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-7 w-1 rounded-full bg-violet-500"></div>
                <h2 className="text-2xl font-bold text-white">
                  Responsibilities
                </h2>
              </div>

              <p className="whitespace-pre-line leading-8 text-gray-300">
                {job.responsibilities}
              </p>
            </Card>

            {/* Requirements */}
            <Card className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-7 w-1 rounded-full bg-violet-500"></div>
                <h2 className="text-2xl font-bold text-white">Requirements</h2>
              </div>

              <p className="whitespace-pre-line leading-8 text-gray-300">
                {job.requirements}
              </p>
            </Card>

            {/* Benefits */}
            <Card className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-7 w-1 rounded-full bg-violet-500"></div>
                <h2 className="text-2xl font-bold text-white">Benefits</h2>
              </div>

              <p className="whitespace-pre-line leading-8 text-gray-300">
                {job.benefits}
              </p>
            </Card>
          </div>

          {/* Right Section */}
          <div>
            <Card className="sticky top-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-white">Job Overview</h2>

              {/* Apply Button */}
              {/* <Button className="mt-5 h-12 w-full rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-violet-500/30">
                Apply Now
              </Button> */}
              <ApplyJobForm job={job} jobs={jobs} />
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:border-violet-500/40 hover:bg-violet-500/5">
                  <FiMapPin className="rounded-full bg-violet-500/20 p-2 text-4xl text-violet-400" />

                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-white">{job.location}</p>
                  </div>
                </div>

                {/* Job Type */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:border-violet-500/40 hover:bg-violet-500/5">
                  <FiBriefcase className="rounded-full bg-violet-500/20 p-2 text-4xl text-violet-400" />

                  <div>
                    <p className="text-sm text-gray-500">Job Type</p>
                    <p className="capitalize text-white">{job.jobType}</p>
                  </div>
                </div>

                {/* Salary */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:border-violet-500/40 hover:bg-violet-500/5">
                  <FiDollarSign className="rounded-full bg-violet-500/20 p-2 text-4xl text-violet-400" />

                  <div>
                    <p className="text-sm text-gray-500">Salary Range</p>
                    <p className="text-white">
                      {job.currency} {job.minSalary} - {job.maxSalary}
                    </p>
                  </div>
                </div>

                {/* Deadline */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:border-violet-500/40 hover:bg-violet-500/5">
                  <FiCalendar className="rounded-full bg-violet-500/20 p-2 text-4xl text-violet-400" />

                  <div>
                    <p className="text-sm text-gray-500">
                      Application Deadline
                    </p>
                    <p className="text-white">{job.deadline}</p>
                  </div>
                </div>

                {/* Work Mode */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:border-violet-500/40 hover:bg-violet-500/5">
                  <FiGlobe className="rounded-full bg-violet-500/20 p-2 text-4xl text-violet-400" />

                  <div>
                    <p className="text-sm text-gray-500">Work Mode</p>
                    <p className="text-white">
                      {job.isRemote ? "Remote" : "On-site"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

              {/* Job ID */}
              <div className="rounded-xl bg-black/30 p-4">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Job ID
                </p>

                <p className="mt-2 break-all font-mono text-sm text-gray-300">
                  {job._id}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
