/* eslint-disable no-unused-vars */
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../AuthContext/AuthContext";
import { Spinner } from "@chakra-ui/react";

const Register = () => {
  const { createAccount, addProfile, success, error, loading, setLoading } =
    useContext(userContext);

  const navigate = useNavigate();

  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, SetPassword] = useState("");

  // Create Account Auth
  const handleRegister = (e) => {
    setLoading(true);
    e.preventDefault();
    createAccount(email, password)
      .then(() => {
        // UserName And Photo
        addProfile(UserName, photo)
          .then(() => {
            success("Register SuccessFull");
            navigate("/");
          })
          .catch((e) => {
            error(e.message.substr(10));
          });
      })
      .catch((e) => {
        error(e.message.substr(10));
      });
  };

  return (
    <div className="container mx-auto px-5">
        {/* Loading */}
        {
            loading ? <div className="text-center mt-4">
                <Spinner color='red.500' />
            </div> : ""
        }

      <div className="py-10">
        <form
          onSubmit={handleRegister}
          className="w-[680px] max-w-full mx-auto rounded-lg shadow-2xl py-8 sm:px-12 px-6"
        >
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
                type="url"
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
                      className:
                        "!border rounded !w-full !h-[2.5rem] !px-[1rem]",
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
    </div>
  );
};

export default Register;
