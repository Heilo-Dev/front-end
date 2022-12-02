import React from "react";
import { StarIcon, LocalImage } from "../../../../components";
import ReviewerImage from "../../../../assets/img/tutor.png";

type Props = {};

const Review = (props: Props) => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      <div className="absolute top-10 right-10">
        <LocalImage src={ReviewerImage} width={70} />
      </div>
      <div className="w-2/3">
        <span className="flex mb-4 items-center">
          <StarIcon className="text-[#FEDB41] w-5 h-5" />
          <StarIcon className="text-[#FEDB41] w-5 h-5" />
          <StarIcon className="text-[#FEDB41] w-5 h-5" />
          <StarIcon className="text-[#FEDB41] w-5 h-5" />
          <StarIcon className="text-textSecondary w-5 h-5" />
          <p className="font-bold text-textSecondary ml-1.5 text-2xl mt-1.5">/ 4</p>
        </span>
        <p className="text-textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
          vulputate ut mauris sem. At platea erat diam sed proin.
        </p>
      </div>
    </div>
  );
};

export default Review;
