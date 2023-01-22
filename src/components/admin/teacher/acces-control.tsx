import React from "react";

// @@ internal imports @@ //
import { SearchIcon } from "@components/icons/admin-teacher/search-icon";
import Scrollbar from "@components/ui/scrollbar";
import ActionCard from "./action-card";

type Props = {};

const AccessControl = (props: Props) => {
  return (
    <div className="mt-10">
      <div className="w-fit mx-auto rounded-full px-6 bg-white flex">
        <input
          className="border-none text-[#BDBDBD] "
          type="search"
          placeholder="Enter Phone Number"
          name=""
          id=""
        />
        <SearchIcon color="#BDBDBD" width={30} />
      </div>
      <Scrollbar className="mt-8" style={{ height: "calc(100vh - 150px)" }}>
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
      </Scrollbar>
    </div>
  );
};

export default AccessControl;
