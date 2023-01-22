import React from "react";

// @@ internal imports @@ //
import Scrollbar from "@components/ui/scrollbar";

type Props = {};

const TransactionHistoryTable = (props: Props) => {
  return (
    <div className="mt-4">
      <div className="font-semibold text-[#444F55] text-xl">
        Transaction History
      </div>
      <div className="py-4">
        <Scrollbar style={{ height: "calc(100vh - 340px)" }}>
          <table className="w-full text-[#616161]">
            <thead className="sticky top-1 bg-[#EBEBEB]">
              <tr className="capitalize">
                <th className="p-2.5 border-white rounded-l-full">
                  Serial no.
                </th>
                <th className="p-2.5 border-white">details</th>
                <th className="p-2.5 border-white">duration</th>
                <th className="p-2.5 border-white">amount</th>
                <th className="p-2.5 border-white rounded-r-full">
                  total balance
                </th>
              </tr>
            </thead>
            <tbody className="text-center font-semibold">
              <tr>
                <td>#1112</td>
                <td>Shafin Riaz</td>
                <td>2 hours</td>
                <td className="text-primaryDark">Tk. 600.00</td>
                <td>Tk. 1750</td>
              </tr>
              <tr>
                <td>#1112</td>
                <td>Shafin Riaz</td>
                <td>2 hours</td>
                <td className="text-primaryDark">Tk. 600.00</td>
                <td>Tk. 1750</td>
              </tr>
              <tr>
                <td>#1112</td>
                <td>Shafin Riaz</td>
                <td>2 hours</td>
                <td className="text-primaryDark">Tk. 600.00</td>
                <td>Tk. 1750</td>
              </tr>
              <tr>
                <td>#1112</td>
                <td>Shafin Riaz</td>
                <td>2 hours</td>
                <td className="text-primaryDark">Tk. 600.00</td>
                <td>Tk. 1750</td>
              </tr>
              <tr>
                <td>#1112</td>
                <td>Shafin Riaz</td>
                <td>2 hours</td>
                <td className="text-primaryDark">Tk. 600.00</td>
                <td>Tk. 1750</td>
              </tr>
              <tr>
                <td>#1112</td>
                <td>Shafin Riaz</td>
                <td>2 hours</td>
                <td className="text-primaryDark">Tk. 600.00</td>
                <td>Tk. 1750</td>
              </tr>
              <tr>
                <td>#1112</td>
                <td>Shafin Riaz</td>
                <td>2 hours</td>
                <td className="text-primaryDark">Tk. 600.00</td>
                <td>Tk. 1750</td>
              </tr>
              <tr>
                <td>#1112</td>
                <td>Shafin Riaz</td>
                <td>2 hours</td>
                <td className="text-primaryDark">Tk. 600.00</td>
                <td>Tk. 1750</td>
              </tr>
            </tbody>
          </table>
        </Scrollbar>
      </div>
    </div>
  );
};

export default TransactionHistoryTable;
