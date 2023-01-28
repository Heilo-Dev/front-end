import Image from "next/image";
import React from "react";
import tutor from "../../../assets/img/tutor.png";
// import { UserInfo } from "../../../types/user";

type Props = {
    user?: any;
};

const AvailableTutor = ({ user }: Props) => {
    return (
        <div>
            <div className="py-3 mb-4 px-[21px] sm:px-8 bg-bgAccent h-fit sm:h-[128px] rounded-lg">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className=" w-[47px] h-[42px] sm:w-[98.01px] sm:h-[98.01px]">
                            <Image
                                className="w-full h-full"
                                src={tutor}
                                alt="tutor avatar"
                            />
                        </div>

                        <div className=" sm:gap-x-12 sm:mx-auto h-[100%]">
                            <p className=" text-[10px] sm:text-[19px] text-[#444F55] leading-[15px] sm:leading-7 tracking-wider font-semibold uppercase ">
                                {user?.name}
                            </p>
                            <p className=" text-[8px] sm:text-[13px] leading-2 sm:leading-5 font-light text-[#7D7c7c] capitalize">
                                {user?.education?.currentInstitue?.name}
                            </p>
                            <p className="text-[8px] sm:text-[13px] font-normal leading-3 sm:leading-5 capitalize italic text-[#7D7c7c]">
                                address, subject
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[6.47px] sm:gap-3 sm:justify-around">
                        <button className="btnPrimary bg-white  w-[60px] sm:w-full  h-[22.64px] sm:h-[40px] text-accent  flex items-center justify-center">
                            <span className="p-0 m-0 font-semibold text-[8px] sm:text-lg leading-3 sm:leading-[27px] tracking-wider">
                                450/hr
                            </span>
                        </button>
                        <button className="btnPrimary w-[60px] sm:w-full  h-[22.64px] sm:h-[40px] text-accent flex items-center justify-center">
                            <span className="p-0 m-0 font-semibold text-[8px] sm:text-lg leading-3 sm:leading-[27px] tracking-wider">
                                message
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableTutor;
