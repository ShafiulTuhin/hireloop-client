import AdminCompanyList from "@/components/dashboard/company/AdminCompanyList";
import { getAllCompanies } from "@/lib/actions/company";
import React from "react";

const CompanyPage = async () => {
  const companies = await getAllCompanies();
  console.log(companies);

  return <AdminCompanyList companies={companies} />;
};

export default CompanyPage;
