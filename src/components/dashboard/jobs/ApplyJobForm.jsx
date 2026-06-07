"use client";

import { getMyAppliedJobs } from "@/lib/actions/jobs";
import { getMyProfile } from "@/lib/actions/profile";
import { authClient } from "@/lib/auth-client";

import { Button, Modal, Surface } from "@heroui/react";
import { useRouter } from "next/navigation";

import { FiArrowRight } from "react-icons/fi";
import { toast } from "react-toastify";

const ApplyJobForm = ({ job, jobs }) => {
  const { data } = authClient.useSession();
  const user = data?.user;
  // console.log(user);

  const router = useRouter();

  const handleApplyToJob = async () => {
    // Check login first
    if (!user) {
      toast.error("Please login first");
      router.push(`/auth/login?redirect=/jobs/${job._id}`);
      return;
    }
    if (user.role === "recruiter") {
      toast.error("A recruiter cannot apply for a job");
      router.push("/jobs");
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
              <div className="flex gap-3 items-center mb-6">
                <p className="text-red-500 font-bold text-center">
                  You have applied {jobs.length} jobs out of 3 free plan in a
                  month
                </p>
                <Button className="rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500">
                  Subscribe
                </Button>
              </div>
              <Surface
                // variant="default"
                className="bg-gradient-to-b from-[#0b1220] via-gray-900 to-black border border-zinc-800 rounded-lg"
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
