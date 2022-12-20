import Image from "next/image";
import React, { useState } from "react";
import Slider from "rc-slider";
import { InputBox, RoundedCheckBox } from "../../../inputs";

type Props = {
  handleChange: string;
};

const SearchBar = (props: Props) => {
  const { getGender, getSubject, searchOn }: any = props;
  return (
    <div className="my-8">
      <div className="w-fit mx-auto mb-4 ">
        <div className="tabBorder w-fit rounded-l-full px-6 relative mr-20">
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
      <div className="flex justify-around items-center my-3">
        <div>
          <RoundedCheckBox value="male" onChange={(e) => getGender(e)} />
          <label htmlFor="">male</label>
        </div>
        <div>
          <RoundedCheckBox value="female" onChange={(e) => getGender(e)} />
          <label htmlFor="">female</label>
        </div>
        <div className="tabBorder rounded-full px-3 py-0">
          <select name="" id="" className="focus:outline-none">
            <option value="">availability</option>
          </select>
        </div>
        <div className="tabBorder px-1 rounded-lg">
          <InputBox
            type="search"
            placeholder="Search by ID"
            className="m-0 focus:border-none border-1 border-xl border-none text-center"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
