import JobDetails from "@/components/dashboard/jobs/JobDetails";
import { getSingleJob } from "@/lib/actions/jobs";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const JobDetailsPageForUser = async ({ params }) => {
  const { id } = await params;

  const job = await getSingleJob(id);
  return (
    <div className="">
      <JobDetails job={job} />
      <div className="bg-[#0b1220] w-full pb-4">
        <div className="flex items-center justify-center gap-4 w-1/2 mx-auto">
          {/* Back Button */}
          <div className="w-1/3">
            <Link href="/jobs">
              <Button
                className="w-full text-white border-0 shadow-none rounded-lg cursor-pointer border-1"
                variant="outline"
              >
                Back
              </Button>
            </Link>
          </div>

          {/* Apply Now Button */}
          <div className="w-2/3">
            <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white border-0 shadow-none rounded-lg cursor-pointer">
              Apply Now <FiArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPageForUser;
