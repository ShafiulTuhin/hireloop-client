"use client";

import { createSeekerJobs } from "@/lib/actions/jobs";

import { getMyProfile } from "@/lib/actions/profile";
import { authClient } from "@/lib/auth-client";

import { Button, Modal, Surface } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FiArrowRight } from "react-icons/fi";
import { toast } from "react-toastify";

const ApplyJobForm = ({ job, jobs, plan }) => {
  console.log(plan);

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
        <Button className="min-h-0 py-3 w-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white border-0 shadow-none rounded-lg cursor-pointer">
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
              {jobs.length < plan.maxCollectionPerMonth ? (
                <Surface className="bg-gradient-to-b from-[#0b1220] via-gray-900 to-black border border-zinc-800 rounded-xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-violet-600/20 to-indigo-500/20 border-b border-zinc-800 px-6 py-4">
                    <h2 className="text-2xl font-bold text-center text-white">
                      Apply for {job?.jobTitle}
                    </h2>
                    <p className="text-center text-gray-400 text-sm mt-1">
                      Complete your application in one click
                    </p>
                  </div>

                  <div className="p-6 space-y-6">
                    {user && (
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                        <div>
                          <p className="text-gray-300 text-sm">
                            Free Plan Usage
                          </p>

                          <p className="text-white font-semibold">
                            {jobs.length} of {plan.maxCollectionPerMonth}
                            applications used this month
                          </p>
                        </div>

                        <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg">
                          Subscribe
                        </Button>
                      </div>
                    )}

                    <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5">
                      <h3 className="text-white font-semibold mb-2">
                        Before applying
                      </h3>

                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>✓ Your profile information will be shared</li>
                        <li>✓ Resume and portfolio will be included</li>
                        <li>✓ Recruiters can contact you directly</li>
                      </ul>
                    </div>

                    <button
                      onClick={handleApplyToJob}
                      className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold hover:opacity-90 transition cursor-pointer shadow-lg"
                    >
                      Apply Now
                    </button>
                  </div>
                </Surface>
              ) : (
                <Surface className="bg-gradient-to-b from-[#0b1220] via-gray-900 to-black border border-red-500/20 rounded-xl">
                  <div className="p-8 text-center space-y-5">
                    <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                      <span className="text-3xl">⚠️</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-red-500">
                        Free Limit Reached
                      </h3>

                      <p className="text-gray-400 mt-2">
                        You've used all 3 free job applications for this month.
                        Upgrade your plan to continue applying for jobs.
                      </p>
                    </div>
                    <Link href={"/pricing"}>
                      {" "}
                      <Button className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white rounded-xl px-8">
                        Subscribe Now
                      </Button>
                    </Link>
                  </div>
                </Surface>
              )}
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default ApplyJobForm;
