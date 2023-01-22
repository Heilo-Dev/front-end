import React from "react";
import profilePic from "../../../assets/img/tutor.png";
import { LocalImage } from "../../image-snippents";

type Props = {};

const TutionCompletedTile = (props: Props) => {
  return (
    <div className="mb-3 border-2 border-[#C4C4C4] cursor-pointer hover:bg-gray-200 p-1 rounded-2xl">
      <div className="flex items-center text-textSecondary font-semibold text-[10px] justify-between">
        <div className="ml-1">
          <LocalImage src={profilePic} width={35} />
        </div>
        <h1 className="text-primaryDark mx-2">Ruhul Amin Tushar</h1>
        <div className="flex bg-[#B4F4DD] p-3 rounded-xl">
          <h1 className="mr-2">Topic- Mathematics</h1>
          <h1>11-03-2022 (4pm- 6:30 pm)</h1>
        </div>
      </div>
    </div>
  );
};

export default TutionCompletedTile;
