import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

  const  userStatus = false;



  return (
    <header className="w-full mx-auto px-4 py-4">
      <nav className="flex justify-between items-center w-full">
        {/* Left Side of Navbar */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <FaBars className="size-6" />
          </Link>

          <div className="relative sm:w-72 w-40">
            <FaSearch className="size-4 absolute left-3 inset-y-2" />
            <input
              type="text"
              placeholder="   Search"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Right Side of Navbar */}
        <div className="flex items-center gap-8">

          {
            userStatus ? <>
            <button>
              <img src="" alt="userImg" />
            </button>
            </> : <Link to="/login"><FaUser className="size-6"/></Link>
             

          }

     




          <FaUser className="size-6 " />
          <button>
          <FaHeart className="size-6 " />
          </button>

          <button onClick={"/cart"}  className="bg-primary sm:px-6 py-2 flex items-center rounded-sm">
          <FaShoppingCart className="size-6 " />
          <span></span>
          </button>
        </div>
      </nav>
     </header>

   








  );
};

export default Navbar;
