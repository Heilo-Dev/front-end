import React from "react";
import StudentSection from "../../../components/admin/contact/student-section";
import TeacherSection from "../../../components/admin/contact/teacher-section";
import { AdminLayout } from "../../../layouts";

type Props = {};

const index = (props: Props) => {
  return (
    <AdminLayout>
      <div className="px-8 py-4">
        <div className="mb-3">
          <TeacherSection />
        </div>
        <div>
            <StudentSection/>
        </div>
      </div>
    </AdminLayout>
  );
};

export default index;
