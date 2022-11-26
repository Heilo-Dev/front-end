import React from "react";
import { InputBox } from "../../../inputs";

type Props = {};

const BasicInfo = (props: Props) => {
  return (
    <section className="bg-bgAccent rounded-lg p-4 mb-8">
      <div className="flex justify-between">
        <p className="bg-primaryLight text-[#FFFFFF] px-6 py-1 rounded-full inline">
          Basic Information
        </p>
        <button className="btnPrimary bg-[#C4C4C4] text-primaryDark px-6 py-1 rounded-full font-normal">
          save
        </button>
      </div>
      <div className="my-6">
        <form action="">
          <div className="grid grid-cols-3 gap-4">
            {/* name */}

            <div>
              <div className=" w-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
                <label className="text-[#7D7D7D]" htmlFor="">
                  Name
                </label>
                <br />
                <InputBox
                  className="border-none bg-bgAccent py-0 m-0"
                  onChange={() => {}}
                  placeholder="sakib abdullah"
                />
              </div>
              <div className="flex mt-2 space-x-2">
                <div className=" w-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
                  <label className="text-[#7D7D7D]" htmlFor="">
                    Devision
                  </label>
                  <br />
                  <InputBox
                    className="border-none bg-bgAccent py-0 m-0"
                    onChange={() => {}}
                    placeholder="sakib abdullah"
                  />
                </div>
                <div className=" w-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
                  <label className="text-[#7D7D7D]" htmlFor="">
                    Villag,
                  </label>
                  <br />
                  <InputBox
                    className="border-none bg-bgAccent py-0 m-0"
                    onChange={() => {}}
                    placeholder="sakib abdullah"
                  />
                </div>
              </div>
            </div>

            {/* contact number */}

            <div>
              <div className=" w-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
                <label className="text-[#7D7D7D]" htmlFor="">
                  email
                </label>
                <br />
                <InputBox
                  className="border-none bg-bgAccent py-0 m-0"
                  onChange={() => {}}
                  placeholder="sakib.abdullah@gmail.com"
                />
              </div>
              <div className=" w-fit rounded-lg px-6 border-2 mt-2 border-[#E0E0E0]">
                <label className="text-[#7D7D7D]" htmlFor="">
                  email
                </label>
                <br />
                <InputBox
                  className="border-none bg-bgAccent py-0 m-0"
                  onChange={() => {}}
                  placeholder="sakib.abdullah@gmail.com"
                />
              </div>
            </div>

            {/* contact number */}

            <div className=" w-fit h-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
              <label className="text-[#7D7D7D]" htmlFor="">
                Contact Number
              </label>
              <br />
              <InputBox
                className="border-none bg-bgAccent py-0 m-0"
                type="number"
                onChange={() => {}}
                placeholder="01765646564"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BasicInfo;
