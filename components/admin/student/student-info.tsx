import Image from "next/image";
import React from "react";
import women from "../../../assets/img/women.png";
type Props = {};

const StudentInfo = (props: Props) => {
  return (
    <div className="border-2 border-primaryDark rounded-2xl py-4 px-8">
      <div className="flex justify-between">
        <div className="mt-4 flex items-start space-x-6">
          <Image width={130} src={women} alt="" />
          <div className="flex flex-col justify-around">
            <div>
              <p className="capitalize">zarin Tajnim </p>
              <p>Maple Leaf International School and College</p>
            </div>
            <div className="my-6">
              <p className="capitalize text-primaryLight">address</p>
              <p>274, sher-e-bangla road, Dhaka- 1209</p>
            </div>
            <div className="flex justify-start space-x-16">
              <div>
                <h1 className="text-primaryLight">Gender</h1>
                <p>Female</p>
              </div>
              <div>
                <h1 className="text-primaryLight">join Date</h1>
                <p>11/09/2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className="border-[1px] border-accentLight rounded-xl px-6">
            <p className="text-primaryLight">email</p>
            <p>sakib.abdullah@gmail.com</p>
          </div>
          <div className="border-[1px] border-accentLight rounded-xl px-6">
            <p className="text-primaryLight">contact number</p>
            <p>0124548721</p>
          </div>
          <div className="border-[1px] border-accentLight rounded-xl px-6">
            <p className="text-primaryLight">Medium</p>
            <p>English medium</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
