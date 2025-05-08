import { Outlet } from "react-router-dom";
import { AuthenticatedSidebar } from "@/components/AuthenticatedSidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <div className="fixed flex h-screen w-64">
        <AuthenticatedSidebar />
      </div>
      <div className="ml-64 flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;