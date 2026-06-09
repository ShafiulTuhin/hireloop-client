"use server";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getPlanById = async (planId) => {
  if (!planId) return null;

  const res = await fetch(`${baseUrl}/plan?_id${planId}`);

  const text = await res.text();

  if (!text) return null;

  return JSON.parse(text);
};
