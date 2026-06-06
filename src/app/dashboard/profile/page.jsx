import ProfileInformation from "@/components/dashboard/profile/ProfileInformation";
import { getMyProfile } from "@/lib/actions/profile";
import { getUserSession } from "@/lib/core/session";

import React from "react";

const MyProfilePage = async () => {
  const user = await getUserSession();
  const profile = await getMyProfile(user?.id);
  return (
    <div>
      {/* <Profile /> */}
      <ProfileInformation profile={profile} />
    </div>
  );
};

export default MyProfilePage;
