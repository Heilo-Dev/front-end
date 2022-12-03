import Image from "next/image";
import React from "react";
import creative from '../../assets/img/Creative team-rafiki 1.png'
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="mt-32">
      <div className="flex justify-between items-center">
        <Image width={550} src={creative} alt=''/>
        <div className="ml-8">
          <h1 className="capitalize text-4xl text-[#444F55] mb-8">our story</h1>
          <p className="text-justify text-[#444F55]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi turpis a
            in nibh egestas lacus. Sit aliquam malesuada purus ipsum vitae
            posuere. Lacinia accumsan enim nulla at justo, diam tincidunt.
            Convallis tempus malesuada consequat, enim a venenatis, amet.
            Malesuada pellentesque in magna aliquet sed nascetur ut viverra.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi turpis a
            in nibh egestas lacus. Sit aliquam malesuada purus ipsum vitae
            posuere. Lacinia accumsan enim nulla at justo, diam tincidunt.
            Convallis tempus malesuada consequat, enim a venenatis, amet.
            Malesuada pellentesque in magna aliquet sed nascetur ut viverra.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi turpis a
            in nibh egestas lacus. Sit aliquam malesuada purus ipsum vitae
            posuere. Lacinia accumsan enim nulla at justo, diam tincidunt.
            Convallis tempus malesuada consequat, enim a venenatis, amet.
            Malesuada pellentesque in magna aliquet sed nascetur ut viverra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
