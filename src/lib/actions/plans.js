"use server";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const getPlanById = async (planId) => {
//   if (!planId) return null;

//   const res = await fetch(`${baseUrl}/plan?_id=${planId}`, {
//     cache: "no-store",
//   });
//   console.log(`${baseUrl}/plan?_id=${planId}`);

//   const text = await res.text();

//   if (!text) return null;

//   return JSON.parse(text);
// };

export const getPlanById = async (planId) => {
  if (!planId) return null;

  const res = await fetch(`${baseUrl}/plan?_id=${planId}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();

  return data;
};
