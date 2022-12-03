import Image from "next/image";
import React from "react";
import tutor from "../../../assets/img/tutor.png";

type Props = {};

const AvailableTutor = (props: Props) => {
  const { user } = props;
  return (
    <div>
      <div className="py-3 mb-4 px-8 bg-bgAccent h-[128px] rounded-lg">
        <div className="flex items-center">
          <Image src={tutor} alt="tutor avatar" />
          <div className="grid grid-cols-2 gap-x-12 mx-auto h-[100%]">
            <p>{user?.name}</p>
            <p>{user?.education?.currentInstitution?.name}</p>
            <p>address</p>
            <p>subject</p>
          </div>
          <div className="flex flex-col justify-around">
            <button className="btnPrimary bg-white h-[40px] text-accent">
              450/hr
            </button>
            <button className="btnPrimary h-[40px] mt-3 text-accent ">
              message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableTutor;
