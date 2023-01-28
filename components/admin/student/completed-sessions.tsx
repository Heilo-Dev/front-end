import React from "react";
import Scrollbar from "../../ui/scrollbar";
import Session from "./session";

type Props = {};

const CompletedSessions = (props: Props) => {
  return (
    <div className="grayDiv p-3 rounded-3xl">
      <div className="titleTab bg-white font-semibold text-[#7d7d7d]">
        Completed Sessions
      </div>
      <div className="px-4">
        <div className="py-1 my-2 rounded-3xl lg:px-3">
          <Scrollbar style={{ height: "calc(45vh - 150px)" }}>
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
      </div>
    </div>
  );
};

export default CompletedSessions;
