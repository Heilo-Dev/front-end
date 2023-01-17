import React from "react";

type Props = {};

const SessionItem = (props: Props) => {
  return (
    <div className="bg-white text-[#7D7C7C] text-xs mb-2 px-2 py-1 text-center rounded-full flex items-center justify-between">
      <p className="border-primaryDark px-4 py-1 min-w-fit border rounded-full">
        27th July, 2021
      </p>
      <p className="border-primaryDark ml-3 pr-2 pl-3 py-2 min-w-fit w-full text-center border-l-[1px] font-semibold uppercase">
        ID 11121
      </p>
      <p className="border-primaryDark pr-2 pl-3 py-2 min-w-fit w-full border-l-[1px] font-semibold capitalize">
        Ruhul Tusar
      </p>
      <p className="border-primaryDark pr-2 pl-3 py-2 min-w-fit w-full border-l-[1px] capitalize">
        <span className="font-semibold">Topic-</span> Polygons I Gerometry I
        Maths B
      </p>
      <p className="border-primaryDark pr-2 pl-3 py-2 min-w-fit w-full border-l-[1px] capitalize text-primaryDark font-semibold">
        Time- 4:30-5.30 pm
      </p>
    </div>
  );
};

export default SessionItem;
