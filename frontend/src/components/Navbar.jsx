import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap- 4 d-flex">
          <Link to="/">
            <FaBars className="size-6" />
          </Link>

          <div className="relative sm:w72 w-40 space-x-2">
            <FaSearch className="size-6 absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
