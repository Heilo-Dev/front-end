import {
  LocalImage,
  Notification,
  StudentSidebar,
  TeacherSidebar,
} from "../components";
import profiePic from "../assets/img/tutor.png";
import AdminSidebar from "../components/admin/sidebar";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-primaryDark h-screen flex pl-4">
        {/* <StudentSidebar /> */}
          <AdminSidebar />
        <div className="w-full">
          <div className="h-full">
            <div className="h-full bg-white rounded-l-3xl">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
