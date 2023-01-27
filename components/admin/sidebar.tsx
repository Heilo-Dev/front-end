import { useRouter } from "next/router";
import logo from "../../assets/img/logo-white.png";
import { signOut } from "next-auth/react";
import {
  GraduationCap,
  DashboardMenuItem,
  ClipBoardListCheck,
  Laptop,
  ProfileIcon,
  EditProfileIcon,
  EmailIcon,
  LogoutIcon,
  WalletIcon,
} from "../../components";
import { LocalImage } from "..//image-snippents";
import AdminMenuItem from "./admin-mentu-item";
import { AdminHomeIcon } from "../icons/admin-sideber/home-icon";
import { AdminContactIcon } from "../icons/admin-sideber/contact-icon";

type Props = {};

const AdminSidebar = (props: Props) => {
  const router = useRouter();
  return (
    <div className="h-full w-44 lg:w-24 flex flex-col items-center justify-between">
      <div className="mt-4 mr-3 cursor-pointer">
        <LocalImage src={logo} width={80} />
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
  );
};

export default AdminSidebar;
