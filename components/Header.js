import Image from "next/image";
import AboutBlock from "./AboutBlock";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
  ArrowSmLeftIcon,
} from "@heroicons/react/solid";

import React, { useRef } from "react";
import { useRouter } from "next/dist/client/router";
import Router from "next/router";
import { useGoogleLogin } from "@react-oauth/google";

function Header({ pageRefs }) {
  function scrollIntoView(type) {
    pageRefs.current[type].scrollIntoView({
      behavior: "smooth",
    });
  }
  const router = useRouter();
  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => console.log(codeResponse),
  //   flow: "auth-code",
  // });
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 bg-gray-100 py-5 px-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <img
          src="logo.png"
          layout="fill"
          width="300px"
          // objectPosition="left"
          className="lg:w-[300px] md:w-[200px] sm:w-[100px] xs:w-[100px]"
        />
      </div>
      <div className="flex justify-end gap-5 space-x-10 py-5 text-blue-700 font-semibold md:">
        <a
          className="lg:p-1 cursor-pointer text-sm md:text-base"
          onClick={() => scrollIntoView("about")}
        >
          About
        </a>
        <a
          className="lg:p-1 cursor-pointer text-sm md:text-base"
          onClick={() => scrollIntoView("learning")}
        >
          Learning
        </a>
        <a
          className="lg:p-1 cursor-pointer text-sm md:text-base"
          onClick={() => scrollIntoView("partners")}
        >
          Partners
        </a>
        {/* <MyCustomButton
          // onClick={() => login()}
          className="lg: text-white font-medium bg-blue-700 px-6 py-1 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-center text-base sm: text-base"
        >
          Sign up
        </MyCustomButton> */}
        <div className="flex items-center space-x-4 justify-end text-blue-700">
          <div className=" flex items-center space-x-2 border-2 border-gray-300 p-1 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon
              className="h-6 cursor-pointer"
              onClick={() => router.push("profile")}
            />
          </div>
        </div>
      </div>
      {/* Right */}
    </header>
  );
}
export default Header;
