import React from "react";
import { InputBox } from "../../../inputs";

type Props = {};

const EducationInfo = (props: Props) => {
  return (
    <section className="bg-bgAccent rounded-lg p-4 mb-8">
      <div className="flex justify-between">
        <p className="bg-primaryLight text-[#FFFFFF] px-6 py-1 rounded-full inline">
          Education
        </p>
        <button className="btnPrimary bg-[#C4C4C4] text-primaryDark px-6 py-1 rounded-full font-normal">
          save
        </button>
      </div>
      <div className="my-6">
        <form action="">
          <div className="grid grid-cols-2 gap-4">
            {/* current institute */}

            <div className=" w-full rounded-lg px-6 border-2 border-[#E0E0E0]">
              <label className="text-[#7D7D7D]" htmlFor="">
                Current institute
              </label>
              <br />
              <InputBox
                className="border-none bg-bgAccent py-0 m-0"
                onChange={() => {}}
                placeholder="sakib.abdullah@gmail.com"
              />
            </div>

            <div className=" w-full rounded-lg px-6 border-2  border-[#E0E0E0]">
              <label className="text-[#7D7D7D]" htmlFor="">
                class
              </label>
              <br />
              <select
              className="w-full border-none bg-bgAccent p-0 text-primaryDark"
               id="cars"
               name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>

            {/* contact number */}

            <div className=" w-full h-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
              <label className="text-[#7D7D7D]" htmlFor="">
                medium
              </label>
              <br />
              <select
              className="w-full border-none bg-bgAccent p-0 text-primaryDark"
               id="cars"
               name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className=" w-full h-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
              <label className="text-[#7D7D7D]" htmlFor="">
                Background
              </label>
              <br />
              <select
              className="w-full border-none bg-bgAccent p-0 text-primaryDark"
               id="cars"
               name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EducationInfo;
