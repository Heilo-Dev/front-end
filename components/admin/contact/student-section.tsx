import React from "react";
import Details from "./details";
import StudentMessages from "./student-messages";
import Messages from "./teacher-messages";

type Props = {};

const StudentSection = (props: Props) => {
  return (
    <div className="grid grid-cols-12 justify-center items-start bg-[#EBEBEB] p-4 rounded-2xl">
      <div className="col-span-8">
        <StudentMessages />
      </div>
      <div className="col-span-4">
        <Details />
      </div>
    </div>
  );
};

export default StudentSection;
