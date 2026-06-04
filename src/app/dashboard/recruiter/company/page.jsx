import CompanyProfileCard from "@/components/dashboard/company/CompanyProfileCard";
import { getUserSession } from "@/lib/core/session";
import React from "react";

const RecruiterCompanyPage = async () => {
  const user = await getUserSession();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/company/${user.email}`,
  );

  const company = await res.json();
  // const{companyname,industry,logo,description,status,employeeRange,location} = company

  return (
    <div>
      <CompanyProfileCard company={company} />
    </div>
  );
};

export default RecruiterCompanyPage;
