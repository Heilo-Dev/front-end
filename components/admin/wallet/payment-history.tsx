import React from "react";
import Scrollbar from "../../ui/scrollbar";
import SessionItem from "../session-item";
import PaymentItem from "./payment-item";

type Props = {};

const PaymentHistory = (props: Props) => {
  return (
    <div className="grayDiv p-4 rounded-3xl mt-4 relative">
      <div className="titleTab bg-white font-semibold text-[#7d7d7d] absolute top-[-12px] left-[-5px]">
        Payment History
      </div>
      <div className="p-3 mt-4">
        <Scrollbar style={{ height: "calc(80vh - 367px)" }}>
          <div className="flex justify-around capitalize mb-4 text-accentLight font-semibold">
            <p>serial no.</p>
            <p>details</p>
            <p className="mr-24">duration</p>
            <p>amount</p>
            <p>total balance</p>
          </div>
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
        </Scrollbar>
      </div>
    </div>
  );
};

export default PaymentHistory;
