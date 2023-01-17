import React from "react";

import { DashboardCardShapeLarge } from "../../icons/student-dashboard/dashboard-card-shape-large";
import { DashboardCardShapeSmall } from "../../icons/student-dashboard/dashboard-card-shape-small";

type Props = {
  color1?: string;
  color2?: string;
  color3?: string;
  cardNumber?: number;
  amount?: string;
  cardName?: string;
  textColor?: string;
  selectedCard?: number;
  setSelectedCard: React.Dispatch<React.SetStateAction<number>>;
};

const DashboardCard = ({
  color1,
  color2,
  color3,
  cardNumber,
  amount,
  cardName,
  textColor,
  selectedCard,
  setSelectedCard,
}: Props) => {
  return (
    <div
      className={`rounded-[17px] h-32 w-56 ${
        selectedCard === cardNumber ? "bg-[#5f5f5f] text-white" : "bg-[#f5f5f5]"
      } cursor-pointer relative text-right py-3 px-5`}
      onClick={() => setSelectedCard(cardNumber)}
    >
      <h1 className="text-sm">{cardName}</h1>
      <h1 className="mt-3 text-xl font-bold">{amount}</h1>
      <DashboardCardShapeLarge
        className={`${color1} absolute top-[6px] left-0`}
      />
      <DashboardCardShapeSmall
        className={`${color2} absolute top-[31px] left-[-12px]`}
      />
    </div>
  );
};

export default DashboardCard;
