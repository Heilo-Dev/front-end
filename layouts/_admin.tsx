import {
  EditProfileIcon,
  EmailIcon,
  LocalImage,
  LogoutIcon,
  Notification,
  StudentSidebar,
  TeacherSidebar,
  WalletIcon,
} from "../components";
import profiePic from "../assets/img/tutor.png";
import logo from "../assets/img/logo-white.png";
import AdminSidebar from "../components/admin/sidebar";
import { HamburgerMenu } from "../components/icons/hamburger";
import { useState } from "react";
import { Router, useRouter } from "next/router";
import { signOut } from "next-auth/react";
import AdminMenuItem from "../components/admin/admin-mentu-item";
import { AdminContactIcon } from "../components/icons/admin-sideber/contact-icon";
import { AdminHomeIcon } from "../components/icons/admin-sideber/home-icon";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="lg:hidden h-full sm:flex flex-col items-center justify-center relative">
        <div className="bg-white fixed w-full z-10">
          <div className="m-3">
            <button onClick={() => setOpen(true)}>
              <HamburgerMenu width={38} />
            </button>
          </div>
          <div
            className={
              !open
                ? "bg-primaryDark hidden w-fit top-0 z-10"
                : "bg-primaryDark w-fit  fixed top-0 z-10"
            }
          >
            <div className="min-h-screen w-44 lg:w-24 flex flex-col items-center justify-between">
              <div className="mt-4  cursor-pointer flex justify-around w-full">
                <LocalImage src={logo} width={80} />
                <button onClick={() => setOpen(false)} className="text-white">
                  X
                </button>
              </div>

              <ul className="w-full h-96">
                <AdminMenuItem
                  icon={<AdminHomeIcon width={28} />}
                  path="/admin"
                />
                <AdminMenuItem
                  icon={<EditProfileIcon width={30} />}
                  path="/admin/quiz"
                />
                <AdminMenuItem
                  icon={<WalletIcon width={26} />}
                  path="/admin/teacher"
                />
                <AdminMenuItem
                  icon={<EmailIcon width={26} />}
                  path="/admin/student"
                />
                <AdminMenuItem
                  icon={<AdminContactIcon width={26} />}
                  path="/admin/contact"
                />
              </ul>

              <div>
                <button
                  onClick={() => {
                    signOut({ redirect: false });
                    router.push("/");
                  }}
                  className="flex items-center mr-5"
                >
                  <div className="bg-white py-3 px-3 h-20 rounded-tl-full rounded-tr-full">
                    <LogoutIcon width={26} className="text-primaryDark" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="h-full">
            <div className="h-full bg-white rounded-l-3xl">{children}</div>
          </div>
        </div>
      </div>
      <div className="bg-primaryDark h-screen hidden lg:visible lg:flex pl-4">
        {/* <StudentSidebar /> */}
        <AdminSidebar />
        <div className="w-full">
          <div className="h-full">
            <div className="h-full bg-white rounded-l-3xl">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
