import React from "react";
import profilePic from "../../../assets/img/tutor.png";
import { LocalImage } from "../../image-snippents";

type Props = {};

const NotificationTile = (props: Props) => {
  return (
    <div className="bg-[#B4F4DD] flex items-center cursor-pointer px-4 py-2 mb-3 rounded-3xl text-textSecondary hover:bg-[#97f8d5]">
      <div>
        <LocalImage width={50} src={profilePic} />
      </div>
      <div className="ml-4">
        <p className="m-0">
          You have received a{" "}
          <span className="font-semibold">tution request</span> from{" "}
        </p>
        <p className="m-0">Salsabil Murshed.</p>
      </div>
    </div>
  );
};

export default NotificationTile;
