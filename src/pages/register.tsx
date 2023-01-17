import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

// @@ internal imports @@ //
import wave from "@assets/img/wave2.png";
import {
  BtnPrimary,
  CheckBox,
  InputBox,
  LocalImage,
  SelectBox,
} from "@components";
import { APIEndpoints } from "@data";

// @@ register @@ //
const Register = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [conditionsAgreed, setConditionsAgreed] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    if (
      !name ||
      !gender ||
      !email ||
      !number ||
      !password ||
      !conditionsAgreed
    ) {
      alert("Please fill up all fields");
      return;
    }
    if (confirmPass !== password) {
      alert("Password doesn't match");
      return;
    }

    const data = {
      name: name,
      email: email,
      password: password,
      role: "student",
      phoneNumber: number,
    };

    const url = process.env.apiUrl + APIEndpoints.registerAPI;

    axios
      .post(url, data)
      .then((data) => {
        if (data.data.status === "success") router.push("/login");
      })
      .catch(function (error) {
        console.log(error.response.data.error);
      });
  };

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <div className="absolute top-0 flex flex-wrap items-center justify-center phase2-wave">
          <LocalImage
            src={wave}
            alt="Hero Section Image"
            layout="fill"
            position="top"
          />
          {/* 
          //* This is the Registration form modal
          */}
          <div className="z-20 -mt-8 form-modal">
            <h1 className="mx-2 text-2xl font-semibold text-right text-primaryDark">
              x
            </h1>
            <h1 className="mx-4 text-xl text-primaryDark">Welcome to Heilo!</h1>
            <div className="flex flex-col items-center my-4 mx-9">
              <InputBox
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <SelectBox onChange={(e) => setGender(e.target.value)} />
              <InputBox
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <InputBox
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="Phone Number"
              />
              <InputBox
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <InputBox
                onChange={(e) => setConfirmPass(e.target.value)}
                type="password"
                placeholder="Confirm Password"
              />
              <div className="flex my-3">
                <CheckBox
                  onChange={(e) => setConditionsAgreed(e.target.checked)}
                />
                <p className="ml-1 text-xs font-semibold text-textSecondary">
                  I agree to the{" "}
                  <span className="text-primaryDark">Terms and Conditions</span>
                </p>
              </div>
              <BtnPrimary
                onClick={handleRegister}
                className="mt-2"
                label="Register"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
