/* eslint-disable no-unused-vars */
import React, { Fragment, useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { userContext } from "../../../AuthContext/AuthContext";

const Header = () => {
  const { user, logOut, success, error } = useContext(userContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        success("LogOut SuccessFull");
      })
      .catch((e) => {
        error(e.message);
      });
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const paddingClass = (name, route, ...rest) => {
    return (
      <>
        <NavLink
          to={route}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-pink-600 text-white text-base font-medium font-['Inter'] leading-normal rounded-md px-3 lg:px-5 py-2"
              : `text-gray-500 text-base font-medium font-['Inter'] leading-normal hover:bg-pink-600 hover:text-white rounded-md px-5 py-2 ${
                  rest[0] ? "bg-pink-600 text-white hidden lg:block" : ""
                }`
          }
        >
          {name}
        </NavLink>
      </>
    );
  };

  return (
    <header className="container mx-auto px-5">
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="relative flex py-4 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 md:flex-[0] items-center justify-center  md:justify-start">
                <Link to="/" className="flex flex-shrink-0 items-center">
                  <img
                    className="w-full h-[60px]"
                    src={logo}
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="flex lg:space-x-5">
                  {paddingClass("Home", "/")}
                  {paddingClass("All Toys", "/all-toys")}
                  {paddingClass("My Toys", "/my-toys")}
                  {paddingClass("Add A Toy", "/add-toy")}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:pr-0">
                {user ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {user?.displayName}
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleLogOut}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm font-medium text-red-500 text-start w-full"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <div className="flex items-center gap-3">
                    {paddingClass("Login", "/login")}
                    {paddingClass("Register", "/register", "active")}
                  </div>
                )}
                {/* Profile dropdown */}
              </div>
            </div>

            {/* Mobile Device */}
            <Disclosure.Panel className="md:hidden">
              <div className="flex flex-col space-y-1 px-2 sm:px-6 lg:px-8 pb-3 pt-2">
                {paddingClass("Home", "/")}
                {paddingClass("All Toys", "/all-toys")}
                {paddingClass("My Toys", "/my-toys")}
                {paddingClass("Add A Toy", "/add-toy")}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
