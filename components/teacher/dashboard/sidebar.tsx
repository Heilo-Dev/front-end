import { useRouter } from "next/router";
import logo from "../../../assets/img/logo-white.png";
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
} from "../../../components";
import { LocalImage } from "../../image-snippents";

type Props = {};

const TeacherSidebar = (props: Props) => {
  const router = useRouter();
  return (
    <div className="h-full w-60 flex flex-col items-center justify-between">
      <div className="mt-4 mr-3 cursor-pointer">
        <LocalImage src={logo} width={100} />
      </div>

      <ul className="w-full h-96">
        <DashboardMenuItem
          title="dashboard"
          icon={<Laptop width={28} />}
          path="/teacher/dashboard"
        />
        <DashboardMenuItem
          title="profile"
          icon={<ProfileIcon width={22} />}
          path="/teacher/dashboard/profile"
        />
        <DashboardMenuItem
          title="edit-profile"
          icon={<EditProfileIcon width={30} />}
          path="/teacher/dashboard/edit-profile"
        />
        <DashboardMenuItem
          title="Wallet"
          icon={<WalletIcon width={26} />}
          path="/teacher/dashboard/wallet"
        />
        <DashboardMenuItem
          title="inbox"
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
          <div className="bg-white py-5 px-3 h-20 rounded-tl-full rounded-tr-full flex items-center">
            <LogoutIcon width={26} className="text-primaryDark" />
          </div>
          <h1 className="ml-2.5 text-white">Log Out</h1>
        </button>
      </div>
    </div>
  );
};

export default TeacherSidebar;
