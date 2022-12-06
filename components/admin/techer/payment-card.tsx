import Image from "next/image";
import React from "react";
import maxi from "../../../assets/img/Maximilien-Robespierre 6.png";
type Props = {};

const PaymentCard = (props: Props) => {
  return (
    <div className="flex justify-around items-center mb-2  px-2 py-2 w-[850px] bg-primaryLight/30 rounded-xl">
      <Image src={maxi} alt="" width={50} />
      <div>
        <p>Ruhul Amin Tusar</p>
        <p>
          11/08/2021 <span className="ml-2">12:30 pm</span>
        </p>
      </div>
      <div>
        <p className="font-bold">Bkash</p>
        <p>01824696900</p>
      </div>
      <div>
        <p>Requested Amount: 500</p>
        <p>Available Balance: 510</p>
      </div>
      <div  className="border-[2px] bg-white border-primaryDark rounded-3xl px-3 py-[2px]">
        <select className="" defaultValue="Panding" name="" id="">
            <option value="Pending">Panding</option>
        </select>
      </div>
    </div>
  );
};

export default PaymentCard;
