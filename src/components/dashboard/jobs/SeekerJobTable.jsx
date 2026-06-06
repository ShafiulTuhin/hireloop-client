"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FiEye, FiTrash2 } from "react-icons/fi";

export default function SeekerJobTable({ jobs }) {
  return (
    <div className="w-full rounded-xl border border-black overflow-hidden">
      <div className="overflow-x-auto w-full">
        <table className="w-full text-white">
          <thead className="text-xs md:text-sm uppercase text-gray-300">
            <tr className="border-b border-black bg-gray-800">
              <th className="p-3 md:p-4 text-left">Job Title</th>
              <th className="p-3 md:p-4 text-left">Company</th>
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
                {/* Job Title */}
                <td className="p-3 md:p-4 font-semibold">{job.jobTitle}</td>

                {/* Company */}
                <td className="p-3 md:p-4">{job.companyName}</td>

                {/* Location */}
                <td className="p-3 md:p-4">{job.location}</td>

                {/* Status */}
                <td className="p-3 md:p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs text-white ${
                      job.status === "Accepted"
                        ? "bg-green-500"
                        : job.status === "Rejected"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-3 md:p-4">
                  <div className="flex gap-2">
                    {/* Details */}
                    <Link href={`/dashboard/seeker/jobs/${job._id}`}>
                      <Button isIconOnly size="sm" variant="light">
                        <FiEye />
                      </Button>
                    </Link>

                    {/* Delete */}
                    <Button
                      isIconOnly
                      size="sm"
                      color="danger"
                      variant="light"
                      onPress={() => onDelete?.(job._id)}
                    >
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
