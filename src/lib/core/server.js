const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const imageBbKey = process.env.NEXT_PUBLIC_IMAGE_API;

export const serverFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  return res.json();
};

// Upload imagebb

export const uploadImageToImageBB = async (file) => {
  if (!file) throw new Error("No file selected");

  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${imageBbKey}`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!data.success) {
    throw new Error("Image upload failed");
  }

  return data.data.url;
};
