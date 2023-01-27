import React from "react";
import Details from "./details";
import TeacherMessages from "./teacher-messages";
import Messages from "./teacher-messages";

type Props = {};

const TeacherSection = (props: Props) => {
  return (
    <div className="lg:grid grid-cols-12 justify-center items-start bg-[#EBEBEB] p-4 rounded-2xl">
      <div className="col-span-8">
        <TeacherMessages />
      </div>
      <div className="col-span-4">
        <Details />
      </div>
    </div>
  );
};

export default TeacherSection;
