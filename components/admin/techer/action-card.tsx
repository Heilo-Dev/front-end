import React from "react";

type Props = {};

const ActionCard = (props: Props) => {
  return (
    <div className="bg-white w-fit mx-auto mb-8 px-3 rounded-xl py-[2px] flex">
      <div className="">
        <h1 className="capitalize">ruhul amin tusher</h1>
        <div className="flex justify-start space-x-2 text-sm">
          <p className="">01824696930</p>
          <p>writetusar@gmail.com</p>
        </div>
      </div>
      <div className="bg-accentLight/5 px-3 rounded-2xl">
        <select className="bg-accentLight/5" name="" id="">
          <option value="active">active</option>
        </select>
      </div>
    </div>
  );
};

export default ActionCard;
