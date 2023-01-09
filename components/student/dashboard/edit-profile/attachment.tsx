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
        <form className="w-fit" action="">
          <p className="text-center">StudentId</p>
          <div className=" w-fit rounded-[30px]  px-6 border-2 border-[#E0E0E0]">
            <InputBox
              className="border-none bg-bgAccent text-center mt-4 px-12 py-0"
              onChange={() => {}}
              placeholder="Attachment"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Attachment;
