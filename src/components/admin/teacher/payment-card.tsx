import Image from "next/image";
import React from "react";

// @@ internal imports @@ //
import maxi from "@assets/img/Maximilien-Robespierre 6.png";
type Props = {};

const PaymentCard = (props: Props) => {
  return (
    <div className="flex justify-between items-center mb-2  px-4 py-2 min-w-[800px] bg-[#D2F9EB] rounded-3xl">
      <div className="flex items-center">
        <Image src={maxi} alt="" width={50} />
        <div className="ml-3">
          <p className="text-textSecondary font-semibold">Ruhul Amin Tusar</p>
          <p className="text-textSecondary">
            11/08/2021 <span className="ml-2">12:30 pm</span>
          </p>
        </div>
      </div>
      <div>
        <p className="font-semibold text-textSecondary">Bkash</p>
        <p className="text-textSecondary">01824696900</p>
      </div>
      <div>
        <p className="text-textSecondary">
          Requested Amount: <span className="font-semibold">500</span>
        </p>
        <p className="text-textSecondary">
          Available Balance: <span className="font-semibold">510</span>
        </p>
      </div>
      <div className="border-[2px] bg-white border-primaryDark rounded-3xl px-3 py-[2px]">
        <select className="" defaultValue="Panding" name="" id="">
          <option value="Pending">Panding</option>
        </select>
      </div>
    </div>
  );
};

export default PaymentCard;
