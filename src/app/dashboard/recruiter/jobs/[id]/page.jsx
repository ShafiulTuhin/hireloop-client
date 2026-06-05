import JobDetails from "@/components/dashboard/jobs/JobDetails";
import { getSingleJob } from "@/lib/actions/jobs";

const RecruiterJobDetailsPage = async ({ params }) => {
  const { id } = await params;

  const job = await getSingleJob(id);

  return <JobDetails job={job} />;
};

export default RecruiterJobDetailsPage;
