import React from "react";
import { FiArrowRight } from "react-icons/fi";

const JobCard = ({ jobs }) => {
  return (
    <div className="w-full bg-zinc-950 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs?.map((job, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-md hover:shadow-lg hover:border-zinc-700 transition duration-300 flex flex-col justify-between"
          >
            {/* Top Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={job.companyLogo}
                  alt={job.companyname}
                  className="w-12 h-12 rounded-lg object-cover bg-zinc-800"
                />
                <div>
                  <h2 className="text-white font-semibold text-lg">
                    {job.companyname}
                  </h2>
                  <p className="text-zinc-400 text-sm">{job.jobCategory}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {job.jobTitle}
              </h3>

              <p className="text-zinc-400 text-sm mb-4">Type: {job.jobType}</p>

              <div className="text-zinc-300 text-sm space-y-1">
                <p>
                  💰 Salary: ${job.minSalary} - ${job.maxSalary}
                </p>
                <p>⏳ Deadline: {job.deadline}</p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-6 w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-medium transition">
              Apply Now <FiArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
