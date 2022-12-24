import Image from "next/image";
import React from "react";
import dp from "../../../../assets/img/student-pro.png";
type Props = {};

const Detail = (props: Props) => {
  return (
    <div className="border-l-8 border-[#7d7d7d] bg-[#F8F8F8] mb-3 py-2">
      <div className="flex justify-around items-center">
        <Image src={dp} alt="" />
        <div>
          <p className="text-[#444F55] font-bold text-lg capitalize">
            sakib abdullah
          </p>
        </div>
        <div>
          <p className="text-[#7d7d7d] text-sm">
            You: Bhaiya kalke 5 tay set koro
          </p>
          <p className="font-bold text-[#444F55]">(6:15 pm)</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
