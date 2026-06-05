import { FileText, Briefcase, CircleCheck, Person } from "@gravity-ui/icons";
import DashboardStats from "@/components/dashboard/DashboardStats";
import { getUserSession } from "@/lib/core/session";
import { getRecruiterCompany } from "@/lib/actions/company";
import {
  getAllJobs,
  getMyCompanyJobs,
  getSeekerJobs,
} from "@/lib/actions/jobs";
import ApplicantsAppliedJobs from "@/components/dashboard/jobs/ApplicantsAppliedJobs";

const stats = [
  {
    title: "Total Job Posts",
    value: 48,
    icon: <FileText />,
  },
  {
    title: "Total Applicants",
    value: "1,284",
    icon: <Person />,
  },
  {
    title: "Active Jobs",
    value: 18,
    icon: <Briefcase />,
  },
  {
    title: "Jobs Closed",
    value: 32,
    icon: <CircleCheck />,
  },
];

const RecruiterPage = async () => {
  const user = await getUserSession();
  const jobs = await getSeekerJobs();
  const company = await getRecruiterCompany(user?.id);

  const appliedJobs =
    jobs?.filter((job) => job.companyId === company?._id) || [];
  // console.log(appliedJobs);

  return (
    <div className="p-4 bg-gradient-to-b from-black via-gray-900 to-[#0b1220] min-h-screen">
      <h2 className="text-3xl text-white">Welcome back,{user?.name}</h2>
      <DashboardStats stats={stats} />
      <ApplicantsAppliedJobs appliedJobs={appliedJobs} />
    </div>
  );
};

export default RecruiterPage;
