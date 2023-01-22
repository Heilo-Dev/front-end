import React from "react";

// @@ internal imports @@ //
import profilePic from "@assets/img/tutor.png";
import { LocalImage } from "@components/image-snippents";
import { CircleCrossIcon } from "@components/icons/teacher-dashboard/circle-cross-icon";
import { CircleCheckIcon } from "@components/icons/teacher-dashboard/circle-check-icon";

type Props = {};

const TutionRequestTile = (props: Props) => {
  return (
    <div className="mb-3.5 cursor-pointer hover:bg-gray-200 py-2 px-1 border-b-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center ml-3">
          <div className="mr-4">
            <LocalImage src={profilePic} width={45} />
          </div>

          <div className="mr-3">
            <h1 className="text-textSecondary font-semibold text-sm">
              Ruhul Tusar
            </h1>
            <h1 className="my-1 text-textSecondary text-sm">Class- 10</h1>
          </div>

          <div className="mr-3">
            <h1 className="text-primaryDark font-semibold text-sm">
              Date : 10-22 -2021 I 5:30 pm
            </h1>
            <h1 className="my-1 font-light text-textSecondary text-sm">
              Polygons I Gerometry I Maths B
            </h1>
          </div>
        </div>

        <div>
          <CircleCrossIcon className="w-5 text-[#D7443E] mb-1.5" />
          <CircleCheckIcon className="w-5 text-[#3BB54A]" />
        </div>
      </div>
    </div>
  );
};

export default TutionRequestTile;
