import React from "react";
import Scrollbar from "../../ui/scrollbar";
import Session from "./session";

type Props = {};

const CompletedSessions = (props: Props) => {
  return (
    <div className="bg-[#EBEBEB] rounded-2xl p-8 relative">
      <span className="bg-white px-3 rounded-xl absolute top-[-10px] left-[-4px]">
        Completed Sessions
      </span>
      <Scrollbar style={{ height: "calc(45vh - 120px)" }}>
        <Session />
        <Session />
        <Session />
        <Session />
        <Session />
        <Session />
        <Session />
        <Session />
      </Scrollbar>
    </div>
  );
};

export default CompletedSessions;
