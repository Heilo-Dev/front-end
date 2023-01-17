import axios from "axios";
import React from "react";
import { APIEndpoints } from "../../../../data";
import { Scrollbar } from "../../../../components";
import OtherInfo from "./other-info";
import StudentInfoCard from "../student-info-card";
import { useGetUserInfoQuery } from "../../../../redux/slices/apiSlice";

type Props = {};

const EditProfile = (props: Props) => {
  const { data, error, isLoading, isFetching, isSuccess }: any =
    useGetUserInfoQuery();
  // const url=process.env.apiUrl + APIEndpoints.student;

  // axios
  //     .get(url)
  //     .then((data) =>console.log(data.data))

  return (
    <section className="lg:grid grid-cols-12 gap-4 mt-4 m-3 lg:m-0">
      <div className="col-span-4">
        <StudentInfoCard userInfo={data?.result} />
      </div>
      <div className="col-span-8 mt-3 lg:mt-0">
        <Scrollbar style={{ height: "calc(100vh - 130px)" }}>
          <OtherInfo userInfo={data?.result} />
        </Scrollbar>
      </div>
    </section>
  );
};

export default EditProfile;
