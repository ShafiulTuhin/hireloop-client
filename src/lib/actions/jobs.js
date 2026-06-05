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
