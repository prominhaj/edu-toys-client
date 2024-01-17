/* eslint-disable no-unused-vars */
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../AuthContext/AuthContext";
import { Avatar } from "primereact/avatar";
import { Toast } from "primereact/toast";
import { Spinner } from "@chakra-ui/react";

const Register = () => {
  const { createAccount, addProfile, setLoading, loading } =
    useContext(userContext);

  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, SetPassword] = useState("");

  // Toast
  const [visible, setVisible] = useState(false);
  const toastBC = useRef(null);
  const clear = () => {
    toastBC.current.clear();
    setVisible(false);
  };

  // Create Account Auth
  const handleRegister = (e) => {
    setLoading(true);
    e.preventDefault();
    createAccount(email, password)
      .then((result) => {
        const user = result.user;
        // UserName And Photo
        addProfile(UserName, photo)
          .then(() => {
            if (!visible) {
              setVisible(true);
              toastBC.current.clear();
              toastBC.current.show({
                severity: "success",
                summary: "Can you send me the report?",
                sticky: true,
                content: (props) => (
                  <div className="flex flex-col align-items-left">
                    <div className="flex align-items-left gap-2">
                      <Avatar image={user.photoURL} shape="circle" />
                      <span className="font-bold text-900">
                        {user.displayName}
                      </span>
                    </div>
                    <div className="font-medium text-lg my-3 text-900">
                      Your Registration SuccessFull
                    </div>
                  </div>
                ),
              });
            }
            setLoading(false);
          })
          .catch((e) => {
            console.log(e.message);
          });
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="container mx-auto px-5">
      {
        loading ? <div className="text-center mt-4">
        <Spinner color="red.500" />
        </div> : ''
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
      <div className="card flex justify-content-center">
        <Toast
          ref={toastBC}
          position="top-center"
          onRemove={clear}
          pt={{
            message: () => ({
              className: "!w-[330px] !max-w-full",
            }),
          }}
        />
      </div>
    </div>
  );
};

export default Register;
