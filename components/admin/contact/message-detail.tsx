import Image from "next/image";
import React from "react";
import dp from "../../../assets/img/student-pro.png";

type Props = {};

const MessageDetails = (props: Props) => {
  return (
    <div className="border-4 border-l-accent bg-white ">
      <div className="flex justify-around items-center">
        <Image src={dp} alt="" />
        <div>
          <p className="text-accent font-bold text-lg capitalize">
            sakib abdullah
          </p>
          <p className="text-accentLight">Dhaka University</p>
        </div>
        <div>
          <p className="text-accentLight">01824696900</p>
          <p className="text-accentLight">write2ratusar@gmail.com</p>
        </div>
        <div>
          <p className="text-accentLight">You: Bhaiya kalke 5 tay set koro</p>
          <p className="font-bold ">11-09-2021 (6:15 pm)</p>
        </div>
      </div>
    </div>
  );
};

export default MessageDetails;
