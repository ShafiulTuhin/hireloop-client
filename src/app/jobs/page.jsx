import SearchAndFilterJobs from "@/components/dashboard/jobs/SearchAndFilterJobs";
import { getAllJobs } from "@/lib/actions/jobs";
import React from "react";

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
