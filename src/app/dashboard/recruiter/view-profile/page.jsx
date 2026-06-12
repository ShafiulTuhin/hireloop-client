import { getMyAppliedJobs, getSeekerJobs } from "@/lib/actions/jobs";
import { getMyProfile } from "@/lib/actions/profile";
import { getUserSession } from "@/lib/core/session";
import React from "react";

const ViewApplicantProfilePage = async () => {
  // const { id } = params;
  const user = await getUserSession();
  // console.log(user);
  // // const jobs = await getSeekerJobs(user.id);
  // // console.log(jobs);

  // const profile = await getMyProfile(user?.id);
  // console.log(profile);
  const seekerJobs = await getMyAppliedJobs(user?.id);
  console.log(seekerJobs);

  return (
    <div>
      <h2 className="text-white">Get Applicant profile</h2>
    </div>
  );
};

export default ViewApplicantProfilePage;
