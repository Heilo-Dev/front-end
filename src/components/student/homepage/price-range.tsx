import Image from "next/image";
import React from "react";
import ractangle from "../../../assets/img/Rectangle 36.png";
import { CheckBox, RoundedCheckBox } from "../../inputs";
type Props = {};

const PriceRange = (props: Props) => {
  return (
    <section className="bg-bgAccent p-10 rounded">
      <h1 className="text-2xl font-medium text-accentLight">Price Range</h1>

      <div className="flex">
        <div className="border-primaryLight border-t-4 w-[170px]  my-6 relative">
          <div>
            <Image
              className="absolute top-[-18px] translate-x-[190%]"
              src={ractangle}
              alt="ractangle"
            />
          </div>
        </div>
        <div className="border-primaryLight border-t-4 w-[170px]  my-6 relative">
          <div>
            <Image
              className="absolute top-[-18px] translate-x-[190%]"
              src={ractangle}
              alt="ractangle"
            />
          </div>
        </div>
      </div>

      <form>
        <h1 className="text-2xl font-medium text-accentLight mt-8">Background</h1>
        <div className=" text-[19px] text-[#444F55] capitalize pl-4  mt-4">
          <div>
            <RoundedCheckBox />
            <label className="ml-3" htmlFor="">
              science
            </label>
          </div>
          <div>
            <RoundedCheckBox />
            <label className="ml-3" htmlFor="">
              commerce
            </label>
          </div>
          <div>
            <RoundedCheckBox />
            <label className="ml-3" htmlFor="">
              english version
            </label>
          </div>
        </div>
        <h1 className="mt-8 text-2xl font-medium text-accentLight">Medium</h1>

        <div className=" text-[19px] text-[#444F55] capitalize leading-[28px] pl-4 mt-4">
          <div>
            <RoundedCheckBox />
            <label className="ml-3" htmlFor="">
              english
            </label>
          </div>
          <div>
            <RoundedCheckBox />
            <label className="ml-3" htmlFor="">
              bangla
            </label>
          </div>
          <div>
            <RoundedCheckBox />
            <label className="ml-3" htmlFor="">
              english version
            </label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PriceRange;
