import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GraduationCap } from "../../../components";

type Props = {
  title: string;
  path: string;
  icon: JSX.Element;
};

const DashboardMenuItem = ({ title, path, icon }: Props) => {
  const router = useRouter();
  return (
    <li
      className={cn(
        { "dashboard-menu-item-active": router.pathname === path },
        "relative"
      )}
    >
      <div
        className={cn({
          "bg-primaryDark w-[20px] h-[20px] absolute top-[-20px] right-0 rounded-br-full":
            router.pathname === path,
        })}
      />
      <Link
        className={cn(
          { "bg-white": router.pathname === path },
          //   { "hover:bg-white/80": router.pathname !== path },
          "pl-7 flex items-center p-3 group rounded-tl-full rounded-bl-full"
        )}
        href={path}
      >
        <div
          className={cn(
            { "text-white": router.pathname !== path },
            "mr-5 group-hover:text-black/80"
          )}
        >
          {icon}
        </div>
        <p
          className={cn(
            { "text-white": router.pathname !== path },
            "capitalize group-hover:text-black/80 font-medium"
          )}
        >
          {title}
        </p>
      </Link>
      <div
        className={cn({
          "bg-primaryDark w-[20px] h-[20px] absolute bottom-[-20px] right-0 z-10 rounded-tr-full":
            router.pathname === path,
        })}
      />
    </li>
  );
};

export default DashboardMenuItem;
