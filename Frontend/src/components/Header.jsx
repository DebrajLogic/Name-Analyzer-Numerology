import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="py-2 px-10 flex justify-between items-center bg-gray-300">
      {/* Logo */}
      <div>
        <Logo />
      </div>

      {/* Links */}
      <div className="flex gap-6 text-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-pink-900 font-semibold"
              : `text-black hover:text-blue-700 font-semibold`
          }
        >
          Name Analysis
        </NavLink>
        <NavLink
          to="/numbers"
          className={({ isActive }) =>
            isActive
              ? "text-pink-900 font-semibold"
              : `text-black hover:text-blue-700 font-semibold`
          }
        >
          Life Purpose
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
