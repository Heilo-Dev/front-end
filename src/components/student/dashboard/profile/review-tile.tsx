import React from "react";

// @@ internal imports @@ //
import ReviewerPic from "@assets/img/tutor.png";
import { LocalImage } from "@components/image-snippents";

type Props = {};

const ReviewTile = (props: Props) => {
  return (
    <div className="grayDiv rounded-full mb-3 px-5 py-2 w-64 flex items-center">
      <div>
        <LocalImage src={ReviewerPic} width={45} />
      </div>
      <div className="ml-5">
        <h2 className="font-semibold text-textSecondary text-sm">Imran Khan</h2>
        <h2 className="font-light text-textSecondary text-sm">Class 6, DRMC</h2>
      </div>
    </div>
  );
};

export default ReviewTile;
