"use server";

import { revalidatePath } from "next/cache";
import { serverFetch } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const createCompany = async (newCompanyData) => {
  const res = await fetch(`${baseUrl}/company`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newCompanyData),
  });

  const data = await res.json();
  return data;
};

// Get all companies for admin():
export const getAllCompanies = async () => {
  const res = await fetch(`${baseUrl}/company`);
  return await res.json();
};

// Get recruiter companies(for recruiter)
export const getRecruiterCompany = async (recruiterId) => {
  return serverFetch(`/my/company/${recruiterId}`);
};

export const updateCompanyStatus = async (companyId, status) => {
  const res = await fetch(`${baseUrl}/company/${companyId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  revalidatePath("/dashboard/admin/company");
  return res.json();
};
