import axios from "axios";
import React from "react";
import { APIEndpoints } from "../../../../data";
import { Scrollbar } from "../../../../components";
import OtherInfo from "./other-info";
import StudentInfoCard from "../../../student/dashboard/student-info-card";

type Props = {};

const EditProfile = (props: Props) => {
  // const url=process.env.apiUrl + APIEndpoints.student;

  // axios
  //     .get(url)
  //     .then((data) =>console.log(data.data))

  return (
    <section className="grid grid-cols-12 gap-4 mt-4">
      <div className="col-span-4">
        <StudentInfoCard />
      </div>
      <div className="col-span-8">
        <Scrollbar style={{ height: "calc(100vh - 130px)" }}>
          <OtherInfo />
        </Scrollbar>
      </div>
    </section>
  );
};

export default EditProfile;
