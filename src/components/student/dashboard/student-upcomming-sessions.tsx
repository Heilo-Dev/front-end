import React from "react";

// @@ internal imports @@ //
import Scrollbar from "@components/ui/scrollbar";
import SessionTile from "./session-tile";

type Props = {};

const StudentUpcommingSessions = (props: Props) => {
  return (
    <div className="grayDiv sm:mt-8 mt-3 p-1 w-full px-3">
      <h1 className="text-textSecondary bg-white titleTab font-semibold my-2">
        Upcoming Sessions
      </h1>
      <div className="px-5 hidden sm:block">
        <Scrollbar style={{ height: "calc(100vh - 360px)" }}>
          <SessionTile />
          <SessionTile />
          <SessionTile />
          <SessionTile />
          <SessionTile />
          <SessionTile />
          <SessionTile />
          <SessionTile />
        </Scrollbar>
      </div>
      <div className="px-3 sm:hidden">
        <Scrollbar style={{ height: "calc(100vh - 160px)" }}>
          <SessionTile />
          <SessionTile />
          <SessionTile />
          <SessionTile />
          <SessionTile />
          <SessionTile />
          <SessionTile />
          <SessionTile />
        </Scrollbar>
      </div>
    </div>
  );
};

export default StudentUpcommingSessions;
