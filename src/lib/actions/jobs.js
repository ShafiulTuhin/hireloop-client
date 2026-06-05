"use server";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const createJob = async (newJobData) => {
  const res = await fetch(`${baseUrl}/jobs`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newJobData),
  });

  const data = await res.json();
  return data;
};

export const getAllJobs = async () => {
  const res = await fetch(`${baseUrl}/jobs`);
  return res.json();
};

export const getSingleJob = async (id) => {
  const res = await fetch(`${baseUrl}/jobs/${id}`);
  const job = await res.json();
  return job;
};

// get Seeker jobs
export const createSeekerJobs = async (seekerData) => {
  const res = await fetch(`${baseUrl}/seeker/jobs`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      // authorization: `Bearer ${tokenData?.token}`,
    },
    body: JSON.stringify(seekerData),
  });

  return await res.json();
};
// Get seeker jobs:
export const getSeekerJobs = async () => {
  const res = await fetch(`${baseUrl}/seeker/jobs`);
  return await res.json();
};

//Get all own company jobs that applied by applicant

export const getMyCompanyJobs = async (companyId) => {
  const res = await fetch(`${baseUrl}/seeker/jobs/${companyId}`);
  return res.json;
};
