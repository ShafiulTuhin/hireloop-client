"use client";

import { updateCompanyStatus } from "@/lib/actions/company";
import { useState } from "react";

const AdminCompanyList = ({ companies }) => {
  const [data, setData] = useState(companies);

  // change status locally
  const handleStatusChange = (id, value) => {
    const updated = data.map((company) =>
      company._id === id ? { ...company, status: value } : company,
    );

    setData(updated);
  };

  // send update (API / server action)
  const handleUpdate = async (id) => {
    const company = data.find((c) => c._id === id);
    const updateCompany = await updateCompanyStatus(id, company.status);
    console.log(updateCompany);
  };

  return (
    <div>
      {data.map((company) => (
        <div key={company._id} className="mb-4">
          <h2 className="text-white">Company Name: {company.companyname}</h2>

          {/* SELECT */}
          <select
            value={company.status}
            className="text-white bg-black border"
            onChange={(e) => handleStatusChange(company._id, e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>

          {/* UPDATE BUTTON */}
          <button
            onClick={() => handleUpdate(company._id)}
            className="ml-2 bg-blue-600 text-white px-3 py-1 rounded"
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminCompanyList;
