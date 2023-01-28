import React from "react";

import WalletCard2 from "../../../assets/img/wallet-card2.png";
import { BtnSecondary } from "../../buttons";
import { LocalImage } from "../../image-snippents";

type Props = {};

const AdminBalanceCard = (props: Props) => {
  return (
    <div className="bg-[#F8F8F8] rounded-3xl p-6 flex flex-col items-center">
      <div className="relative  bg-primaryLight rounded-2xl flex justify-around items-end p-12">
        <div className="text-white flex flex-col leading-none font-bold text-2xl">
          <h1 className="mb-3">Enter amount</h1>
          <h1>to withdraw</h1>
        </div>
        <h1 className="text-white flex flex-col leading-none font-bold text-2xl ml-4">
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
        <h1>Remaining balance</h1>
        <select
          defaultValue="male"
          className="text-sm form-input mb-0 ml-3 w-[100px] py-1 bg-[#EBEBEB] pl-5 rounded-full"
        >
          <option value="male">Bkash</option>
          <option value="female">Female</option>
        </select>
      </div>
      <BtnSecondary
        label="confirm"
        className="bg-primaryLight w-fit font-bold px-6 ml-auto text-white border-[3px] border-[#090F64]"
      />
    </div>
  );
};

export default AdminBalanceCard;
