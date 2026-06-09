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
  const { data } = authClient.useSession();
  const user = data?.user;

  const router = useRouter();

  const handleApplyToJob = async () => {
    // 1. AUTH CHECK
    if (!user) {
      toast.error("Please login first");
      router.push(`/auth/login?redirect=/jobs/${job._id}`);
      return;
    }

    // 2. ROLE CHECK
    if (user.role === "recruiter") {
      toast.error("A recruiter cannot apply for a job");
      router.push("/jobs");
      return;
    }

    // 3. PROFILE CHECK
    const profile = await getMyProfile(user.id);

    if (!profile) {
      toast.error("Please complete your profile before applying.");
      router.push("/dashboard/profile");
      return;
    }

    // 4. LIMIT CHECK (SAFE)
    const maxLimit = Number(plan?.maxCollectionPerMonth ?? Infinity);
    const used = jobs?.length ?? 0;

    if (used >= maxLimit) {
      toast.error("Monthly application limit reached. Upgrade your plan.");
      router.push("/pricing");
      return;
    }

    // 5. CREATE APPLICATION
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
      toast.success(`Applied successfully for ${myJobApplication.jobTitle}`);
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

            <Modal.Body className="lg:p-6">
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
                  {/* Plan Info (always safe, no conditions) */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                    <div>
                      <p className="text-gray-300 text-sm">
                        {plan?.name ?? "Free"} Plan Usage
                      </p>

                      <p className="text-white font-semibold">
                        {jobs?.length ?? 0} of{" "}
                        <span>{plan?.maxCollectionPerMonth ?? "∞"}</span>{" "}
                        applications used this month
                      </p>
                    </div>

                    <Link href="/pricing">
                      <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg">
                        Upgrade
                      </Button>
                    </Link>
                  </div>

                  {/* Info */}
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

                  {/* Action */}
                  <button
                    onClick={handleApplyToJob}
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold hover:opacity-90 transition cursor-pointer shadow-lg"
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
