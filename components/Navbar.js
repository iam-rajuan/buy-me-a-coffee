import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-900 text-white items-center px-4 h-16">
      <div className="font-bold flex items-center justify-center">
        <span>Buy Me a Coffee</span>
        <img width={44} src="/tea.gif" alt="" />
      </div>

      {/* <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>SignOut</li>
            <li>Login</li>
        </ul> */}
      <div> 
        <Link href={"/login"}>
          <button
            type="button"
            className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
