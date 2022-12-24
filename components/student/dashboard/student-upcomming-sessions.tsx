import React from "react";
import Scrollbar from "../../ui/scrollbar";
import SessionTile from "./session-tile";

type Props = {};

const StudentUpcommingSessions = (props: Props) => {
  return (
    <div className="grayDiv mt-8 p-1 w-full px-3">
      <h1 className="text-textSecondary bg-white titleTab font-semibold my-2">
        Upcoming Sessions
      </h1>
      <div className="px-5">
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
    </div>
  );
};

export default StudentUpcommingSessions;
