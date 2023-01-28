import {
    LocalImage,
    Notification,
    StudentSidebar,
    TeacherSidebar,
} from "../components";
import profiePic from "../assets/img/tutor.png";
import { useEffect, useRef, useState, RefObject } from "react";
import classNames from "classnames";
import { MobileMenuIcon } from "../components/icons/student-dashboard/MobileMenuIcon";
import Link from "next/link";

type Props = {
    children?: React.ReactNode;
};

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: Event) => void
) => {
    useEffect(() => {
        const listener = (event: Event) => {
            const el = ref?.current;
            if (!el || el.contains((event?.target as Node) || null)) {
                return;
            }

            handler(event); // Call the handler only if the click is outside of the element passed.
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]); // Reload only if ref or handler changes
};

const DashboardLayout = ({ children }: Props) => {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const menuList = [
        {
            Icon: "M",
            routePath: "/mess",
        },
        {
            Icon: "H",
            routePath: "/home",
        },
        {
            Icon: "N",
            routePath: "/notif",
        },
    ];
    const squareBoxRef = useRef<HTMLDivElement>(null);

    const clickOutsidehandler = () => {
        setSideMenuOpen(() => false);
    };
    useOnClickOutside(squareBoxRef, clickOutsidehandler);
    return (
        <>
            <div className="sm:bg-primaryDark h-[100vh] sm:h-screen flex p-5 sm:p-4 pb-0 relative">
                <StudentSidebar className={"hidden sm:block"} />

                <StudentSidebar
                    Ref={squareBoxRef}
                    setSideMenuOpen={setSideMenuOpen}
                    className={classNames(
                        sideMenuOpen
                            ? "w-full opacity-100 visible translate-x-0 before:bg-black before:opacity-40 before:w-full before:h-full before:content-[''] before:absolute before:-z-10"
                            : "w-0 opacity-0 invisible -translate-x-20 before:w-0",
                        "absolute top-0 left-0 block lg:hidden h-[100vh]   transition-all duration-200 ease-in-out z-50"
                    )}
                />

                {/* <TeacherSidebar /> */}
                <div className=" absolute bottom-0 right-0 w-full h-[50px] bg-primaryDark z-40 sm:hidden ">
                    <ul className="h-full flex justify-around items-center">
                        {menuList?.map((element, i) => (
                            <li key={i}>
                                <Link
                                    href={element?.routePath}
                                    className=" relative "
                                >
                                    <div
                                        className={classNames(
                                            element?.routePath === "/home"
                                                ? " bg-white -translate-y-6 rounded-full shadow-[0px_0px_6px_2px_rgba(0,0,0,0.25)] w-[48px] h-[48px] flex justify-center items-center   "
                                                : "w-[48px]",
                                            " text-center !z-20"
                                        )}
                                    >
                                        {element?.Icon}
                                    </div>
                                    {element?.routePath === "/home" ? (
                                        <div className="-z-10 absolute -top-[1px] -right-[11px] w-[70px] h-16  overflow-hidden bg-transparent rounded-br-[20px]">
                                            <div className=" w-[70px] h-[70px] bg-[#fff] -translate-y-[38px] rotate-45 rounded-tr-[36px]  rounded-bl-[36px] rounded-br-[28px]"></div>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full h-full">
                    <div className="pb-4 h-full w-full">
                        <div className="h-full w-full bg-white rounded-3xl  sm:py-3 sm:px-7">
                            <div className="w-full flex justify-between sm:justify-end items-center">
                                <div
                                    onClick={() =>
                                        setSideMenuOpen(
                                            (prev: boolean) => !prev
                                        )
                                    }
                                    className=" w-fit block sm:hidden cursor-pointer"
                                >
                                    <MobileMenuIcon />
                                </div>
                                <div className="flex justify-end items-center">
                                    <Notification className="w-5 mr-5 text-primaryLight hidden sm:block" />
                                    <div className="bg-primaryLight p-0.5 rounded-full">
                                        <LocalImage
                                            src={profiePic}
                                            width={40}
                                        />
                                    </div>
                                </div>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
