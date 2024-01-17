/* eslint-disable no-unused-vars */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="container mx-auto py-10 px-5">
      <form className="w-[680px] max-w-full mx-auto rounded-lg shadow-2xl py-8 sm:px-12 px-6">
        <h2 className="text-3xl font-medium font-['inter'] text-center mb-4">
          Login
        </h2>
        <div className="flex flex-col gap-5">
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input name="email" size={"md"} type="email" required />
          </FormControl>
          <div className="pb-3">
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Input
                name="password"
                size={"md"}
                pr="4.5rem"
                type={show ? "text" : "password"}
                id="password"
                required
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
          <button
            type="submit"
            className="bg-pink-600 text-white text-lg font-medium font-['Inter'] leading-normal rounded-md px-3 lg:px-5 py-2"
          >
            Login
          </button>
          <p className="font-normal text-lg -my-2 text-center">
            <small>
              Edu Toys New ?{" "}
              <Link className="text-red-500 font-medium" to="/register">
                Register
              </Link>
            </small>
          </p>
          <div className="grid md:grid-cols-2 gap-5 items-center">
            <button
              className="bg-[#DC4E41] text-white text-lg font-medium font-['Inter'] leading rounded-md px-3 lg:px-5 py-[9px] flex items-center justify-center gap-2"
              type="button"
            >
              Sing In With <FaGoogle className="text-white text-2xl" />
            </button>
            <button
              className="bg-black text-white text-lg font-medium font-['Inter'] leading rounded-md px-3 lg:px-5 py-[9px] flex items-center justify-center gap-2"
              type="button"
            >
              <span>Sing In With</span> <FaGithub className="text-2xl" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
