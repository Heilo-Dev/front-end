import Image from "next/image";
import React from "react";
import propic from "../../../assets/img/Maximilien-Robespierre 6.png";

type Props = {};

const PurchaseDetails = (props: Props) => {
  return (
    <div className="bg-primaryLight/50 p-3 rounded-3xl mb-2">
      <div className="grid sm:grid-cols-6 lg:grid-cols-12 gap-3">
        <div className="col-span-2">
          <Image src={propic} width={50} alt="" />
        </div>
        <div className="col-span-3">
          <div>
            <p className="font-bold text-md text-accentLight">
              Ruhul Amin Tusar
            </p>
            <div className="flex justify-between">
              <p>11/08/2021</p>
              <p className="ml-4">12:30 pm</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-md text-accentLight">
                Transaction ID
              </p>
              <p>sdbefyg34hbf3</p>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div>
            <p className="font-bold text-md text-accentLight">
              Ruhul Amin Tusar
            </p>
            <div className="flex justify-between">
              <p>11/08/2021</p>
              <p className="ml-4">12:30 pm</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-md text-accentLight">
                Transaction ID
              </p>
              <p>sdbefyg34hbf3</p>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div>
            <p className="font-bold text-md text-accentLight">
              Ruhul Amin Tusar
            </p>
            <div className="flex justify-between">
              <p>11/08/2021</p>
              <p className="ml-4">12:30 pm</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-md text-accentLight">
                Transaction ID
              </p>
              <p>sdbefyg34hbf3</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PurchaseDetails;
