"use server";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getPlanById = async (planId) => {
  if (!planId) return null;

  const res = await fetch(`${baseUrl}/plan?_id=${planId}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();

  return data;
};
