import React from "react";
import { APIEndpoints } from "../../../../data";
import { useUpdateEducationMutation } from "../../../../redux/slices/apiSlice";
import { InputBox } from "../../../inputs";

type Props = {};

const EducationInfo = (props: Props) => {
  const [updateEducation, response] = useUpdateEducationMutation();
  const editEducation = (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("heiloUserToken");
    const { institute, medium, background } = e.target;
    const currentInstitution = {
      name: institute.value,
      department: background.value,
    };
    fetch(`${process.env.apiUrl}${APIEndpoints.studentInfo}/update`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(currentInstitution),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <section className="bg-bgAccent rounded-lg p-4 mb-8">
      <form action="" onSubmit={editEducation}>
        <div className="flex justify-between">
          <p className="bg-primaryLight text-[#FFFFFF] px-6 py-1 rounded-full inline">
            Education
          </p>
          <button
            type="submit"
            className="btnPrimary bg-[#C4C4C4] text-primaryDark px-6 py-1 rounded-full font-normal"
          >
            save
          </button>
        </div>
        <div className="my-6">
          <div className="grid grid-cols-2 gap-4">
            {/* current institute */}

            <div className=" w-full rounded-lg px-6 border-2 border-[#E0E0E0]">
              <label className="text-[#7D7D7D]" htmlFor="">
                Current institute
              </label>
              <br />
              <InputBox
                required
                name="institute"
                className="border-none bg-bgAccent py-0 m-0"
                onChange={() => {}}
                placeholder="sakib.abdullah@gmail.com"
              />
            </div>

            <div className=" w-full rounded-lg px-6 border-2  border-[#E0E0E0]">
              <label className="text-[#7D7D7D]" htmlFor="">
                class
              </label>
              <br />
              <select
                className="w-full border-none bg-bgAccent p-0 text-primaryDark"
                id="cars"
                name="class"
              >
                <option value="10">10</option>
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="7">7</option>
              </select>
            </div>

            {/* contact number */}

            <div className=" w-full h-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
              <label className="text-[#7D7D7D]" htmlFor="">
                medium
              </label>
              <br />
              <select
                className="w-full border-none bg-bgAccent p-0 text-primaryDark"
                id="cars"
                name="medium"
              >
                <option value="english">english</option>
                <option value="bangla">bangla</option>
              </select>
            </div>
            <div className=" w-full h-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
              <label className="text-[#7D7D7D]" htmlFor="">
                Background
              </label>
              <br />
              <select
                className="w-full border-none bg-bgAccent p-0 text-primaryDark"
                id="cars"
                name="background"
              >
                <option value="Science">Science</option>
                <option value="Huminities">Huminities</option>
                <option value="Bussiness studies">Bussiness studies</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EducationInfo;
