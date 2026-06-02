"use client";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import { FileText, Briefcase, CircleCheck, Person } from "@gravity-ui/icons";
import DashboardStats from "@/components/dashboard/DashboardStats";
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

const RecruiterPage = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  return (
    <div className="p-4 bg-gradient-to-b from-black via-gray-900 to-[#0b1220] min-h-screen">
      <h2 className="text-3xl text-white">
        Welcome back,
        {isPending ? (
          <div className="flex">
            <Spinner size="sm" />
          </div>
        ) : (
          user?.name
        )}
      </h2>
      <DashboardStats stats={stats} />
    </div>
  );
};

export default RecruiterPage;
