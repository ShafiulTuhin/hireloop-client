"use server";
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

// export const getSingleJob = async (id) => {
//   const res = await fetch(`${baseUrl}/jobs/${id}`);
//   const job = await res.json();
//   return job;
// };
