/* eslint-disable no-unused-vars */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../AuthContext/AuthContext";

const Login = () => {
  const { login, success, error, loading, setLoading, googleAuth, githubAuth } =
    useContext(userContext);
  const navigate = useNavigate();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Auth Login
    login(email, password)
      .then(() => {
        setLoading(false);
        success("Login SuccessFull");
        navigate("/");
      })
      .catch((e) => {
        setLoading(false);
        error(e.message.substr(10));
      });
  };

  // Google Auth
  const handleGoogleLogin = () => {
    setLoading(true);
    googleAuth()
      .then(() => {
        setLoading(false);
        success("Google Login SuccessFull");
        navigate("/");
      })
      .catch((e) => {
        setLoading(false);
        error(e.message.substr(10));
      });
  };

  // Github Auth
  const handleGithubLogin = () => {
    setLoading(true);
    githubAuth()
      .then(() => {
        setLoading(false);
        success("Github Login SuccessFull");
        navigate("/");
      })
      .catch((e) => {
        setLoading(false);
        error(e.message.substr(10));
      });
  };

  return (
    <div className="container mx-auto px-5">
      {/* Loading */}
      {loading ? (
        <div className="text-center mt-4">
          <Spinner color="red.500" />
        </div>
      ) : (
        ""
      )}

      <div className="py-10">
        <form
          onSubmit={handleLogin}
          className="w-[680px] max-w-full mx-auto rounded-lg shadow-2xl py-8 sm:px-12 px-6"
        >
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
                onClick={handleGoogleLogin}
                className="bg-[#DC4E41] text-white text-lg font-medium font-['Inter'] leading rounded-md px-3 lg:px-5 py-[9px] flex items-center justify-center gap-2"
                type="button"
              >
                Sing In With <FaGoogle className="text-white text-2xl" />
              </button>
              <button
                onClick={handleGithubLogin}
                className="bg-black text-white text-lg font-medium font-['Inter'] leading rounded-md px-3 lg:px-5 py-[9px] flex items-center justify-center gap-2"
                type="button"
              >
                <span>Sing In With</span> <FaGithub className="text-2xl" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
