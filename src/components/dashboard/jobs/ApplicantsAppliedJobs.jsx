"use client";

import { useState } from "react";

const statusOptions = [
  "New",
  "Invited",
  "Interviewing",
  "Rejected",
  "Recruited",
];

const ApplicantsAppliedJobs = ({ appliedJobs }) => {
  const [jobs, setJobs] = useState(appliedJobs || []);

  const handleStatusChange = (id, value) => {
    const updated = jobs.map((job) =>
      job._id === id ? { ...job, status: value } : job,
    );

    setJobs(updated);
  };

  return (
    <div className="w-full rounded-xl border border-black overflow-hidden">
      <div className="overflow-x-auto w-full">
        <table className="w-full text-white">
          <thead className="text-xs md:text-sm uppercase text-gray-300">
            <tr className="border-b border-black bg-gray-800">
              <th className="p-3 md:p-4 text-left">Applicant</th>
              <th className="p-3 md:p-4 text-left">Job Title</th>
              <th className="p-3 md:p-4 text-left">Date</th>
              <th className="p-3 md:p-4 text-left">Experience</th>
              <th className="p-3 md:p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody className="text-xs md:text-sm">
            {jobs?.map((job) => (
              <tr
                key={job._id}
                className="border-b border-black hover:bg-white/5"
              >
                {/* Applicant Name */}
                <td className="p-3 md:p-4 font-semibold">{job.seekerName}</td>

                {/* Job Title */}
                <td className="p-3 md:p-4">{job.jobTitle}</td>

                {/* Apply Date */}
                <td className="p-3 md:p-4 text-gray-300">{job.applyDate}</td>

                {/* Experience */}
                <td className="p-3 md:p-4">{job.experience} yrs</td>

                {/* Status Dropdown */}
                <td className="p-3 md:p-4">
                  <select
                    value={job.status || "New"}
                    onChange={(e) =>
                      handleStatusChange(job._id, e.target.value)
                    }
                    className="bg-gray-900 border border-gray-700 text-white px-2 py-1 rounded-md"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicantsAppliedJobs;
