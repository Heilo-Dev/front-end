import React from "react";

type Props = {};

const PaymentItem = (props: Props) => {
  return (
    <div className="bg-white text-[#7D7C7C] text-xs mb-2 px-2 py-1 text-center rounded-full flex items-center justify-between">
      <p className="px-4 py-1 min-w-fit border rounded-full">#1112</p>
      <p className="border-primaryDark ml-3 pr-2 pl-3 py-2 min-w-fit w-full text-center border-l-[1px] font-semibold uppercase">
        Ruhul Tusar
      </p>
      <p className="border-primaryDark pr-2 pl-3 py-2 min-w-fit w-full border-l-[1px] font-semibold capitalize">
        2 hours
      </p>
      <p className="border-primaryDark pr-2 pl-3 py-2 min-w-fit w-full border-l-[1px] capitalize">
        Tk. 600.00
      </p>
      <p className="border-primaryDark pr-2 pl-3 py-2 min-w-fit w-full border-l-[1px] capitalize text-primaryDark font-semibold">
        Tk. 1750
      </p>
    </div>
  );
};

export default PaymentItem;
