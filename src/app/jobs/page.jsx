import JobCard from "@/components/dashboard/jobs/JobCard";
import { getAllJobs } from "@/lib/actions/jobs";
import React from "react";

const AllJobsPage = async () => {
  const jobs = await getAllJobs();
  return (
    <div>
      <JobCard jobs={jobs} />
    </div>
  );
};

export default AllJobsPage;
