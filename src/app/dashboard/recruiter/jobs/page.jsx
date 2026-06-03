import JobsTable from "@/components/dashboard/JobsTable";
import { getCompanyJobs } from "@/lib/api/jobs";

const RecruiterJobPage = async () => {
  const companyId = "company_123";
  const jobs = await getCompanyJobs(companyId);

  return (
    <div className="space-y-6 p-4 min-h-screen bg-gradient-to-b from-[#1B1B1B] via-gray-900 to-[#0b1220] text-white">
      <div>
        <h1 className="text-2xl font-bold">My Jobs</h1>
        <p className="text-default-500">
          Manage all your published and draft job postings.
        </p>
      </div>

      <JobsTable jobs={jobs} />
    </div>
  );
};

export default RecruiterJobPage;
