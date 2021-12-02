import React from "react";
import { Link } from "gatsby";

export default function Navigation() {
  return (
    <nav
      role="navigation"
      className="my-0 z-50 h-16 flex justify-between items-center bg-gradient-to-r from-black to-gray-700 text-blue-100 sticky top-0"
    >
      <Link className="flex align-middle ml-2 text-blue-300" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
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
        <div className="ml-2 text-2xl extrabold text-blue-300 ">
          Content Creator Pro
        </div>
      </Link>
      <div className="mr-5 text-blue-300">Login</div>
    </nav>
  );
}
