/* eslint-disable no-unused-vars */
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, SetPassword] = useState("");

  return (
    <div className="container mx-auto py-10 px-5">
      <form className="w-[680px] max-w-full mx-auto rounded-lg shadow-2xl py-8 sm:px-12 px-6">
        <h2 className="text-3xl font-medium font-['inter'] text-center mb-4">
          Register
        </h2>
        <div className="flex flex-col gap-7 pt-4">
          <span className="p-float-label">
            <InputText
              required
              type="text"
              id="username"
              className="w-full"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              pt={{
                root: { className: "!border !h-[2.5rem] !px-[1rem]" },
              }}
            />
            <label htmlFor="username">Username</label>
          </span>
          <span className="p-float-label">
            <InputText
              required
              type="email"
              id="email"
              className="w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pt={{
                root: { className: "!border !h-[2.5rem] !px-[1rem]" },
              }}
            />
            <label htmlFor="email">Email</label>
          </span>
          <span className="p-float-label">
            <InputText
              required
              type="email"
              id="photo"
              className="w-full"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              pt={{
                root: { className: "!border !h-[2.5rem] !px-[1rem]" },
              }}
            />
            <label htmlFor="photo">Photo URL</label>
          </span>
          <div className="pb-3">
            <span className="p-float-label">
              <Password
                required
                className="w-full"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
                toggleMask
                pt={{
                  input: {
                    className: "!border rounded !w-full !h-[2.5rem] !px-[1rem]",
                    id: "password",
                  },
                }}
              />
              <label htmlFor="password">Password</label>
            </span>
          </div>
          <button
            type="submit"
            className="bg-pink-600 text-white text-lg font-medium font-['Inter'] leading-normal rounded-md px-3 lg:px-5 py-2"
          >
            Register
          </button>
          <p className="font-normal text-lg -my-2 text-center">
            <small>
              Already Have a Account ?
              <Link className="text-red-500 font-medium" to="/login">
                Login
              </Link>
            </small>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
