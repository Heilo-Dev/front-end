import React from "react";
import profilePic from "../../../assets/img/tutor.png";
import { LocalImage } from "../../image-snippents";

type Props = {};

const SessionTile = (props: Props) => {
  return (
    <div className="mb-3 cursor-pointer hover:bg-gray-200 p-1 rounded-2xl">
      <h1 className="titleTab bg-white tabBorder py-1 text-xs">
        27th July, 2021
      </h1>
      <div className="flex flex-col items-center mt-1">
        <div className="flex">
          <div className="mr-6">
            <LocalImage src={profilePic} width={80} />
          </div>
          <div>
            <div className="flex">
              <h1 className="text-textSecondary font-semibold mr-5">
                Ruhul Tusar
              </h1>
              <p className="titleTab border-2 py-0 px-4 text-sm border-[#C7495D]">
                ID 1234
              </p>
            </div>
            <h1 className="my-1">
              <span className="text-textSecondary font-semibold">Topic- </span>
              Polygons I Gerometry I Maths B
            </h1>
            <h1 className="text-primaryLight font-semibold">
              Time- 4:30-5.30 pm
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionTile;
