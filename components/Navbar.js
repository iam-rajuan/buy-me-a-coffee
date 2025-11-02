"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const MenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center font-bold text-lg hover:opacity-80 transition"
        >
          <span>Buy Me Link Coffee</span>
          <Image
            src="/tea.gif"
            alt="logo"
            width={40}
            height={40}
            className="ml-2"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-4">
          {session ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center gap-2"
              >
                Welcome,&nbsp;
                {session?.user?.email?.split("@")[0] || "User"}
                <svg
                  className={`w-3 h-3 transform transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white text-gray-700 rounded-lg shadow-lg overflow-hidden z-50">
                  <ul className="text-sm">
                    <li>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${session?.user?.name || "profile"}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <button className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 transition">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 animate-[slideDown_0.3s_ease-out]">
          <div className="px-4 py-3 space-y-2 flex flex-col">
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:bg-slate-700 px-3 py-2 rounded-md"
                >
                  Dashboard
                </Link>
                <Link
                  href={`/${session?.user?.name || "profile"}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:bg-slate-700 px-3 py-2 rounded-md"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    signOut({ callbackUrl: "/login" });
                    setMobileMenuOpen(false);
                  }}
                  className="hover:bg-slate-700 px-3 py-2 rounded-md text-left"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-center rounded-md px-3 py-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;







































// "use client";
// import React from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
// import Link from "next/link";
// import { useState } from "react";

// const Navbar = () => {
//   const [showDropdown, setshowDropdown] = useState(false)
//   const { data: session } = useSession();
//   // if (session) {
//   //   return (
//   //     <>
//   //       Signed in as {session.user.email} <br />
//   //       <button onClick={() => signOut()}>Sign out</button>
//   //     </>
//   //   );
//   // }

//   return (
//     <nav className="flex justify-between bg-slate-900 text-white items-center px-4 h-16">
//       <div >
//       <Link href={"/"} className="font-bold flex items-center justify-center">
//         <span>Buy Me Link Coffee</span>
//         <img width={44} src="/tea.gif" alt="" />
//       </Link>
//       </div>

//       {/* <ul className='flex gap-4'>
//             <li>Home</li>
//             <li>About</li>
//             <li>Projects</li>
//             <li>SignOut</li>
//             <li>Login</li>
//         </ul> */}
//       <div>
//         {session && <><button id="dropdownDefaultButton" onClick={()=>setshowDropdown(!showDropdown)} onBlur={()=>{setTimeout(() => {
//           setshowDropdown(false)
//         }, 200);}} data-dropdown-toggle="dropdown" className="relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-2 px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome, {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//         </svg>
//         </button>

//           <div id="dropdown" className={`absolute my-2 right-[25px] z-10 ${showDropdown?"":"hidden"}  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
//             <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
//               <li>
//                 <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
//               </li>
//               <li>
//                 <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
//               </li>
//               <li>
//                 <Link href={"#"} onClick={()=>signOut({callbackUrl: "/login"})} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
//               </li>
//             </ul>
//           </div></>
//         }
//         {/* {session && <Link href={"/dashboard"}>
//           <button
//             type="button"
//             className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//           >
//             Dashboard
//           </button>

//         </Link>}
//         {session && <button onClick={() => signOut()}
//           type="button"
//           className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//         >
//           Logout
//         </button>} */}
//         {!session && <Link href={"/login"}>
//           <button
//             type="button"
//             className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//           >
//             Login
//           </button>

//         </Link>}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
