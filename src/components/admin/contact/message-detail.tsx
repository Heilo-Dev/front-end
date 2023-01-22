import Image from "next/image";
import React from "react";
import dp from "@assets/img/student-pro.png";

type Props = {};

const MessageDetails = (props: Props) => {
  return (
    <div className="border-l-8 border-[#7d7d7d] bg-white mb-3 py-2">
      <div className="flex justify-around items-center">
        <Image src={dp} alt="" />
        <div>
          <p className="text-[#444F55] font-bold text-lg capitalize">
            sakib abdullah
          </p>
          <p className="text-[#7d7d7d]">Dhaka University</p>
        </div>
        <div>
          <p className="text-[#7d7d7d]">01824696900</p>
          <p className="text-[#7d7d7d]">write2ratusar@gmail.com</p>
        </div>
        <div>
          <p className="text-[#7d7d7d]">You: Bhaiya kalke 5 tay set koro</p>
          <p className="font-bold text-[#444F55]">11-09-2021 (6:15 pm)</p>
        </div>
      </div>
    </div>
  );
};

export default MessageDetails;
