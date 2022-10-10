import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = ({ navOptions }) => {
  return (
    <ul
      className={`bg-lime-700 text-white z-10 md:bg-lime-600 w-3/5 md:w-3/7 md:flex justify-end absolute  md:static ease-in duration-300 ${
        navOptions ? "left-0 top-0 h-full" : "left-[-240px] top-0 h-full"
      }`}
    >
      <li className="md:mx-1 text-xl md:my-0 my-20 px-7 md:px-2">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "text-black" : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li className="md:mx-1 text-xl md:my-0 my-20 px-7 md:px-2">
        <NavLink
          to="/statistics"
          className={({ isActive }) => (isActive ? "text-black" : undefined)}
        >
          Statistics
        </NavLink>
      </li>
      <li className="md:mx-1 text-xl md:my-0 my-20 px-7 md:px-2">
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "text-black" : undefined)}
        >
          Blog
        </NavLink>
      </li>
    </ul>
  );
};

export default NavItems;
