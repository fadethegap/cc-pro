import React from "react";
import { Link } from "gatsby";
import { login, logout, isAuthenticated, getProfile } from "../utils/auth";

export default function Header2() {
  const handleLogin = () => {
    login();
    return <p>Redirecting to login...</p>;
  };

  const handleLogout = () => {
    logout();
  };

  // if (isAuthenticated()) {
  //   const user = getProfile();
  //   console.log(user);
  // }
  const user = getProfile();

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-black to-gray-700 text-blue-100 h-16 p-4">
      <div className="flex items-center">
        <Link className="flex items-center ml-2 text-blue-300" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-1 md:h-8 md:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
            />
          </svg>
          <div className="p-1.5 md:text-2xl extrabold text-blue-300 ">
            Content Creator Pro
          </div>
        </Link>
        <div className="px-5">
          {/* <input type="text" name="search" id="" className="rounded" /> */}
        </div>
      </div>
      <div>
        {!isAuthenticated() ? (
          <button
            onClick={handleLogin}
            className="bg-gray-500 text-gray-300 hover:bg-gray-100 hover:text-gray-500 transition duration-200 px-5 py-1 rounded"
          >
            Login
          </button>
        ) : (
          <div className="flex flex-inline">
            {/* <div className=" text-blue-100">Hello</div> */}

            <button
              onClick={handleLogout}
              className="bg-gray-500 text-gray-300 hover:bg-gray-100 hover:text-gray-500 transition duration-200 px-5 py-1 rounded"
            >
              Logout
            </button>
            <img
              className="rounded-full h-10 ml-3"
              src={user.picture}
              alt={user.name}
            />
          </div>
        )}
      </div>
    </div>
  );
}
