import React from "react";

// @@ internal imports @@ //
import { SearchIcon } from "@components/icons/admin-teacher/search-icon";
import Scrollbar from "@components/ui/scrollbar";
import MessageDetails from "./message-detail";

type Props = {};

const StudentMessages = (props: Props) => {
  return (
    <div className="border-r-[4px] border-white pr-12">
      <div className="flex justify-between items-center">
        <h1 className="capitalize bg-primaryLight rounded-xl px-4 text-white font-medium">
          student
        </h1>
        <div className="flex bg-white overflow-hidden rounded-full">
          <input
            className="ml-3 h-7 w-80 placeholder:text-sm focus:placeholder:text-gray-800 focus:text-gray-800 text-gray-500 outline-none focus:ring-transparent border-0"
            type="text"
            placeholder="Search"
          />
          <SearchIcon className="w-6 mr-3 text-[#7d7d7d]" />
        </div>
      </div>
      <div className="mt-8">
        <Scrollbar style={{ height: "calc(50vh - 120px)" }}>
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

export default StudentMessages;
