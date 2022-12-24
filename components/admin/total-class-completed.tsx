import React from "react";
import { Scrollbar } from "../../components";

type Props = {};

const TotalClassCompleted = (props: Props) => {
  return (
    <div className="grayDiv p-3 rounded-3xl mt-4 relative">
      <div className="titleTab bg-white font-semibold text-[#7d7d7d]">
        Total Classes <span className="text-primaryDark">Completed</span>
      </div>
      <div className="flex absolute -top-[20px] right-[8px] bg-white overflow-hidden rounded-l-full border-primaryDark border-[1px]">
        <select
          defaultValue="male"
          className="form-input mb-0 ml-3 w-[120px] py-1"
        >
          <option value="male">Last 7 days</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="p-4">
        <Scrollbar style={{ height: "calc(100vh - 360px)" }}>
          <table className="w-full">
            <thead className="sticky top-1 bg-[#f1f1f1]">
              <tr className="capitalize text-[#7d7d7d]">
                <th className="border-none">day</th>
                <th className="border-none">class completed</th>
                <th className="border-none">growth</th>
              </tr>
              <div className="w-full bg-primaryLight h-[2px] absolute"></div>
            </thead>
            <tbody>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
              <tr className="text-center text-[#7d7d7d] font-semibold">
                <td>Thursday</td>
                <td>15</td>
                <td>2.5%</td>
              </tr>
            </tbody>
          </table>
        </Scrollbar>
      </div>
    </div>
  );
};

export default TotalClassCompleted;
