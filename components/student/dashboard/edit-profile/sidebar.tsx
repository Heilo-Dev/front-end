import Image from "next/image";
import React from "react";
import student from "../../../../assets/img/student.png";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section className="bg-bgAccent p-8">
      <div className="mt-[-90px] mb-6 mx-auto w-fit">
        <Image width={120} src={student} alt="student pic" />
      </div>
      <div>
        <p className="border-2 border-[#E0E0E0] rounded-full inline-block py-2 px-4 my-2">
          sakib abdullah
        </p>
        <p className="border-2 border-[#E0E0E0] rounded-full inline-block py-2 px-4 text-[12px] my-2">
          Bangladesh University of Professionals
        </p>
      </div>
      <div className="flex space-x-2 my-8">
        <div>
          <button className="btnPrimary bg-[#4CAAF4] w-[210px] rounded-full px-4 mb-2">
            Tution completed
          </button>
          <button className="btnPrimary bg-[#A67DEA] w-[210px] rounded-full px-8">
            Tution reffered
          </button>
        </div>
        <div>
            <p className="border-2 border-[#E0E0E0] rounded-full px-10 py-2 mb-2">48</p>
            <p className="border-2 border-[#E0E0E0] rounded-full px-10 py-2">27</p>
           
        </div>
      </div>
      <div className="border-2 border-[#E0E0E0] rounded-lg p-4">
        <h1 className="text-primaryLight capitalize">about me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis aenean et elementum massa.</p>
      </div>
    </section>
  );
};

export default Sidebar;
