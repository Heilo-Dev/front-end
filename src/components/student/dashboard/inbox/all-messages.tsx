import React from "react";
import { SearchIcon } from "../../../icons/admin-teacher/search-icon";
import Scrollbar from "../../../ui/scrollbar";
import Detail from "./detail";
type Props = {};

const AllMessages = (props: Props) => {
  return (
    <div className="">
      <div className="w-[90%] mx-auto rounded-full px-6 bg-[#C4C4C480] flex">
        <input
          className="border-none w-full bg-[#C4C4C480]/10 "
          type="search"
          name=""
          id=""
        />
        <SearchIcon color="#BDBDBD" width={30} />
      </div>
      <p className="my-8">All Messages</p>
      <Scrollbar style={{ height: "calc(80vh - 120px)" }}>
        <Detail />
        <Detail />
        <Detail />
        <Detail />
        <Detail />
        <Detail />
        <Detail />
        <Detail />
        <Detail />
        <Detail />
        <Detail />
        <Detail />
        <Detail />
      </Scrollbar>
    </div>
  );
};

export default AllMessages;
