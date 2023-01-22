import React from "react";

// @@ internal imports @@ //
import StudentInfoCard from "@components/student/dashboard/student-info-card";
import Scrollbar from "@components/ui/scrollbar";
import OtherInfo from "./other-info";

type Props = {};

const EditProfile = (props: Props) => {
  // const url=process.env.apiUrl + APIEndpoints.student;

  // axios
  //     .get(url)
  //     .then((data) =>console.log(data.data))

  return (
    <section className="lg:grid grid-cols-12 gap-4 mt-4">
      <div className="col-span-4">
        <StudentInfoCard />
      </div>
      <div className="col-span-8 mt-8 lg:mt-0">
        <Scrollbar style={{ height: "calc(100vh - 130px)" }}>
          <OtherInfo />
        </Scrollbar>
      </div>
    </section>
  );
};

export default EditProfile;
