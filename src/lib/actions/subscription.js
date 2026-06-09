"use server";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const createSubscription = async (newSubsData) => {
  const res = await fetch(`${baseUrl}/subscriptions`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newSubsData),
  });

  const data = await res.json();
  return data;
};
