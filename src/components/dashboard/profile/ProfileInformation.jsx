// import Link from "next/link";
// import React from "react";

// const ProfileInformation = ({ profile }) => {
//   console.log(profile);

//   return (
//     <section className="max-w-4xl mx-auto bg-gradient-to-b from-[#0b1220] via-gray-900 to-black border rounded-2xl p-8 md:p-12 text-center shadow-sm">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-400">
//         Share Your Information With Us
//       </h2>

//       <p className="mt-5 text-gray-500 text-lg leading-8 max-w-3xl mx-auto">
//         This platform gives you the opportunity to search, apply, and connect
//         with more than <span className="font-semibold">5,000+</span> job
//         opportunities. To help recruiters evaluate your profile and increase
//         your chances of getting hired, please provide your personal, academic,
//         and professional information.
//       </p>
//       <Link href={"/dashboard/profile/create"}>
//         {" "}
//         <button className="btn bg-gradient-to-r from-violet-600 to-indigo-500 rounded-lg mt-8 px-8 py-2 cursor-pointer">
//           Create Your Profile
//         </button>
//       </Link>
//     </section>
//   );
// };

// export default ProfileInformation;
import Link from "next/link";
import React from "react";

const ProfileInformation = ({ profile }) => {
  console.log(profile);

  // ✅ IF PROFILE EXISTS → show profile
  if (profile) {
    return (
      <section className="max-w-4xl mx-auto bg-gradient-to-b from-[#0b1220] via-gray-900 to-black border rounded-2xl p-8 md:p-12 text-left shadow-sm text-gray-300">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-400 text-center mb-8">
          My Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
          <p>
            <span className="font-semibold">Name:</span> {profile.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {profile.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {profile.phone}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {profile.gender}
          </p>
          <p>
            <span className="font-semibold">Education:</span>{" "}
            {profile.education}
          </p>
          <p>
            <span className="font-semibold">Experience:</span>{" "}
            {profile.experience} years
          </p>
          <p>
            <span className="font-semibold">Skills:</span> {profile.skills}
          </p>
          <p>
            <span className="font-semibold">Salary:</span> {profile.salary}
          </p>

          <p>
            <span className="font-semibold">Resume:</span>{" "}
            <a
              href={profile.resume}
              target="_blank"
              className="text-blue-400 underline"
            >
              View Resume
            </a>
          </p>

          <p>
            <span className="font-semibold">GitHub:</span>{" "}
            <a
              href={profile.github}
              target="_blank"
              className="text-blue-400 underline"
            >
              {profile.github || "N/A"}
            </a>
          </p>

          <p>
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href={profile.linkedin}
              target="_blank"
              className="text-blue-400 underline"
            >
              {profile.linkedin || "N/A"}
            </a>
          </p>

          <p>
            <span className="font-semibold">Portfolio:</span>{" "}
            <a
              href={profile.portfolio}
              target="_blank"
              className="text-blue-400 underline"
            >
              {profile.portfolio || "N/A"}
            </a>
          </p>

          <p>
            <span className="font-semibold">Facebook:</span>{" "}
            <a
              href={profile.facebook}
              target="_blank"
              className="text-blue-400 underline"
            >
              {profile.facebook || "N/A"}
            </a>
          </p>
        </div>

        {/* Optional button area (you can use later) */}
        <div className="mt-8 flex justify-center">
          <button className="btn bg-indigo-600 text-white px-6">
            Edit Profile
          </button>
        </div>
      </section>
    );
  }

  // ❌ NO PROFILE → YOUR ORIGINAL DESIGN
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
        <button className="btn bg-gradient-to-r from-violet-600 to-indigo-500 rounded-lg mt-8 px-8 py-2 cursor-pointer">
          Create Your Profile
        </button>
      </Link>
    </section>
  );
};

export default ProfileInformation;
