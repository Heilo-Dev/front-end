import React from "react";

// @@ internal imports @@ //
import { StarIcon } from "@components/icons/student-dashboard/star-icon";

type Props = {
  rating: number;
};

const AverageRating = ({ rating }: Props) => {
  return (
    <div className="flex flex-col items-center pt-5">
      <div className="flex items-center justify-center rounded-full w-[150px] h-[150px] bg-white border-primaryDark border-8">
        <h1 className="mt-1 text-4xl text-primaryDark font-bold">{rating}</h1>{" "}
        <StarIcon className="text-[#FEDB41] w-8 h-8" />
      </div>
      <h1 className="text-[#7d7d7d] mt-2">AVERAGE RATING</h1>
    </div>
  );
};

export default AverageRating;
