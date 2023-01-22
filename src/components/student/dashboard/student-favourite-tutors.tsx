import React from "react";

// @@ internal imports @@ //
import StarBanner from "@assets/img/star-banner.png";
import { LocalImage } from "@components/image-snippents";
import Scrollbar from "@components/ui/scrollbar";
import FavouriteTutorTile from "./favourite-tutor-tile";

type Props = {};

const StudentFavouriteTutors = (props: Props) => {
  return (
    <div className="grayDiv mt-8 p-2 pt-0 w-full px-5">
      <div className="flex items-center mb-3">
        <LocalImage src={StarBanner} width={45} />
        <h1 className="text-xl text-[#DA4453] font-semibold ml-3">
          Favourite Tutors List
        </h1>
      </div>
      <Scrollbar style={{ height: "calc(100vh - 385px)" }}>
        <FavouriteTutorTile />
        <FavouriteTutorTile />
        <FavouriteTutorTile />
        <FavouriteTutorTile />
        <FavouriteTutorTile />
        <FavouriteTutorTile />
        <FavouriteTutorTile />
        <FavouriteTutorTile />
        <FavouriteTutorTile />
        <FavouriteTutorTile />
        <FavouriteTutorTile />
        <FavouriteTutorTile />
        <FavouriteTutorTile />
      </Scrollbar>
    </div>
  );
};

export default StudentFavouriteTutors;
