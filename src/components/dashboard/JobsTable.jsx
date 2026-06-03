"use client";

import { Button } from "@heroui/react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function JobsTable({ jobs }) {
  return (
    <div className="w-full rounded-xl border border-black overflow-hidden">
      <div className="overflow-x-auto w-full">
        <table className="w-full text-white">
          <thead className="text-xs md:text-sm uppercase text-gray-300">
            <tr className="border-b border-black">
              <th className="p-3 md:p-4 text-left">Job Title</th>
              <th className="p-3 md:p-4 text-left">Type / Category</th>
              <th className="p-3 md:p-4 text-left">Location</th>
              <th className="p-3 md:p-4 text-left">Status</th>
              <th className="p-3 md:p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="text-xs md:text-sm">
            {jobs?.map((job) => (
              <tr
                key={job._id}
                className="border-b border-black hover:bg-white/5"
              >
                <td className="p-3 md:p-4">
                  <div className="flex flex-col">
                    <p className="font-semibold">{job.jobTitle}</p>
                    <p className="text-xs text-gray-400">
                      {job.currency} {job.minSalary} - {job.maxSalary}
                    </p>
                  </div>
                </td>

                <td className="p-3 md:p-4">
                  <div className="flex flex-col">
                    <span className="capitalize">{job.jobType}</span>
                    <span className="text-xs text-gray-400 capitalize">
                      {job.jobCategory}
                    </span>
                  </div>
                </td>

                <td className="p-3 md:p-4">{job.location}</td>

                <td className="p-3 md:p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs text-white ${
                      job.status === "active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>

                <td className="p-3 md:p-4">
                  <div className="flex gap-2">
                    <Button isIconOnly size="sm" variant="light">
                      <FiEdit />
                    </Button>

                    <Button isIconOnly size="sm" variant="light" color="danger">
                      <FiTrash2 />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
