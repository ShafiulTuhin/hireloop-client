import CreateJob from "@/components/dashboard/jobs/CreateJob";
import { getRecruiterCompany } from "@/lib/actions/company";
import { getUserSession } from "@/lib/core/session";
import React from "react";

const PostJobPage = async () => {
  const user = await getUserSession();

  const company = await getRecruiterCompany(user?.email);
  // console.log(company);

  return (
    <div>
      <CreateJob company={company} />
    </div>
  );
};

export default PostJobPage;
