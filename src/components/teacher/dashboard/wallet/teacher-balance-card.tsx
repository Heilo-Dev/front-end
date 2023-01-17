import React from "react";
import { BtnSecondary } from "../../../buttons";
import { LocalImage } from "../../../image-snippents";
import WalletCard2 from "../../../../assets/img/wallet-card2.png";

type Props = {};

const TeacherBalanceCard = (props: Props) => {
  return (
    <div className="bg-[#F8F8F8] rounded-3xl p-6 flex flex-col items-center">
      <div className="relative">
        <LocalImage src={WalletCard2} width={220} />
        <h1 className="absolute top-1/2 left-6 -translate-y-1/2 text-white flex flex-col leading-none font-bold text-2xl">
          00.00
        </h1>
      </div>

      <div className="flex items-center justify-between mt-10 mb-6 w-full text-sm">
        <h1 className="font-bold">Total Balance</h1>
        <select
          defaultValue="male"
          className="accent-[#50d71e] text-sm form-input mb-0 ml-3 w-[165px] py-1 bg-[#EBEBEB] pl-5 rounded-full"
        >
          <option value="male">500 uc 500 taka</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6 w-full text-sm">
        <h1>Amount to be withdrawn</h1>
        <select
          defaultValue="male"
          className="text-sm form-input mb-0 ml-3 w-[150px] py-1 bg-[#EBEBEB] pl-5 rounded-full"
        >
          {/* <option value="male">500 uc 500 taka</option>
                  <option value="female">Female</option> */}
        </select>
      </div>
      <div className="flex items-center justify-between mb-6 w-full text-sm">
        <h1>Remaining balance</h1>
        <select
          defaultValue="male"
          className="text-sm form-input mb-0 ml-3 w-[100px] py-1 bg-[#EBEBEB] pl-5 rounded-full"
        >
          <option value="male">Bkash</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6 w-full text-sm">
        <h1>Transfer to</h1>
        <select
          defaultValue="male"
          className="text-sm form-input mb-0 ml-3 w-[150px] py-1 bg-[#EBEBEB] pl-5 rounded-full"
        >
          {/* <option value="male">500 uc 500 taka</option>
                  <option value="female">Female</option> */}
        </select>
      </div>
      <div className="flex items-center justify-between mb-6 w-full text-sm">
        <h1>Account Number</h1>
        <select
          defaultValue="male"
          className="text-sm form-input mb-0 ml-3 w-[150px] py-1 bg-[#EBEBEB] pl-5 rounded-full"
        >
          {/* <option value="male">500 uc 500 taka</option>
                  <option value="female">Female</option> */}
        </select>
      </div>
      <BtnSecondary
        label="Withdraw"
        className="bg-primaryLight w-fit font-bold px-6 ml-auto text-white border-[3px] border-[#090F64]"
      />
    </div>
  );
};

export default TeacherBalanceCard;
