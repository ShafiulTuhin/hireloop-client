"use server";

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

// Get recruiter companies
export const getRecruiterCompany = async (recruiterId) => {
  return serverFetch(`/my/company/${recruiterId}`);
};
