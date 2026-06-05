import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { getUserSession } from "@/lib/core/session";

import React from "react";

const DashboardLayout = async ({ children }) => {
  const user = await getUserSession();
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <aside className="hidden md:block w-[260px] shrink-0 bg-black text-white min-h-screen">
        <DashboardSidebar user={user} />
      </aside>

      {/* Mobile Top + Main */}
      <main className="flex-1 min-w-0 w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#0b1220] p-4">
        {/* Mobile Sidebar Placeholder (optional) */}
        <div className="md:hidden mb-4">
          <DashboardSidebar user={user} />
        </div>

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
