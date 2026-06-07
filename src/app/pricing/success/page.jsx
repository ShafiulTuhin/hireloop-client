import { stripe } from "@/lib/stripe";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const {
    status,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    return (
      <section
        id="success"
        className="min-h-screen flex items-center justify-center bg-black px-5"
      >
        <div className="w-full max-w-xl">
          <div className="bg-gradient-to-b from-[#0b1220] via-gray-900 to-black border border-zinc-800 rounded-3xl p-10 text-center shadow-2xl">
            {/* Icon */}
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center mb-6 shadow-lg">
              <span className="text-3xl">✓</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-white mb-3">
              Payment Successful
            </h1>

            <p className="text-gray-400 mb-6">
              Thank you for your subscription. Your plan is now active.
            </p>

            {/* Email Card */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 mb-8">
              <p className="text-sm text-gray-400 mb-2">Confirmation sent to</p>

              <p className="text-white font-semibold break-all">
                {customerEmail}
              </p>
            </div>

            {/* Info Box */}
            <div className="text-left bg-gradient-to-r from-violet-600/10 to-indigo-500/10 border border-violet-500/20 rounded-xl p-5 mb-8">
              <p className="text-sm text-gray-300 leading-relaxed">
                Your subscription is now active. You can start using premium
                features immediately. If you face any issues, contact support
                anytime.
              </p>
            </div>

            {/* Button */}
            <Link
              href="/jobs"
              className="inline-block w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold hover:opacity-90 transition"
            >
              Go to Dashboard
            </Link>

            {/* Footer note */}
            <p className="text-xs text-gray-500 mt-5">
              If you didn’t expect this payment, contact support immediately.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

// import React from "react";

// const SuccessPage = () => {
//   return (
//     <div>
//       <h2>Success page</h2>
//     </div>
//   );
// };

// export default SuccessPage;
