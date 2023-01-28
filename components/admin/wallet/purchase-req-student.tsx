import React from "react";
import PurchaseDetails from "./purchase-details";

type Props = {};

const PurchaseReqStudent = (props: Props) => {
  return (
    <div>
      <p className="text-center text-xl text-primaryDark font-medium">Purchase Request(student)</p>
      <div className="lg:flex  justify-between space-y-3 lg:space-y-0">
        <div>
          <div className="uppercase py-6 pl-6 px-4 border-[3px] border-accent/60 rounded-2xl">
            <p className="text-2xl text-accent/50">net profit</p>
            <p className="text-4xl font-bold text-[#C1126B]">$ 1511</p>
          </div>
          <div className="uppercase py-6 pl-4 px-4 border-[3px] border-accent/60 rounded-2xl mt-3">
            <p className="text-2xl text-accent/50">cross profit</p>
            <p className="text-4xl font-bold text-[#C1126B]">$ 1511</p>
          </div>
        </div>
        <div className="lg:ml-3">
          <PurchaseDetails />
          <PurchaseDetails />
        </div>
      </div>
    </div>
  );
};

export default PurchaseReqStudent;
