import { getMyAppliedJobs } from "@/lib/actions/jobs";
import { getUserSession } from "@/lib/core/session";

const SeekerJobPage = async () => {
  const user = await getUserSession();
  console.log(user);

  const jobs = await getMyAppliedJobs(user?.id);
  console.log(jobs);

  return (
    <div>
      <h2 className="text-white">{jobs.length}</h2>
    </div>
  );
};

export default SeekerJobPage;
