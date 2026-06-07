import SeekerJobTable from "@/components/dashboard/jobs/SeekerJobTable";
import { getMyAppliedJobs } from "@/lib/actions/jobs";
import { getUserSession } from "@/lib/core/session";

const SeekerJobPage = async () => {
  const user = await getUserSession();

  const jobs = await getMyAppliedJobs(user?.id);

  return (
    <div>
      <h2 className="text-white text-2xl py-5">My Jobs: {jobs.length}</h2>
      <SeekerJobTable jobs={jobs} />
    </div>
  );
};

export default SeekerJobPage;
