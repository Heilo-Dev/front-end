import React from "react";
import { APIEndpoints } from "../../../../data";
import { useGetUserInfoQuery } from "../../../../redux/slices/apiSlice";
import { InputBox } from "../../../inputs";

type Props = {};

const AccountDetails = (props: Props) => {
  const { data } = useGetUserInfoQuery();
  const handleChangePassword = (e: any) => {
    e.preventDefault();
    const newPass = e.target.newPass.value;
    const dataInfo = {
      email: data?.result?.email,
      password: newPass,
    };
    console.log(dataInfo);
    // update request
    const token = localStorage.getItem("heiloUserToken");
    const url = `${process.env.apiUrl}${APIEndpoints.resetPassword}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataInfo),
    }).then((res) => console.log(res));
  };
  return (
    <section className="bg-bgAccent rounded-[30px] p-4 mb-8">
      <form action="" onSubmit={handleChangePassword}>
        <div className="flex justify-between">
          <div className="flex space-x-3 items-start">
            <p className="bg-primaryLight text-[#FFFFFF] px-6 py-1 rounded-full inline">
              Account Details
            </p>
            <p className="text-primaryDark">change password</p>
          </div>
          <button
            type="submit"
            className="btnPrimary bg-[#C4C4C4] text-primaryDark px-6 py-1 rounded-full font-normal"
          >
            save
          </button>
        </div>
        <div className="my-6">
          <div className="grid grid-cols-2  items-center justify-center">
            <div className=" w-fit rounded-[30px] mx-auto px-6 border-2 border-[#E0E0E0]">
              <InputBox
                className="border-none bg-bgAccent text-center mt-4 p-0"
                onChange={() => {}}
                placeholder="Current Password"
              />
            </div>

            <div className=" w-fit rounded-[30px] mx-auto px-6 border-2 border-[#E0E0E0]">
              <InputBox
                className="border-none bg-bgAccent text-center mt-4 p-0 "
                onChange={() => {}}
                name="newPass"
                placeholder="New Password"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AccountDetails;
