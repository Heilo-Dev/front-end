import React from "react";

// @@ internal imports @@ //
import { InputBox } from "@components/inputs";

type Props = {};

const AccountDetails = (props: Props) => {
  return (
    <section className="bg-bgAccent rounded-[30px] p-4 mb-8">
      <div className="flex justify-between">
        <p className="bg-primaryLight text-[#FFFFFF] px-2 lg:px-6 py-1 rounded-full ">
          Account Details
        </p>

        <button className="btnPrimary bg-[#C4C4C4] text-primaryDark px-6 py-1 rounded-full font-normal">
          change password
        </button>
      </div>
      <div className="my-6">
        <form action="">
          <div className="lg:grid space-y-2 lg:space-y-0 grid-cols-2  items-center justify-center">
            <div className="w-fit rounded-[30px] mx-auto px-6 border-2 border-[#E0E0E0]">
              <InputBox
                className="border-none bg-bgAccent text-center mt-4 p-0"
                onChange={() => {}}
                placeholder="Current Password"
              />
            </div>

            <div className="w-fit rounded-[30px] mx-auto px-6 border-2 border-[#E0E0E0]">
              <InputBox
                className="border-none bg-bgAccent text-center mt-4 p-0 "
                onChange={() => {}}
                placeholder="New Password"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccountDetails;
