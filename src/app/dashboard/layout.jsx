import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import User from "@/components/dashboard/User";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    // <div className="flex flex-col md:flex-row w-full min-h-screen">
    //   {/* Sidebar */}
    //   <aside className="w-full md:w-[260px] shrink-0">
    //     <DashboardSidebar />
    //   </aside>

    //   {/* Main */}
    //   <main className="flex-1 min-w-0 w-full min-h-screen">{children}</main>
    // </div>
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <aside className="hidden md:block w-[260px] shrink-0 bg-black text-white min-h-screen">
        <DashboardSidebar />
      </aside>

      {/* Mobile Top + Main */}
      <main className="flex-1 min-w-0 w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#0b1220] p-4">
        {/* Mobile Sidebar Placeholder (optional) */}
        <div className="md:hidden mb-4">
          <DashboardSidebar />
        </div>

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
