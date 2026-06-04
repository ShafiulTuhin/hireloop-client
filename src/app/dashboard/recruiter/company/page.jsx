import CompanyProfileCard from "@/components/dashboard/company/CompanyProfileCard";
import { getRecruiterCompany } from "@/lib/actions/company";
import { getUserSession } from "@/lib/core/session";
import React from "react";

const RecruiterCompanyPage = async () => {
  const user = await getUserSession();

  const company = await getRecruiterCompany(user?.email);

  return (
    <div>
      <CompanyProfileCard company={company} />
    </div>
  );
};

export default RecruiterCompanyPage;
