import Link from "next/link";
import React from "react";
import EditProfile from "./EditProfile";
import Avatar from "@/assets/avatar.png";
import Image from "next/image";

const ProfileInformation = ({ profile }) => {
  console.log(profile);

  if (profile) {
    return (
      <section className="max-w-5xl mx-auto bg-gradient-to-b from-[#0b1220] via-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border-b border-gray-800 p-8 text-center">
          {/* Avatar + Name */}
          <div className="flex flex-col items-center">
            <Image
              src={profile?.image || Avatar}
              alt={profile?.name}
              width={100}
              height={100}
              className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-lg mb-4"
            />

            <h1 className="text-4xl font-bold text-white">
              {profile.name || "Candidate"}
            </h1>

            <p className="text-indigo-400 mt-2 text-lg">
              Professional Candidate Profile
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-5 text-sm">
            <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300">
              {profile.email}
            </span>

            <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300">
              {profile.phone}
            </span>

            <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 capitalize">
              {profile.gender}
            </span>
          </div>
        </div>

        <div className="p-8 md:p-10 space-y-8">
          {/* Professional Information */}
          <div>
            <h3 className="text-xl font-semibold text-white border-b border-gray-800 pb-3 mb-5">
              Professional Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/40 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">Education</p>
                <p className="text-white mt-1">{profile.education}</p>
              </div>

              <div className="bg-gray-800/40 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">Experience</p>
                <p className="text-white mt-1">{profile.experience} Years</p>
              </div>

              <div className="bg-gray-800/40 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">Expected Salary</p>
                <p className="text-white mt-1">{profile.salary}</p>
              </div>

              <div className="bg-gray-800/40 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">Gender</p>
                <p className="text-white mt-1 capitalize">{profile.gender}</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-white border-b border-gray-800 pb-3 mb-5">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {profile.skills?.split(",")?.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Links */}
          <div>
            <h3 className="text-xl font-semibold text-white border-b border-gray-800 pb-3 mb-5">
              Professional Links
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {profile.resume && (
                <Link
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800/40 hover:bg-gray-800 transition rounded-xl p-4 border border-gray-700"
                >
                  <p className="text-white font-medium">Resume</p>
                  <p className="text-gray-500 text-sm mt-1">View Resume</p>
                </Link>
              )}

              {profile?.github && (
                <Link
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800/40 hover:bg-gray-800 transition rounded-xl p-4 border border-gray-700"
                >
                  <p className="text-white font-medium">GitHub</p>
                  <p className="text-gray-500 text-sm mt-1">
                    View GitHub Profile
                  </p>
                </Link>
              )}

              {profile.linkedin && (
                <Link
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800/40 hover:bg-gray-800 transition rounded-xl p-4 border border-gray-700"
                >
                  <p className="text-white font-medium">LinkedIn</p>
                  <p className="text-gray-500 text-sm mt-1">
                    View LinkedIn Profile
                  </p>
                </Link>
              )}

              {profile.portfolio && (
                <Link
                  href={profile.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800/40 hover:bg-gray-800 transition rounded-xl p-4 border border-gray-700"
                >
                  <p className="text-white font-medium">Portfolio</p>
                  <p className="text-gray-500 text-sm mt-1">Visit Portfolio</p>
                </Link>
              )}

              {profile.facebook && (
                <Link
                  href={profile.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800/40 hover:bg-gray-800 transition rounded-xl p-4 border border-gray-700"
                >
                  <p className="text-white font-medium">Facebook</p>
                  <p className="text-gray-500 text-sm mt-1">
                    View Facebook Profile
                  </p>
                </Link>
              )}
            </div>
          </div>

          {/* Edit Button */}
          <div className="pt-4 flex justify-center">
            {/* <button className="btn bg-gradient-to-r from-violet-600 to-indigo-500 border-none text-white px-8 py-2 rounded-lg">
              Edit Profile
            </button> */}
            <EditProfile profile={profile} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto bg-gradient-to-b from-[#0b1220] via-gray-900 to-black border rounded-2xl p-8 md:p-12 text-center shadow-sm">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-400">
        Share Your Information With Us
      </h2>

      <p className="mt-5 text-gray-500 text-lg leading-8 max-w-3xl mx-auto">
        This platform gives you the opportunity to search, apply, and connect
        with more than <span className="font-semibold">5,000+</span> job
        opportunities. To help recruiters evaluate your profile and increase
        your chances of getting hired, please provide your personal, academic,
        and professional information.
      </p>

      <Link href={"/dashboard/profile/create"}>
        <button className="btn bg-gradient-to-r from-violet-600 to-indigo-500 rounded-lg mt-8 px-8 py-2 cursor-pointer text-white">
          Create Your Profile
        </button>
      </Link>
    </section>
  );
};

export default ProfileInformation;
