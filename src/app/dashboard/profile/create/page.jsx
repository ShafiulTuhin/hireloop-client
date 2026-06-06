import CreateProfile from "@/components/dashboard/profile/CreateProfile";
import { getUserSession } from "@/lib/core/session";
import React from "react";

const CreateProfilePage = async ({ params }) => {
  const { id } = params;
  const user = await getUserSession(id);

  return <CreateProfile user={user} />;
};

export default CreateProfilePage;
