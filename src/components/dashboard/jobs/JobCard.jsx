// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FiArrowRight } from "react-icons/fi";

// const JobCard = ({ jobs }) => {
//   return (
//     <div className="w-full bg-gradient-to-b from-black via-gray-900 to-[#0b1220] py-10 px-4">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {jobs?.map((job, index) => (
//           <div
//             key={index}
//             className="bg-gradient-to-t from-black via-gray-900 to-[#0b1220] border border-zinc-800 rounded-2xl p-5 shadow-md hover:shadow-lg hover:border-zinc-700 transition duration-300 flex flex-col justify-between space-y-5"
//           >
//             {/* Top Section */}
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <Image
//                   src={job.companyLogo || "/fallback-logo.png"}
//                   alt={job.companyname || "Company"}
//                   width={100}
//                   height={100}
//                   className="rounded-lg"
//                 />
//                 <div>
//                   <h2 className="text-white font-semibold text-lg">
//                     {job.companyname}
//                   </h2>
//                   <p className="text-zinc-400 text-sm">{job.jobCategory}</p>
//                 </div>
//               </div>

//               <h3 className="text-xl font-bold text-white mb-2">
//                 {job.jobTitle}
//               </h3>

//               <p className="text-zinc-400 text-sm mb-4">Type: {job.jobType}</p>

//               <div className="text-zinc-300 text-sm space-y-1">
//                 <p>
//                   💰 Salary: ${job.minSalary} - ${job.maxSalary}
//                 </p>
//                 <p>⏳ Deadline: {job.deadline}</p>
//               </div>
//             </div>

//             {/* Button */}
//             <Link href={`/jobs/${job._id}`}>
//               {" "}
//               <button className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-500 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-medium transition cursor-pointer">
//                 Apply Now <FiArrowRight />
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobCard;
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineBriefcase, HiOutlineCurrencyDollar } from "react-icons/hi";
import { BsCalendarEvent } from "react-icons/bs";

const JobCard = ({ jobs }) => {
  return (
    <div className="w-full bg-gradient-to-b from-black via-gray-950 to-[#0b1220] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {jobs?.map((job, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-white/5 backdrop-blur-lg p-6 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Company */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 flex items-center justify-center rounded-2xl bg-white p-2 shadow-lg">
                    <Image
                      src={job.companyLogo || "/fallback-logo.png"}
                      alt={job.companyname || "Company"}
                      width={60}
                      height={60}
                      className="object-contain h-[60px] w-[60px]"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {job.companyname}
                    </h2>

                    <span className="inline-block mt-2 rounded-full bg-violet-600/20 text-violet-300 px-3 py-1 text-xs font-medium">
                      {job.jobCategory}
                    </span>
                  </div>
                </div>

                {/* Job Title */}
                <h3 className="mt-6 text-2xl font-bold text-white leading-snug">
                  {job.jobTitle}
                </h3>

                {/* Job Type */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-2 text-indigo-300 text-sm">
                  <HiOutlineBriefcase />
                  {job.jobType}
                </div>

                {/* Info */}
                <div className="mt-6 space-y-4 text-zinc-300">
                  <div className="flex items-center gap-3">
                    <HiOutlineCurrencyDollar className="text-green-400 text-lg" />
                    <span>
                      ${job.minSalary} - ${job.maxSalary}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <BsCalendarEvent className="text-red-400 text-lg" />
                    <span>{job.deadline}</span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Link href={`/jobs/${job._id}`} className="mt-8">
                <button className="w-full cursor-pointer rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-violet-500/30 flex items-center justify-center gap-2">
                  Apply Now
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
