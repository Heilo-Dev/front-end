import axios from "axios";
import React from "react";
import { APIEndpoints } from "../../../../data";
import OtherInfo from "./other-info";
import Sidebar from "./sidebar";

type Props = {};

const EditProfile = (props: Props) => {
  // const url=process.env.apiUrl + APIEndpoints.student;

  // axios
  //     .get(url)
  //     .then((data) =>console.log(data.data))

  return (
    <section
      className="grid  grid-cols-[375px_minmax(700px,_1fr)] gap-12 items-start w-fit mx-auto 
      relative 
     "
    >
      <div className="w-[375px] fixed top-[120px]">
        <Sidebar />
      </div>
      <div className=" w-[700px] absolute right-0  mt-[-250px]">
        <OtherInfo />
      </div>
    </section>
  );
};

export default EditProfile;
