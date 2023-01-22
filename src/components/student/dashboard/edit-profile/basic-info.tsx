import React from "react";

// @@ internal imports @@ //
import { InputBox } from "@components/inputs";
import { APIEndpoints } from "@data/index";

type Props = {
  basic: any;
};

const BasicInfo = (props: Props) => {
  const { basic } = props;
  console.log(basic);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("heiloUserToken");
    console.log(token);
    const { name, phoneNumber, gender, village, division } = e.target;
    const basicInfo = {
      name: name.value,
      phoneNumber: phoneNumber.value,
      gender: gender.value,
      village: village.value,
      division: division.value,
    };
    console.log(basicInfo);
    const url = `${process.env.apiUrl}${APIEndpoints.studentInfo}/update`;
    console.log(url);
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(basicInfo),
    }).then((res) => console.log(res));
  };
  return (
    <div className="bg-bgAccent rounded-lg p-4 mb-8">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <p className="bg-primaryLight text-[#FFFFFF] px-6 py-1 rounded-full inline">
            Basic Information
          </p>
          <button
            type="submit"
            className="btnPrimary bg-[#C4C4C4] text-primaryDark px-6 py-1 rounded-full font-normal"
          >
            save
          </button>
        </div>
        <div className="my-6">
          <div className="lg:grid grid-cols-3 gap-4">
            {/* name village divission */}

            <div>
              <div className="lg:w-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
                <label className="text-[#7D7D7D]" htmlFor="">
                  Name
                </label>
                <br />
                <InputBox
                  className="border-none bg-bgAccent py-0 m-0"
                  onChange={() => {}}
                  name="name"
                  required
                  placeholder={basic?.name}
                />
              </div>
              <div className="flex mt-2 space-x-2">
                <div className=" w-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
                  <label className="text-[#7D7D7D]" htmlFor="">
                    Devision
                  </label>
                  <br />
                  <InputBox
                    className="border-none bg-bgAccent py-0 m-0"
                    name="division"
                    required
                    onChange={() => {}}
                    placeholder={basic?.division}
                  />
                </div>
                <div className=" w-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
                  <label className="text-[#7D7D7D]" htmlFor="">
                    Village,
                  </label>
                  <br />
                  <InputBox
                    className="border-none bg-bgAccent py-0 m-0"
                    name="village"
                    required
                    onChange={() => {}}
                    placeholder={basic?.village}
                  />
                </div>
              </div>
            </div>

            {/* email and gender */}

            <div className="mt-2 lg:mt-0">
              <div className="lg:w-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
                <label className="text-[#7D7D7D]" htmlFor="">
                  email
                </label>
                <br />
                <InputBox
                  className="border-none bg-bgAccent py-0 m-0"
                  name="email"
                  onChange={() => {}}
                  readonly
                  placeholder={basic?.email}
                />
              </div>
              <div className=" lg:w-64 rounded-lg px-6 border-2 mt-2 border-[#E0E0E0]">
                <label className="text-[#7D7D7D]" htmlFor="">
                  Gender
                </label>{" "}
                <br />
                <select
                  className="border-none bg-bgAccent py-0 m-0"
                  name="gender"
                  onChange={() => {}}
                  defaultValue="male/female"
                >
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
            </div>

            {/* contact number */}

            <div className="mt-2 lg:mt-0 lg:w-fit h-fit rounded-lg px-6 border-2 border-[#E0E0E0]">
              <label className="text-[#7D7D7D]" htmlFor="">
                Contact Number
              </label>
              <br />
              <InputBox
                className="border-none bg-bgAccent py-0 m-0"
                name="phoneNumber"
                type="number"
                required
                onChange={() => {}}
                placeholder={basic?.phoneNumber}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
