import React from "react";
import { SearchIcon } from "../../icons/admin-teacher/search-icon";
import Scrollbar from "../../ui/scrollbar";
import ActionCard from "./action-card";

type Props = {};

const AccessControl = (props: Props) => {
  return (
    <div className="mt-16">
      <div className="w-fit mx-auto rounded-2xl px-6 bg-white flex">
        <input
          className="border-none text-[#BDBDBD] "
          type="search"
          placeholder="Enter Phone Number"
          name=""
          id=""
        />
        <SearchIcon color="#BDBDBD" width={30} />
      </div>
     <Scrollbar className="mt-12" style={{ height: "calc(90vh - 120px)" }}>
        <ActionCard/>
        <ActionCard/>
        <ActionCard/>
        <ActionCard/>
        <ActionCard/>
        <ActionCard/>
        <ActionCard/>
        <ActionCard/>
        <ActionCard/>
     </Scrollbar>
    </div>
  );
};

export default AccessControl;
