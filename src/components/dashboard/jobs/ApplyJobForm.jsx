"use client";
import { createSeekerJobs } from "@/lib/actions/jobs";
import { getMyProfile } from "@/lib/actions/profile";
import { authClient } from "@/lib/auth-client";
// import { getUserSession } from "@/lib/core/session";
import { Button, Modal, Surface } from "@heroui/react";
import { useRouter } from "next/navigation";

import { FiArrowRight } from "react-icons/fi";
import { toast } from "react-toastify";

const ApplyJobForm = ({ job }) => {
  const { data } = authClient.useSession();
  const user = data?.user;
  console.log(user);

  const router = useRouter();

  // const handleApplyToJob = async () => {
  //   // const user = await getUserSession();
  //   const profile = await getMyProfile(user?.id);
  //   // Check login first
  //   if (!user) {
  //     toast.error("Please login first");
  //     router.push("/auth/login");
  //     return;
  //   }

  //   const myJobApplication = {
  //     seekerId: profile?.userId,
  //     seekerName: profile?.name,
  //     jobTitle: job?.jobTitle,
  //     companyName: job?.companyname,
  //     location: job?.location,
  //     companyId: job?.companyId,
  //     gender: profile?.gender,
  //     phone: profile?.phone,
  //     experience: profile?.experience,
  //     skills: profile?.skills,
  //     education: profile?.education,
  //     portfolio: profile?.portfolio,
  //     resume: profile?.resume,
  //     currentSalary: profile?.salary,
  //     github: profile?.github,
  //     linkedin: profile?.linkedin,
  //     applyDate: new Date().toISOString().split("T")[0],
  //     status: "New",
  //   };
  //   console.log(myJobApplication);
  //   const requiredFields = [myJobApplication.phone, myJobApplication.gender];

  //   if (requiredFields.some((field) => !field)) {
  //     toast.error("Please fill all input fields");
  //     return;
  //   }

  //   // console.log(tokenData);
  //   // const { data: tokenData } = await authClient.token();
  //   // const res = await fetch(
  //   //   `${process.env.NEXT_PUBLIC_API_SERVER_URL}/booking`,
  //   //   {
  //   //     method: "POST",
  //   //     headers: {
  //   //       "content-type": "application/json",
  //   //       authorization: `Bearer ${tokenData?.token}`,
  //   //     },
  //   //     body: JSON.stringify(myBooking),
  //   //   },
  //   // );

  //   const newJob = await createSeekerJobs(myJobApplication);
  //   // console.log(bookingData);
  //   console.log(newJob);

  //   if (newJob) {
  //     toast.success(
  //       `Job for  ${myJobApplication.jobTitle} has applied successfully`,
  //     );
  //     router.push("/dashboard/seeker/jobs");
  //   }
  // };
  const handleApplyToJob = async () => {
    // Check login first
    if (!user) {
      toast.error("Please login first");
      router.push("/auth/login");
      return;
    }

    const profile = await getMyProfile(user.id);

    // Check profile
    if (!profile) {
      toast.error("Please complete your profile before applying.");
      router.push("/dashboard/profile");
      return;
    }

    const myJobApplication = {
      seekerId: profile.userId,
      seekerName: profile.name,
      jobTitle: job.jobTitle,
      companyName: job.companyname,
      location: job.location,
      companyId: job.companyId,
      gender: profile.gender,
      phone: profile.phone,
      experience: profile.experience,
      skills: profile.skills,
      education: profile.education,
      portfolio: profile.portfolio,
      resume: profile.resume,
      currentSalary: profile.salary,
      github: profile.github,
      linkedin: profile.linkedin,
      applyDate: new Date().toISOString().split("T")[0],
      status: "New",
    };

    // const requiredFields = [myJobApplication.phone, myJobApplication.gender];

    // if (requiredFields.some((field) => !field)) {
    //   toast.error("Please fill all required fields.");
    //   return;
    // }

    const newJob = await createSeekerJobs(myJobApplication);

    if (newJob) {
      toast.success(
        `Job for ${myJobApplication.jobTitle} has been applied successfully.`,
      );
      router.push("/dashboard/seeker/jobs");
    }
  };
  return (
    <Modal>
      <div className="flex justify-center items-center">
        <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white border-0 shadow-none rounded-lg cursor-pointer">
          Apply Now <FiArrowRight />
        </Button>
      </div>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading></Modal.Heading>
            </Modal.Header>
            <Modal.Body className="lg:p-6">
              <Surface
                variant="default"
                className="bg-zinc-900 border border-zinc-800"
              >
                <div className="space-y-6 p-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white text-center">
                      Apply for {job?.jobTitle}
                    </h2>
                  </div>

                  <button
                    onClick={handleApplyToJob}
                    className="w-full h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold hover:opacity-90 transition cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default ApplyJobForm;
