import React from "react";

type Props = {};

const Due = (props: Props) => {
  return (
    <div className="border-[#01B489] border-2 rounded-2xl flex-1 p-4 relative">
      <div className="bg-primaryDark p-4 rounded-2xl text-white absolute top-[-45px] translate-x-[90px]">
        <div className="flex justify-between items-start">
          <h1 className="capitalize">total due</h1>
          <select className="text-sm bg-primaryDark text-black" name="" id="">
            <option value="last 7 day">last 7 day</option>
          </select>
        </div>
        <div>
          <h1 className="text-xl font-bold">TK.12,000</h1>
        </div>
      </div>
      <table className="w-full mt-24">
        <thead>
          <tr className="text-capitalize bg-accent/10 border-red-200 border-2">
            <th className="py-2 pl-3 rounded-l-xl">serial no.</th>
            <th className="px-6">details</th>
            <th>date</th>
            <th className="pr-3 rounded-r-xl border-none">amount</th>
          </tr>
        </thead>
          <tbody>
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

export default Due;
