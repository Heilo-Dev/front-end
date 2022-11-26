import cn from "classnames";
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
} from "../../../components";
import { LocalImage } from "../../image-snippents";

type Props = {};

const Sidebar = (props: Props) => {
  const router = useRouter();
  return (
    <div className="h-full w-60 flex flex-col items-center justify-between">
      <div className="mt-4 mr-3 cursor-pointer">
        <LocalImage src={logo} width={100} />
      </div>

      <ul className="w-full h-96">
        <DashboardMenuItem
          title="on demand"
          icon={<GraduationCap width={30} />}
          path="/student/dashboard/on-demand"
        />
        <DashboardMenuItem
          title="quiz"
          icon={<ClipBoardListCheck width={22} />}
          path="/student/dashboard/quiz"
        />
        <DashboardMenuItem
          title="dashboard"
          icon={<Laptop width={28} />}
          path="/student/dashboard"
        />
        <DashboardMenuItem
          title="profile"
          icon={<ProfileIcon width={22} />}
          path="/student/dashboard/profile"
        />
        <DashboardMenuItem
          title="edit-profile"
          icon={<EditProfileIcon width={30} />}
          path="/student/dashboard/edit-profile"
        />
        <DashboardMenuItem
          title="inbox"
          icon={<EmailIcon width={26} />}
          path="/student/dashboard/inbox"
        />
      </ul>

      <div>
        <button
          onClick={() => {
            signOut({ redirect: false });
            router.push("/");
          }}
          className="text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
