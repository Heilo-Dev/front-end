import React from "react";

type Props = {};

const Session = (props: Props) => {
  return (
    <div className="py-1 bg-white my-2 rounded-3xl px-3">
      <table>
        <tbody>
          <tr>
            <td className=" custom-td">
              <span className="border-2 border-primaryDark px-3 rounded-xl">
                27th July, 2021
              </span>
            </td>
            <td className=" custom-td">ID 11121</td>
            <td className=" custom-td">Ruhul Tusar</td>
            <td className=" custom-td">
              Topic- Polygons I Gerometry I Maths B
            </td>
            <td className="px-[4px] py-[5px] text-primaryDark">
              Time- 4:30-5.30 pm
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Session;
