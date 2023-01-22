import React, { useState } from "react";

// @@ internal imports @@ //
import { InputBox, RoundedCheckBox } from "@components/inputs";

type Props = {
  getGender: (e: any) => void;
  getSubject: (e: any) => void;
};

const SearchBar = ({ getGender, getSubject }: Props) => {
  return (
    <div className="my-8">
      <div className="w-fit mx-auto mb-4 ">
        <div className="tabBorder w-fit rounded-l-full px-6 relative mr-[106px] lg:mr-20">
          <select defaultValue="subject" onChange={(e) => getSubject(e)} id="">
            <option value="English">English</option>
            <option value="Bangla">Bangla</option>
            <option value="Ict">Ict</option>
          </select>
          <select name="subject" id="">
            <option value="">topic</option>
          </select>
          <button className="btnPrimary h-[45px] w-32  rounded-bl-full rounded-r-full absolute right-[-105px] top-[-2px]">
            search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap mx-4 lg:justify-around items-center my-3">
        <div>
          <RoundedCheckBox value="male" onChange={(e) => getGender(e)} />
          <label htmlFor="">male</label>
        </div>
        <div>
          <RoundedCheckBox value="female" onChange={(e) => getGender(e)} />
          <label htmlFor="">female</label>
        </div>
        <div className="tabBorder order-4 lg:order-2 rounded-full px-3 py-0">
          <select name="" id="" className="focus:outline-none">
            <option value="">availability</option>
          </select>
        </div>
        <div className="tabBorder order-3 px-1 rounded-lg">
          <InputBox
            type="search"
            placeholder="Search by name"
            className="m-0 focus:border-none border-1 border-xl border-none text-center"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
