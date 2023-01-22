import Image from "next/image";
import React from "react";
import ractangle from "../assets/img/Rectangle 36.png";
type Props = {};

const Underline = (props: Props) => {
  return (
    <div className="border-primaryLight border-t-4 w-[170px] mx-auto my-6 relative">
      <div>
        <Image
          className="absolute top-[-18px] translate-x-[190%]"
          src={ractangle}
          alt="ractangle"
        />
      </div>
    </div>
  );
};

export default Underline;
