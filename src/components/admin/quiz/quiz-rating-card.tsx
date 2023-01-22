import React from "react";

// @@ internal imports @@ //
import profilePic from "@assets/img/tutor.png";
import { LocalImage } from "@components/image-snippents";
import { StarIcon } from "@components/icons/student-dashboard/star-icon";

type Props = {};

const QuizRatingCard = (props: Props) => {
  return (
    <div className="mb-4 flex">
      <div className="flex flex-col items-center justify-between mr-4 w-40 text-center">
        <LocalImage width={60} src={profilePic} />
        <h1 className="mt-1.5 text-xs text-textSecondary whitespace-nowrap">
          Mohaiminul Islam Shishir
        </h1>
      </div>
      <div className="flex flex-col items-start justify-between w-full">
        <span className="flex items-center space-x-2">
          <StarIcon className="text-[#FEDB41] w-5 h-5" />
          <StarIcon className="text-[#FEDB41] w-5 h-5" />
          <StarIcon className="text-[#FEDB41] w-5 h-5" />
          <StarIcon className="text-[#FEDB41] w-5 h-5" />
          <StarIcon className="text-textSecondary w-5 h-5" />
        </span>
        <p className="mt-2 text-xs text-textSecondary">
          Lorem ipsum dolor sit amet, elit. Tortor sem. At platea erat diam sed
          proin.
        </p>
      </div>
    </div>
  );
};

export default QuizRatingCard;
