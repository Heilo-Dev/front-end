import React from "react";

type Props = {};

const Payment = (props: Props) => {
  return (
    <section className="bg-bgAccent rounded-[30px] p-4 mb-8">
      <div className="flex justify-between">
        <p className="bg-primaryLight text-[#FFFFFF] px-6 py-1 rounded-full inline capitalize">
          Payment method
        </p>
        <button className="btnPrimary bg-[#C4C4C4] text-primaryDark px-6 py-1 rounded-full font-normal">
          save
        </button>
      </div>
      <div className="my-6 mx-auto text-textSecondary">
        <form action="">
          <div className="flex justify-around">
            <div>
              <label>select method</label>
              <select defaultValue="bkash" name="" id="" className="bg-bgAccent border-[red] rounded-lg ml-2 px-16">
                <option value="bkash">bkash</option>
              </select>
            </div>
            <div className="flex justify-center items-center">
                <p className="capitalize mr-2">select operator</p>
              <label>+880</label>
              <select defaultValue="bkash" name="" id="" className="bg-bgAccent border-[red] rounded-lg ml-2 px-8">
                <option value="1681952733">1681952733</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Payment;
