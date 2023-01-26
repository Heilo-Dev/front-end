import React from "react";
import Scrollbar from "../../ui/scrollbar";
import PaymentCard from "./payment-card";

type Props = {};

const PaymentRequest = (props: Props) => {
  return (
    <div>
      <h1 className="text-primaryDark text-lg font-medium mb-2 pl-4">Payment Request</h1>
      <Scrollbar className="px-4" style={{ height: "calc(45vh - 120px)" }}>
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
      </Scrollbar>
    </div>
  );
};

export default PaymentRequest;
