const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getCompanyJobs = async (companyId, status = "active") => {
  const res = await fetch(
    `${baseUrl}/jobs?companyId=${companyId}&status=${status}`,
  );
  const result = res.json();
  return result;
};
