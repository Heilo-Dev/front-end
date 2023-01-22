import React from "react";

type Props = {};

const Paid = (props: Props) => {
  return (
    <div className="bg-bgAccent rounded-2xl flex-1 p-4 relative">
      <div className="bg-primaryDark py-2 pl-6 pr-1 rounded-xl text-white absolute top-[-45px] translate-x-[90px]">
        <div className="flex justify-between items-start">
          <h1 className="capitalize">total paid</h1>
          <select className="text-sm bg-primaryDark text-black" name="" id="">
            <option value="last 7 day">last 7 day</option>
          </select>
        </div>
        <div>
          <h1 className="text-xl font-bold">TK.50,000</h1>
        </div>
      </div>
      <table className="w-full mt-10">
        <thead>
          <tr className="capitalize text-textSecondary text-sm bg-white">
            <th className="py-2 pl-3 pr-1 rounded-l-full">serial no.</th>
            <th className="px-4">details</th>
            <th>date</th>
            <th className="pr-3 pl-1 rounded-r-full border-none">amount</th>
          </tr>
        </thead>
        <tbody className="text-textSecondary">
          <tr className="text-center pt-12">
            <td>#1112</td>
            <td>Safin Riaz</td>
            <td>11-09-2021</td>
            <td>Tk. 1000</td>
          </tr>
          <tr className="text-center">
            <td>#1112</td>
            <td>Safin Riaz</td>
            <td>11-09-2021</td>
            <td>Tk. 1000</td>
          </tr>
          <tr className="text-center">
            <td>#1112</td>
            <td>Safin Riaz</td>
            <td>11-09-2021</td>
            <td>Tk. 1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Paid;
