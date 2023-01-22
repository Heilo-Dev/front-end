import React from "react";

// @@ internal imports @@ //
import { Scrollbar, SessionItem, SearchIcon } from "..";

type Props = {};

const UpcommingSessions = (props: Props) => {
  return (
    <div className="grayDiv p-4 rounded-3xl mt-4 relative">
      <div className="titleTab bg-white font-semibold text-[#7d7d7d]">
        Upcomming Sessions
      </div>
      <div className="flex absolute -top-[20px] right-[60px] bg-white overflow-hidden rounded-full border-primaryDark border-[1px]">
        <input
          className="ml-3 w-36 placeholder:text-sm focus:placeholder:text-gray-800 focus:text-gray-800 text-gray-500 outline-none focus:ring-transparent border-0"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="w-6 mr-3 text-[#7d7d7d]" />
      </div>
      <div className="p-4">
        <Scrollbar style={{ height: "calc(100vh - 367px)" }}>
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
          <SessionItem />
        </Scrollbar>
      </div>
    </div>
  );
};

export default UpcommingSessions;
