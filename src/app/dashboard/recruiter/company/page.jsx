import CompanyProfileCard from "@/components/dashboard/company/CompanyProfileCard";
import { getRecruiterCompany } from "@/lib/actions/company";
import { getUserSession } from "@/lib/core/session";
import React from "react";

const RecruiterCompanyPage = async () => {
  const user = await getUserSession();
  // console.log(user);

  const company = await getRecruiterCompany(user?.id);

  return (
    <div>
      <CompanyProfileCard company={company} />
    </div>
  );
};

export default RecruiterCompanyPage;
