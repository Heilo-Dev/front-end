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
} from "../../../components";
import { LocalImage } from "../../image-snippents";
import classNames from "classnames";
import { LegacyRef } from "react";

type Props = {
    setSideMenuOpen?: any;
    className?: string;
    Ref?: LegacyRef<HTMLDivElement> | undefined;
};

const Sidebar = ({ setSideMenuOpen, className, Ref }: Props) => {
    const router = useRouter();
    return (
        <div className={className}>
            <div
                ref={Ref}
                className="h-full w-60 flex flex-col items-center justify-between sm:bg-transparent bg-primaryDark"
            >
                <div className=" relative w-full flex justify-center items-center">
                    <div className="mt-4 mr-3 cursor-pointer">
                        <LocalImage src={logo} width={100} />
                    </div>
                    <div
                        onClick={() =>
                            setSideMenuOpen((prev: boolean) => !prev)
                        }
                        className="block sm:hidden absolute top-2 right-2 w-fit h-fit cursor-pointer"
                    >
                        <svg
                            viewBox="0 0 512 512"
                            fill="#fff"
                            height="1.5em"
                            width="1.5em"
                        >
                            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
                        </svg>
                    </div>
                </div>

                <ul className="w-full h-96">
                    <DashboardMenuItem
                        title="on demand"
                        icon={<GraduationCap width={30} />}
                        path="/student/dashboard/student-find-tutor"
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
                            localStorage.removeItem("heiloUserToken");
                            router.push("/");
                        }}
                        className="flex items-center mr-5"
                    >
                        <div className="bg-white py-5 px-3 h-20 rounded-tl-full rounded-tr-full flex items-center">
                            <LogoutIcon
                                width={26}
                                className="text-primaryDark"
                            />
                        </div>
                        <h1 className="ml-2.5 text-white">Log Out</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
