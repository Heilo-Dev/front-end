import React from "react";

// @@ internal imports @@ //
import Trophy from "@assets/img/trophy.png";
import { LocalImage } from "@components/image-snippents";
import Scrollbar from "@components/ui/scrollbar";
import TutionCompletedTile from "./tution-completed-tile";

type Props = {};

const StudentTutionCompleted = (props: Props) => {
  return (
    <div className="grayDiv mt-8 p-2 w-full px-5">
      <div className="flex items-center my-3">
        <LocalImage src={Trophy} width={35} />
        <h1 className="text-xl text-[#DA4453] font-semibold ml-3">
          Tution Completed
        </h1>
      </div>
      <Scrollbar style={{ height: "calc(100vh - 385px)" }}>
        <TutionCompletedTile />
        <TutionCompletedTile />
        <TutionCompletedTile />
        <TutionCompletedTile />
        <TutionCompletedTile />
        <TutionCompletedTile />
        <TutionCompletedTile />
        <TutionCompletedTile />
        <TutionCompletedTile />
        <TutionCompletedTile />
        <TutionCompletedTile />
        <TutionCompletedTile />
      </Scrollbar>
    </div>
  );
};

export default StudentTutionCompleted;
