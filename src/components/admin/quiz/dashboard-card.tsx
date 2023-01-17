import React from "react";

type Props = {
  count: number;
  title: string;
};

const AdminQuizDashboardCard = ({ count, title }: Props) => {
  return (
    <div className="border-[#8A8A8A] border-4 rounded-xl text-center py-4">
      <h1 className="text-[#7D7C7C] font-bold text-5xl">{count}</h1>
      <p className="text-[#333333] uppercase text-lg">{title}</p>
    </div>
  );
};

export default AdminQuizDashboardCard;
