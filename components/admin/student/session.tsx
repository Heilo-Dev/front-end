import React from "react";

type Props = {};

const Session = (props: Props) => {
  return (
    <div className="bg-white text-[#7D7C7C] text-xs mb-2 text-center rounded-full flex items-center justify-between w-full">
      <div className="p-0 pr-2 pl-3 py-2 min-w-fit w-full text-center border-b-0 font-semibold uppercase">
        <p className="border-primaryDark px-4 py-1 min-w-fit border-2 rounded-full">
          27th July, 2021
        </p>
      </div>
      <div className="p-0 border-primaryDark ml-3 pr-2 pl-3 py-2 min-w-fit w-full text-center border-l-[1px] border-b-0 font-semibold uppercase">
        ID 11121
      </div>
      <div className="p-0 border-primaryDark pr-2 pl-3 py-2 min-w-fit w-full border-l-[1px] border-b-0 font-semibold capitalize">
        Ruhul Tusar
      </div>
      <div className="p-0 border-primaryDark pr-2 pl-3 py-2 min-w-fit w-full border-l-[1px] border-b-0 capitalize">
        Topic- Polygons I Gerometry I Maths B
      </div>
      <div className="p-0 border-primaryDark mr-2 pr-2 pl-3 py-2 min-w-fit w-full border-l-[1px] border-b-0 capitalize text-primaryDark font-semibold">
        Time- 4:30-5.30 pm
      </div>
    </div>
  );
};

export default Session;
