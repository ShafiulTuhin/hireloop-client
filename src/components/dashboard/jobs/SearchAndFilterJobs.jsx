"use client";

import { useRouter, useSearchParams } from "next/navigation";
import JobCard from "./JobCard";

const SearchAndFilterJobs = ({ jobs, categories, locations }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ---------------- UPDATE URL ----------------
  const updateParams = (key, value, isMulti = true) => {
    const params = new URLSearchParams(searchParams.toString());

    if (isMulti) {
      let selected = params.get(key)?.split(",") || [];

      if (selected.includes(value)) {
        selected = selected.filter((v) => v !== value);
      } else {
        selected.push(value);
      }

      if (selected.length) {
        params.set(key, selected.join(","));
      } else {
        params.delete(key);
      }
    } else {
      params.set(key, value);
    }

    router.push(`/jobs?${params.toString()}`);
  };

  // ---------------- SALARY ----------------

  const handleSalary = (min, max) => {
    const params = new URLSearchParams(searchParams.toString());

    const currentMin = params.get("minSalary");
    const currentMax = params.get("maxSalary");

    const newMin = String(min);
    const newMax = max !== null && max !== undefined ? String(max) : null;

    // 🔥 TOGGLE OFF
    if (currentMin === newMin && (currentMax || null) === newMax) {
      params.delete("minSalary");
      params.delete("maxSalary");
      router.push(`/jobs?${params.toString()}`);
      return;
    }

    // 🔥 SET NEW VALUE
    params.set("minSalary", newMin);

    if (newMax) {
      params.set("maxSalary", newMax);
    } else {
      params.delete("maxSalary");
    }

    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#0b1220] text-white">
      {/* ================= TOP SEARCH ================= */}
      <div className="w-full border-b border-zinc-800 bg-black/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <form className="flex gap-3" action="/jobs" method="GET">
            <input
              name="search"
              defaultValue={searchParams.get("search") || ""}
              placeholder="Search jobs..."
              className="w-full px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white outline-none"
            />

            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-gradient-to-r
                from-violet-600
                to-indigo-500 hover:bg-violet-700 transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="lg:col-span-3 space-y-6">
          {/* CATEGORY */}
          <div className="p-4 rounded-xl border border-zinc-800 bg-gradient-to-b from-black via-gray-900 to-[#0b1220]">
            <h3 className="font-semibold mb-3">Category</h3>

            <div className="space-y-2 text-sm text-zinc-300">
              {categories.map((cat, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={searchParams
                      .get("category")
                      ?.split(",")
                      .includes(cat)}
                    onChange={() => updateParams("category", cat)}
                  />
                  <span className="capitalize">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* SALARY */}
          <div className="p-4 rounded-xl border border-zinc-800 bg-gradient-to-b from-black via-gray-900 to-[#0b1220]">
            <h3 className="font-semibold mb-3">Salary Range</h3>

            <div className="space-y-2 text-sm text-zinc-300">
              <label>
                <input
                  type="radio"
                  name="salary"
                  onChange={() => handleSalary(0, 1000)}
                />{" "}
                0 - 1000
              </label>

              <label>
                <input
                  type="radio"
                  name="salary"
                  onChange={() => handleSalary(1000, 2000)}
                />{" "}
                1000 - 2000
              </label>

              <label>
                <input
                  type="radio"
                  name="salary"
                  onChange={() => handleSalary(2000, 3000)}
                />{" "}
                2000 - 3000
              </label>

              <label>
                <input
                  type="radio"
                  name="salary"
                  onChange={() => handleSalary(3000, null)}
                />{" "}
                3000+
              </label>
            </div>
          </div>

          {/* LOCATION */}
          <div className="p-4 rounded-xl border border-zinc-800 bg-gradient-to-b from-black via-gray-900 to-[#0b1220]">
            <h3 className="font-semibold mb-3">Location</h3>

            <div className="space-y-2 text-sm text-zinc-300">
              {locations.map((loc, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={searchParams
                      .get("location")
                      ?.split(",")
                      .includes(loc)}
                    onChange={() => updateParams("location", loc)}
                  />
                  <span className="capitalize">{loc}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* ================= RIGHT SIDE ================= */}
        <main className="lg:col-span-9">
          <JobCard jobs={jobs} />
        </main>
      </div>
    </div>
  );
};

export default SearchAndFilterJobs;
