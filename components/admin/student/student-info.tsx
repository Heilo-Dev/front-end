import Image from "next/image";
import React from "react";
import women from "../../../assets/img/women.png";
type Props = {};

const StudentInfo = (props: Props) => {
  return (
    <div className="border-[3px] border-primaryDark text-[#7d7d7d] rounded-2xl py-3 px-6">
      <div className="lg:flex justify-between">
        <div className="lg:flex items-start space-x-6">
          <Image width={130} src={women} alt="" />
          <div className="lg:flex flex-col justify-around pr-2 mt-3 lg:mt-0">
            <div>
              <p className="capitalize font-semibold">zarin Tajnim</p>
              <p>Maple Leaf International School and College</p>
            </div>
            <div className="my-3">
              <p className="capitalize text-primaryLight">address</p>
              <p className="font-semibold">
                274, sher-e-bangla road, Dhaka- 1209
              </p>
            </div>
            <div className="flex justify-start space-x-16">
              <div>
                <h1 className="text-primaryLight">Gender</h1>
                <p className="font-semibold">Female</p>
              </div>
              <div>
                <h1 className="text-primaryLight">join Date</h1>
                <p className="font-semibold">11/09/2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-3 mt-3 lg:mt-0">
          <div className="border-[1px] border-[#E0E0E0] rounded-xl px-6">
            <p className="text-primaryLight capitalize">email</p>
            <p className="font-semibold">sakib.abdullah@gmail.com</p>
          </div>
          <div className="border-[1px] border-[#E0E0E0] rounded-xl px-6">
            <p className="text-primaryLight capitalize">contact number</p>
            <p className="font-semibold">0124548721</p>
          </div>
          <div className="border-[1px] border-[#E0E0E0] rounded-xl px-6">
            <p className="text-primaryLight capitalize">Medium</p>
            <p className="font-semibold">English medium</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
