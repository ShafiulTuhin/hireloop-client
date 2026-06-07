"use client";

import { useState } from "react";

const PricingHome = () => {
  const [activeTab, setActiveTab] = useState("seeker");

  const seekerPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      features: [
        "Browse & save up to 10 jobs",
        "Apply to up to 3 jobs/month",
        "Basic profile",
        "Email alerts",
      ],
      popular: false,
    },
    {
      name: "Pro",
      id: "seeker_pro",
      price: "$19",
      period: "/month",
      features: [
        "Apply to up to 30 jobs/month",
        "Unlimited saved jobs",
        "Application tracking",
        "Salary insights",
      ],
      popular: true,
    },
    {
      name: "Premium",
      id: "seeker_premium",
      price: "$39",
      period: "/month",
      features: [
        "Unlimited applications",
        "Profile boost",
        "Early access to jobs",
        "Priority support",
      ],
      popular: false,
    },
  ];

  const recruiterPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      features: [
        "3 active job posts",
        "Basic applicant management",
        "Standard visibility",
        "Perfect for startups",
      ],
      popular: false,
    },
    {
      name: "Growth",
      id: "recruiter_growth",
      price: "$49",
      period: "/month",
      features: [
        "10 active job posts",
        "Applicant tracking",
        "Basic analytics",
        "Email support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      id: "recruiter_enterprise",
      price: "$149",
      period: "/month",
      features: [
        "50 active job posts",
        "Advanced analytics",
        "Featured listings",
        "Team collaboration",
        "Custom branding",
        "Priority support",
      ],
      popular: false,
    },
  ];
  const plans = activeTab === "seeker" ? seekerPlans : recruiterPlans;
  return (
    <div className="bg-black min-h-screen py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Choose Your Plan
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Unlock premium features and accelerate your hiring or job search
            journey.
          </p>
        </div>
        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div className="bg-[#0b1220] border border-zinc-800 p-2 rounded-2xl flex gap-2">
            <button
              onClick={() => setActiveTab("seeker")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "seeker"
                  ? "bg-gradient-to-r from-violet-600 to-indigo-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Job Seeker
            </button>

            <button
              onClick={() => setActiveTab("recruiter")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "recruiter"
                  ? "bg-gradient-to-r from-violet-600 to-indigo-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Recruiter
            </button>
          </div>
        </div>
        {/* <PricingTab /> */}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-b from-[#0b1220] via-gray-900 to-black border rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-violet-500/20 ${
                plan.popular ? "border-violet-500 scale-105" : "border-zinc-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-1 rounded-full text-sm text-white font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {plan.name}
                </h3>

                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>

                  <span className="text-gray-400 mb-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <form action="/api/checkout_sessions" method="POST">
                <input type="hidden" name="plan_id" value={plan.id} />
                <section>
                  <button
                    type="submit"
                    role="link"
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:opacity-90"
                        : "border border-zinc-700 text-white hover:border-violet-500 hover:bg-violet-500/10"
                    }`}
                  >
                    Checkout
                  </button>
                </section>
              </form>
            </div>
          ))}
        </div>
        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-violet-600/10 to-indigo-500/10 border border-violet-500/20 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Grow Faster?
            </h2>

            <p className="text-gray-400 mb-6">
              Join thousands of professionals and companies already using our
              platform.
            </p>

            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold hover:opacity-90 transition">
              Start Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHome;
