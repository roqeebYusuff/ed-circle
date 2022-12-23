import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsArrowDownShort } from "react-icons/bs";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <header className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
        <nav className=" flex justify-between items-center">
          <img src="/assets/logo.svg" alt="logo" />
          <div className="gap-2 items-center border border-[#d0d5dd] px-0.5 pl-2 py-0.5 rounded-md hidden md:flex">
            <CiSearch className="text-[#c3c5c9]" />
            <input
              className="focus:outline-none"
              type="text"
              placeholder="Want to learn?"
            />
            <button className="flex items-center px-3 py-1 font-medium text-purple-600 capitalize rounded-md bg-purple-50 hover:bg-purple-200">
              Explore
              <BsArrowDownShort />
            </button>
          </div>
          <div className="md:flex hidden items-center gap-4">
            <Link href="/">
              <span className="text-base font-medium cursor-pointer">
                Program
              </span>
            </Link>
            <Link href="/">
              <span className="text-base font-medium cursor-pointer">
                Enterprise
              </span>
            </Link>
            <Link href="/">
              <span className="text-base font-medium cursor-pointer">
                Universities
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">
              <span className="text-base font-medium cursor-pointer hidden md:inline">
                Sign In
              </span>
            </Link>
            <Link href="/">
              <span className="text-base font-medium capitalize bg-purple-500 border border-none cursor-pointer btn btn-sm">
                Create Account
              </span>
            </Link>
            {showNav ? (
              <HiOutlineX
                className="md:hidden"
                onClick={() => setShowNav(!showNav)}
                size={30}
              />
            ) : (
              <HiOutlineMenu
                className="md:hidden"
                onClick={() => setShowNav(!showNav)}
                size={30}
              />
            )}
          </div>
        </nav>
      </div>
      <MobileNav closeModal={() => setShowNav(false)} isOpen={showNav} />
    </header>
  );
};

export default NavBar;
