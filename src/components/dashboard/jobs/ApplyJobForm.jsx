"use client";
import { createSeekerJobs, getSeekerJobs } from "@/lib/actions/jobs";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label, Modal, Surface } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { toast } from "react-toastify";

const ApplyJobForm = ({ job, appointment }) => {
  const [experience, setExperience] = useState(null);
  console.log(job);
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const { data } = authClient.useSession();
  const user = data?.user;
  console.log(user);

  const router = useRouter();

  const handleApplyToJob = async () => {
    // Check login first
    if (!user) {
      toast.error("Please login first");
      router.push("/auth/login");
      return;
    }

    const myJob = {
      seekerId: user?.id,
      seekerName: user?.name,
      jobTitle: job?.jobTitle,
      companyName: job?.companyname,
      location: job?.location,
      companyId: job?.companyId,
      gender: gender,
      phone: phone,
      experience: experience,
      applyDate: new Date().toISOString().split("T")[0],
      status: "New",
      //   applyTime: selectedTime,
    };
    console.log(myJob);
    const requiredFields = [myJob.phone, myJob.gender];

    if (requiredFields.some((field) => !field)) {
      toast.error("Please fill all input fields");
      return;
    }

    // console.log(tokenData);
    // const { data: tokenData } = await authClient.token();
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_SERVER_URL}/booking`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //       authorization: `Bearer ${tokenData?.token}`,
    //     },
    //     body: JSON.stringify(myBooking),
    //   },
    // );

    const newJob = await createSeekerJobs(myJob);
    // console.log(bookingData);
    console.log(newJob);

    if (newJob) {
      toast.success(`Job for  ${myJob.jobTitle} has applied successfully`);
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
                    <h2 className="text-2xl font-bold text-white">
                      Apply for {job?.jobTitle}
                    </h2>
                    <p className="text-zinc-400 mt-1">
                      Complete the information below to submit your application.
                    </p>
                  </div>

                  {/* Gender */}
                  <div>
                    <Label className="text-zinc-300 mb-3 block">Gender</Label>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setGender("male")}
                        className={`px-5 py-2 rounded-lg border transition cursor-pointer ${
                          gender === "male"
                            ? "bg-cyan-500 border-cyan-500 text-white"
                            : "border-zinc-700 bg-zinc-800 text-zinc-300"
                        }`}
                      >
                        Male
                      </button>

                      <button
                        type="button"
                        onClick={() => setGender("female")}
                        className={`px-5 py-2 rounded-lg border transition cursor-pointer ${
                          gender === "female"
                            ? "bg-cyan-500 border-cyan-500 text-white"
                            : "border-zinc-700 bg-zinc-800 text-zinc-300"
                        }`}
                      >
                        Female
                      </button>
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <Label className="text-zinc-300 mb-2 block">
                      Phone Number
                    </Label>

                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <Label className="text-zinc-300 mb-2 block">
                      Experience (Years)
                    </Label>

                    <input
                      type="number"
                      min="0"
                      value={experience || ""}
                      onChange={(e) => setExperience(e.target.value)}
                      placeholder="e.g. 2"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                    />
                  </div>

                  {/* Submit */}
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
