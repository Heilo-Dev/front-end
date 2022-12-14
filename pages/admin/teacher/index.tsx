import React from "react";
import AccessControl from "../../../components/admin/teacher/acces-control";
import Due from "../../../components/admin/teacher/due";
import Paid from "../../../components/admin/teacher/paid";
import PaymentRequest from "../../../components/admin/teacher/payment-request";
import { AdminLayout } from "../../../layouts";

type Props = {};

const TeacherAdmin = (props: Props) => {
  return (
    <AdminLayout>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-8 py-7">
          <PaymentRequest />
          <div className="flex justify-center px-4 mt-20 space-x-3">
            <Paid />
            <Due />
          </div>
        </div>
        <div className="col-span-4 bg-[#EBEBEB] rounded-l-2xl h-screen px-2">
          <AccessControl />
        </div>
      </div>
    </AdminLayout>
  );
};

export default TeacherAdmin;
