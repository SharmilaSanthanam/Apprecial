import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../images/logo.png";
import Dashboard3 from "../images/dashboard3.png";
import Theme from "../images/theme.png";
import firebase from "firebase/compat/app";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        window.localStorage.clear();
        window.location.href = "/";
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
      <img className="ml-16" src={Logo} alt="Apprecial" />
      <ul className="hidden md:flex">
        <li className="p-4 no-underline hover:underline  hover:text-red-700 active:text-red-700">
          <a href="#">Home</a>
        </li>
        <li className="p-4 no-underline hover:underline  hover:text-red-700">
          <a href="#about">About</a>
        </li>
        <li className="p-4 no-underline hover:underline  hover:text-red-700">
          <a href="#products">Products</a>
        </li>
        <li className="p-4 no-underline hover:underline  hover:text-red-700">
          <a href="#timeline">Timeline</a>
        </li>
      </ul>
      <ul className="hidden md:flex mt-6">
        {isLoggedIn === "true" ? (
          <div className="rounded-md border-2 border-red-700 w-16 h-10 flex justify-center mr-5">
            <button onClick={logOut}>LogOut</button>
          </div>
        ) : (
          <Link to="/login">
            <img src={Dashboard3} alt="Dashboard"></img>
          </Link>
        )}

        {isLoggedIn === "true" ? (
          <li>
            {" "}
            <img className="mt-7 hidden " src={Theme} alt="Theme"></img>{" "}
          </li>
        ) : (
          <li>
            {" "}
            <img className="mt-7 " src={Theme} alt="Theme"></img>{" "}
          </li>
        )}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-white"
            : "fixed left-[-100%]"
        }
      >
        <img className="ml-16" src={Logo} alt="Apprecial" />
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-500">Home</li>
          <li className="p-4 border-b border-gray-500">About</li>
          <li className="p-4 border-b border-gray-500">Products</li>
          <li className="p-4 border-b border-gray-500">Timeline</li>
        </ul>
        <button className="p-8">Dashboard</button>
      </div>
    </div>
  );
};

export default Navbar;
