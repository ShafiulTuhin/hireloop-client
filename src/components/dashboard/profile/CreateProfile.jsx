"use client";

import { useRouter } from "next/navigation";

import { createProfile } from "@/lib/actions/profile";
import { toast } from "react-toastify";

export default function CreateProfile({ user }) {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: user?.name,
      email: user?.email,
      userId: user?.id,
      phone: form.phone?.value || "",
      gender: form.gender?.value || "",
      experience: form.experience?.value || "",
      education: form.education?.value || "",
      skills: form.skills?.value || "",
      resume: form.resume?.value || "",
      salary: form.salary?.value || "",
      github: form.github?.value || "",
      linkedin: form.linkedin?.value || "",
      portfolio: form.portfolio?.value || "",
      facebook: form.facebook?.value || "",
    };

    await createProfile(data);

    toast.success("Profile created successfully");
    router.push("/dashboard/profile");
  };

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#0b1220] via-gray-900 to-black rounded-xl shadow-sm p-8">
      <h2 className="text-3xl font-bold text-gray-400 mb-2">
        Create Your Profile
      </h2>

      <p className="text-gray-500 mb-8">
        Complete your profile to help recruiters learn more about you and
        improve your chances of getting hired.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            defaultValue={user?.name || ""}
            className="input input-bordered w-full bg-gray-700 text-gray-200"
          />

          <input
            type="email"
            name="email"
            defaultValue={user?.email || ""}
            readOnly
            className="input input-bordered w-full bg-gray-700 text-gray-200"
          />
        </div>

        <input
          name="phone"
          placeholder="Phone"
          className="input w-full bg-gray-700 text-gray-200 placeholder:text-gray-400"
        />

        <select
          name="gender"
          className="select w-full bg-gray-700 text-gray-200 placeholder:text-gray-400 p-2 rounded-lg"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input
          name="experience"
          placeholder="Experience"
          className="input w-full bg-gray-700 text-gray-200 placeholder:text-gray-400"
        />

        <input
          name="education"
          placeholder="Last Education"
          className="input w-full bg-gray-700 text-gray-200 placeholder:text-gray-400"
        />

        <input
          name="skills"
          placeholder="Skills (React, Node...)"
          className="input w-full bg-gray-700 text-gray-200 placeholder:text-gray-400"
        />

        <input
          name="resume"
          placeholder="Resume URL"
          className="input w-full bg-gray-700 text-gray-200 placeholder:text-gray-400"
        />

        <input
          name="salary"
          placeholder="Current Salary (optional)"
          className="input w-full bg-gray-700 text-gray-200 placeholder:text-gray-400"
        />

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="github"
            placeholder="GitHub"
            className="input bg-gray-700 text-gray-200 placeholder:text-gray-400"
          />
          <input
            name="linkedin"
            placeholder="LinkedIn"
            className="input bg-gray-700 text-gray-200 placeholder:text-gray-400"
          />
          <input
            name="portfolio"
            placeholder="Portfolio"
            className="input bg-gray-700 text-gray-200 placeholder:text-gray-400"
          />
          <input
            name="facebook"
            placeholder="Facebook"
            className="input bg-gray-700 text-gray-200 placeholder:text-gray-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn bg-gradient-to-r from-violet-600 to-indigo-500 w-full mt-6 py-2 rounded-lg"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}
