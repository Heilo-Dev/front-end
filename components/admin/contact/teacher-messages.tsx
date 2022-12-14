import React from "react";
import { InputBox } from "../../inputs";
import Scrollbar from "../../ui/scrollbar";
import MessageDetails from "./message-detail";

type Props = {};

const TeacherMessages = (props: Props) => {
  return (
    <div className="border-4 border-r-white pr-12">
      <div className="flex justify-between">
        <h1 className="capitalize bg-primaryLight rounded-xl px-4  text-white font-medium">
          teacher
        </h1>
        <div>
          <InputBox
            name=""
            className=" m-0 p-0"
            onChange={() => {}}
            required
            placeholder=""
            type="search"
          />
        </div>
      </div>
      <div className="mt-8">
        <Scrollbar style={{height: "calc(50vh - 120px)"}}>
          <MessageDetails />
          <MessageDetails />
          <MessageDetails />
          <MessageDetails />
          <MessageDetails />
          <MessageDetails />
          <MessageDetails />
          <MessageDetails />
          <MessageDetails />
        </Scrollbar>
      </div>
    </div>
  );
};

export default TeacherMessages;
