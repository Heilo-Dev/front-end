import React from "react";
import { StarIcon } from "../../icons/student-dashboard/star-icon";

type Props = {};

const FavouriteTutorTile = (props: Props) => {
  return (
    <div className="mb-3 border-b-2 border-[#dddddd] cursor-pointer hover:bg-gray-200 p-4 rounded-tl-2xl">
      <div className="flex items-center text-textSecondary font-semibold text-xs justify-between">
        <p>1. Adnan Ali</p>
        <p className="flex items-center">
          <StarIcon className="text-[#FEDB41] w-4 h-4 -mt-0.5 mr-1" /> 4.5
        </p>
        <p>Topic- Mathematics</p>
        <p>BUET</p>
      </div>
    </div>
  );
};

export default FavouriteTutorTile;
