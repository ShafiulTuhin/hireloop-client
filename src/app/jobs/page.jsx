import JobCard from "@/components/dashboard/jobs/JobCard";
import SearchAndFilterJobs from "@/components/dashboard/jobs/SearchAndFilterJobs";
import { getAllJobs } from "@/lib/actions/jobs";
import React from "react";

// const AllJobsPage = async ({ searchParams }) => {
//   const jobs = await getAllJobs(searchParams);
//   // ✅ Extract unique categories
//   const categories = [...new Set(jobs?.map((job) => job.jobCategory))];

//   // ✅ Extract unique locations
//   const locations = [...new Set(jobs?.map((job) => job.location))];
//   return (
//     // <div>
//     //   <JobCard jobs={jobs} />
//     // </div>
//     <div className="min-h-screen bg-black text-white">
//       {/* TOP SEARCH BAR */}
//       <div className="w-full border-b border-zinc-800 bg-black/60 backdrop-blur-md sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex gap-3">
//             <input
//               type="text"
//               placeholder="Search jobs..."
//               className="w-full px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white outline-none"
//             />

//             <button className="px-6 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 transition">
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MAIN LAYOUT */}
//       <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
//         {/* LEFT SIDEBAR */}
//         <aside className="lg:col-span-3 space-y-6">
//           {/* CATEGORY (DYNAMIC) */}
//           <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950">
//             <h3 className="font-semibold mb-3">Category</h3>

//             <div className="space-y-2 text-sm text-zinc-300">
//               {categories.map((cat, i) => (
//                 <p key={i} className="flex items-center gap-2">
//                   <input type="checkbox" />
//                   {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                 </p>
//               ))}
//             </div>
//           </div>

//           {/* SALARY (still static for now) */}
//           <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950">
//             <h3 className="font-semibold mb-3">Salary Range</h3>

//             <div className="space-y-2 text-sm text-zinc-300">
//               <p>
//                 <input type="radio" name="salary" /> 0 - 1000
//               </p>
//               <p>
//                 <input type="radio" name="salary" /> 1000 - 2000
//               </p>
//               <p>
//                 <input type="radio" name="salary" /> 2000 - 3000
//               </p>
//               <p>
//                 <input type="radio" name="salary" /> 3000+
//               </p>
//             </div>
//           </div>

//           {/* LOCATION (DYNAMIC) */}
//           <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950">
//             <h3 className="font-semibold mb-3">Location</h3>

//             <div className="space-y-2 text-sm text-zinc-300">
//               {locations.map((loc, i) => (
//                 <p key={i}>
//                   <input type="checkbox" /> {loc}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </aside>

//         {/* RIGHT SIDE */}
//         <main className="lg:col-span-9">
//           <JobCard jobs={jobs} />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AllJobsPage;
const AllJobsPage = async ({ searchParams }) => {
  const params = await searchParams; // ✅ unwrap promise

  const jobs = await getAllJobs(params);

  const categories = [...new Set(jobs?.map((job) => job.jobCategory))];
  const locations = [...new Set(jobs?.map((job) => job.location))];

  return (
    <SearchAndFilterJobs
      jobs={jobs}
      categories={categories}
      locations={locations}
      searchParams={searchParams}
    />
  );
};

export default AllJobsPage;
