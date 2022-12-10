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

type Props = {};

const AdminSidebar = (props: Props) => {
  const router = useRouter();
  return (
    <div className="h-full w-40 flex flex-col items-center justify-between">
      <div className="mt-4 mr-3 cursor-pointer">
        <LocalImage src={logo} width={100} />
      </div>

      <ul className="w-full h-96">
        <AdminMenuItem icon={<Laptop width={28} />} path="/admin/teacher" />
        <AdminMenuItem
          icon={<ProfileIcon width={22} />}
          path="/teacher/dashboard/profile"
        />
        <AdminMenuItem
          icon={<EditProfileIcon width={30} />}
          path="/teacher/dashboard/edit-profile"
        />
        <AdminMenuItem
          icon={<WalletIcon width={26} />}
          path="/teacher/dashboard/wallet"
        />
        <AdminMenuItem
          icon={<EmailIcon width={26} />}
          path="/teacher/dashboard/inbox"
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
