"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [showDropdown, setshowDropdown] = useState(false)
  const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }

  return (
    <nav className="flex justify-between bg-slate-900 text-white items-center px-4 h-16">
      <div >
      <Link href={"/"} className="font-bold flex items-center justify-center">
        <span>Buy Me Link Coffee</span>
        <img width={44} src="/tea.gif" alt="" />
      </Link>
      </div>

      {/* <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>SignOut</li>
            <li>Login</li>
        </ul> */}
      <div>
        {session && <><button id="dropdownDefaultButton" onClick={()=>setshowDropdown(!showDropdown)} onBlur={()=>{setTimeout(() => {
          setshowDropdown(false)
        }, 200);}} data-dropdown-toggle="dropdown" className="relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-2 px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome, {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>

          <div id="dropdown" className={`absolute my-2 right-[25px] z-10 ${showDropdown?"":"hidden"}  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
              </li>
              <li>
                <Link href={"#"} onClick={()=>signOut({callbackUrl: "/login"})} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div></>
        }
        {/* {session && <Link href={"/dashboard"}>
          <button
            type="button"
            className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Dashboard
          </button>

        </Link>}
        {session && <button onClick={() => signOut()}
          type="button"
          className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Logout
        </button>} */}
        {!session && <Link href={"/login"}>
          <button
            type="button"
            className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </button>

        </Link>}
      </div>
    </nav>
  );
};

export default Navbar;
