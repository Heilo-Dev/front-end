import Image from "next/image";
import React from "react";

// @@ internal imports @@ //
import tutor from "@assets/img/Maximilien-Robespierre 6.png";
type Props = {};

const Notifications = (props: Props) => {
  return (
    <div className="flex justify-around bg-[#B4F4DD] rounded-xl p-2 mt-2">
      <Image height={50} src={tutor} alt="tutor picture" />
      <p className="ml-2">
        You have received a tution request from Salsabil Murshed.
      </p>
    </div>
  );
};

export default Notifications;
