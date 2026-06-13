"use client";

import { updateCompanyStatus } from "@/lib/actions/company";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";

const AdminCompanyList = ({ companies }) => {
  const [data, setData] = useState(companies);
  console.log(data);

  const [search, setSearch] = useState("");
  const ITEMS_PER_PAGE = 10;

  const [currentPage, setCurrentPage] = useState(1);

  // change status locally
  const handleStatusChange = (id, value) => {
    const updated = data?.map((company) =>
      company._id === id ? { ...company, status: value } : company,
    );

    setData(updated);
  };

  // send update (API / server action)
  const handleUpdate = async (id) => {
    const company = data.find((c) => c._id === id);
    const updateCompany = await updateCompanyStatus(id, company.status);
    toast.success("Updated successfully");
    console.log(updateCompany);
  };
  const filteredCompanies = useMemo(() => {
    return data.filter((company) =>
      company.companyname.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  const totalPages = Math.ceil(filteredCompanies.length / ITEMS_PER_PAGE);

  const paginatedCompanies = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCompanies.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCompanies, currentPage]);

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
      <div className="mb-6 flex items-center justify-between px-7 pt-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Company Requests</h2>
          <p className="text-sm text-slate-400">
            Total Companies: {filteredCompanies.length}
          </p>
        </div>

        <input
          type="text"
          placeholder="Search by company name..."
          value={search}
          // onChange={(e) => setSearch(e.target.value)}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-80 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <table className="min-w-full">
        <thead className="border-b border-slate-800 bg-slate-950">
          <tr className="text-left text-sm font-semibold uppercase tracking-wider text-slate-400">
            <th className="px-6 py-4">#</th>
            <th className="px-6 py-4">Company</th>
            <th className="px-6 py-4">Location</th>
            <th className="px-6 py-4">Employees</th>
            <th className="px-6 py-4">Request Sent</th>
            <th className="px-6 py-4 text-right">Status</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedCompanies.map((company, index) => (
            <tr
              key={company._id}
              className="border-b border-slate-800 transition hover:bg-slate-800/50 "
            >
              <td className="px-6 py-5 text-slate-400">{index + 1}</td>

              <td className="px-6 py-5">
                <div>
                  <p className="font-semibold text-white">
                    {company.companyname}
                  </p>
                  <p className="text-xs text-slate-400">{company.email}</p>
                </div>
              </td>

              <td className="px-6 py-5 text-slate-300">{company.location}</td>

              <td className="px-6 py-5 text-slate-300">
                {company.employeeRange}
              </td>

              <td className="px-6 py-5 text-slate-300">
                {new Date(company.createdAt).toLocaleDateString()}
              </td>

              <td className="px-6 py-5 text-center">
                <select
                  value={company.status}
                  onChange={(e) =>
                    handleStatusChange(company._id, e.target.value)
                  }
                  className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-white outline-none transition focus:border-blue-500"
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>

              <td className="px-6 py-5 text-center">
                <button
                  onClick={() => handleUpdate(company._id)}
                  className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-95"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4">
        <p className="text-sm text-slate-400">
          Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
          {Math.min(currentPage * ITEMS_PER_PAGE, filteredCompanies.length)} of{" "}
          {filteredCompanies.length}
        </p>

        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="rounded-md border border-slate-700 px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`h-9 w-9 rounded-md text-sm font-medium ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="rounded-md border border-slate-700 px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCompanyList;
