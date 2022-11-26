import Image from "next/image";
import React from "react";
import student from "../../../../assets/img/student.png";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section className="bg-bgAccent p-8 mt-16">
      <div className="mt-[-90px] mb-6 mx-auto w-fit">
        <Image width={120} src={student} alt="student pic" />
      </div>
      <div className="flex flex-col">
        <span className="titleTab tabBorder px-2 rounded-full border-[2px] border-[#E0E0E0] mt-2 capitalize font-semibold text-textSecondary/70">
          sakib abdullah
        </span>
        <p className="border-2 border-[#E0E0E0] rounded-full inline-block py-2 px-4 text-[12px] my-2">
          Bangladesh University of Professionals
        </p>
      </div>
      <div className="my-8">
        <div className="flex justify-between">
          <p className="text-white bg-[#4CAAF4] w-[200px] rounded-full px-4 mb-2 py-1.5 text-center">
            Tution completed
          </p>
          <p className="border-2 border-[#E0E0E0] rounded-full px-7 py-1 mb-2">
            48
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-white bg-[#A67DEA] w-[200px] rounded-full px-8 py-1.5 text-center">
            Tution reffered
          </p>
          <p className="border-2 border-[#E0E0E0] rounded-full px-7 py-1">27</p>
        </div>
      </div>
      <div className="border-2 border-[#E0E0E0] rounded-2xl p-4">
        <h1 className="text-primaryLight capitalize">about me</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          facilisis aenean et elementum massa.
        </p>
      </div>
    </section>
  );
};

export default Sidebar;
