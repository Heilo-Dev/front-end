import Image from "next/image";
import React from "react";
import Underline from "../underline";
import tusher from "../../assets/img/Ellipse 18.png";
import { Facebook } from "../icons/socials/facebook";
import { Instagram } from "../icons/socials/instagram";
import { LinkedIn } from "../icons/socials/linkedin";

type Props = {};

const Team = (props: Props) => {
  return (
    <div className="mt-28 section-container">
      <h1 className="capitalize text-4xl text-textSecondary text-center">
        The team
      </h1>
      <Underline />

      <div className="grid grid-cols-4 gap-4 justify-center items-center mt-48 mb-28">
        <div className="relative px-8 h-[400px] bg-bgAccent rounded-lg">
          <div className="absolute top-[-65px] translate-x-[24%]">
            <Image src={tusher} alt="" />
          </div>
          <h1 className="text-textSecondary text-2xl text-center font-medium mt-28">
            Ruhul Amin Tusar
          </h1>
          <p className="text-[#7D7C7C] text-2xl text-center my-3">
            Founder & CEO
          </p>
          <p className="text-justify text-[#7D7C7C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia
            morbi neque velit mattis turpis.
          </p>
          <div className="flex justify-around items-center mt-4 w-fit mx-auto">
            <Facebook className="text-[#7D7C7C] mr-2" width={35} />
            <Instagram className="text-[#7D7C7C] mr-2" width={40} />
            <LinkedIn className="text-[#7D7C7C]" width={30} />
          </div>
        </div>
        <div className="relative px-8 h-[400px] bg-bgAccent rounded-lg">
          <div className="absolute top-[-65px] translate-x-[24%]">
            <Image src={tusher} alt="" />
          </div>
          <h1 className="text-textSecondary text-2xl text-center font-medium mt-28">
            Ruhul Amin Tusar
          </h1>
          <p className="text-[#7D7C7C] text-2xl text-center my-3">
            Founder & CEO
          </p>
          <p className="text-justify text-[#7D7C7C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia
            morbi neque velit mattis turpis.
          </p>
          <div className="flex justify-around items-center mt-4 w-fit mx-auto">
            <Facebook className="text-[#7D7C7C] mr-2" width={35} />
            <Instagram className="text-[#7D7C7C] mr-2" width={40} />
            <LinkedIn className="text-[#7D7C7C]" width={30} />
          </div>
        </div>
        <div className="relative px-8 h-[400px] bg-bgAccent rounded-lg">
          <div className="absolute top-[-65px] translate-x-[24%]">
            <Image src={tusher} alt="" />
          </div>
          <h1 className="text-textSecondary text-2xl text-center font-medium mt-28">
            Ruhul Amin Tusar
          </h1>
          <p className="text-[#7D7C7C] text-2xl text-center my-3">
            Founder & CEO
          </p>
          <p className="text-justify text-[#7D7C7C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia
            morbi neque velit mattis turpis.
          </p>
          <div className="flex justify-around items-center mt-4 w-fit mx-auto">
            <Facebook className="text-[#7D7C7C] mr-2" width={35} />
            <Instagram className="text-[#7D7C7C] mr-2" width={40} />
            <LinkedIn className="text-[#7D7C7C]" width={30} />
          </div>
        </div>
        <div className="relative px-8 h-[400px] bg-bgAccent rounded-lg">
          <div className="absolute top-[-65px] translate-x-[24%]">
            <Image src={tusher} alt="" />
          </div>
          <h1 className="text-textSecondary text-2xl text-center font-medium mt-28">
            Ruhul Amin Tusar
          </h1>
          <p className="text-[#7D7C7C] text-2xl text-center my-3">
            Founder & CEO
          </p>
          <p className="text-justify text-[#7D7C7C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia
            morbi neque velit mattis turpis.
          </p>
          <div className="flex justify-around items-center mt-4 w-fit mx-auto">
            <Facebook className="text-[#7D7C7C] mr-2" width={35} />
            <Instagram className="text-[#7D7C7C] mr-2" width={40} />
            <LinkedIn className="text-[#7D7C7C]" width={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
