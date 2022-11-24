import React from "react";
import { DashboardCardShapeLarge } from "../../icons/student-dashboard/dashboard-card-shape-large";
import { DashboardCardShapeSmall } from "../../icons/student-dashboard/dashboard-card-shape-small";

type Props = {
  textColor: any;
  color1: string;
  color2: string;
  color3: string;
  amount: string;
  cardName: string;
};

const DashboardCard = ({
  textColor,
  color1,
  color2,
  color3,
  amount,
  cardName,
}: Props) => {
  console.log(textColor);
  return (
    <div
      className={`rounded-[17px] h-32 w-56 ${color1} relative text-right py-3 px-5 ${textColor}`}
    >
      <h1 className="text-sm">{cardName}</h1>
      <h1 className="text-xl font-bold mt-3">{amount}</h1>
      <DashboardCardShapeLarge
        className={`${color2} absolute top-[6px] left-0`}
      />
      <DashboardCardShapeSmall
        className={`${color3} absolute top-[31px] left-[-12px]`}
      />
    </div>
  );
};

export default DashboardCard;
