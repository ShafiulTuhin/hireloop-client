"use server";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const createProfile = async (newProfileData) => {
  const res = await fetch(`${baseUrl}/profile`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newProfileData),
  });

  const data = await res.json();
  return data;
};

export const getMyProfile = async (userId) => {
  const res = await fetch(`${baseUrl}/profile/${userId}`);

  // No profile found
  if (res.status === 404) {
    return null;
  }

  // Other server errors
  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  return res.json();
};
