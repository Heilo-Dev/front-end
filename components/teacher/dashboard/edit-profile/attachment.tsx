import React from "react";
import { InputBox } from "../../../inputs";

type Props = {};

const Attachment = (props: Props) => {
  return (
    <section className="bg-bgAccent rounded-[30px] p-4 mb-8">
      <div className="flex justify-between">
        <p className="bg-primaryLight text-[#FFFFFF] px-6 py-1 rounded-full inline">
          Attachment
        </p>

        <button className="btnPrimary bg-[#C4C4C4] text-primaryDark px-6 py-1 rounded-full font-normal">
          save
        </button>
      </div>
      <div className="my-6">
        <form className="w-fit mx-auto" action="">
          <div className="grid grid-cols-2 gap-8 justify-center items-center mx-auto">
            <div className="w-fit">
              <p className="text-center text-textSecondary">StudentId</p>
              <div className=" rounded-[30px]  px-6 border-2 border-[#E0E0E0]">
                <InputBox
                  className="border-none bg-bgAccent text-center mt-4 px-12 py-0"
                  onChange={() => {}}
                  placeholder="Attachment"
                />
              </div>
            </div>
            <div className=" w-fit ">
              <p className="text-center text-textSecondary">Passport/NID/BC</p>
              <div className="rounded-[30px]  px-6 border-2 border-[#E0E0E0]">
                <InputBox
                  className="border-none bg-bgAccent text-center mt-4 px-12 py-0"
                  onChange={() => {}}
                  placeholder="Attachment"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Attachment;
