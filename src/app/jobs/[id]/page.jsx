import ApplyJobForm from "@/components/dashboard/jobs/ApplyJobForm";
import JobDetails from "@/components/dashboard/jobs/JobDetails";
import { getMyAppliedJobs, getSingleJob } from "@/lib/actions/jobs";
import { getUserSession } from "@/lib/core/session";

import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const JobDetailsPageForUser = async ({ params }) => {
  const { id } = await params;

  const job = await getSingleJob(id);
  const user = await getUserSession();
  const jobs = user ? await getMyAppliedJobs(user.id) : [];
  console.log(jobs);

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
            <ApplyJobForm job={job} jobs={jobs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPageForUser;
