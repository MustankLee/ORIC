import React from "react";
import "./navbar.css";
import { NavData } from "./NavData.js";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {

  const [display, setDisplay] = useState(false);

  function show() {
    setDisplay(!display);
  }

  return (
    <>
      <div className="hidden px-6 py-4 drop-shadow-md bg-blue-200 max-md:flex max-md:items-center max-md:justify-between">
        <div className=" text-black">
          <h2 className="bg-blue-500 p-1 rounded-md text-white" onClick={show}><HiOutlineMenuAlt2 /></h2>
        </div>
        <h2 className="text-center font-black text-blue-500">ORIC</h2>
      </div>
      <nav className={display ?  "bg-white h-screen drop-shadow-2xl w-1/6 p-4 max-md:absolute max-md:z-50 max-md:w-full max-md:left-0 tr" : "bg-white h-screen drop-shadow-2xl w-1/6 p-4 max-md:w-full max-md:z-50 max-md:-left-full max-md:absolute tr" }>
        <h2 className="text-center font-black text-blue-500 max-md:hidden">RICO</h2>
        <div className="mt-2 p-3">
          {NavData.map((item, index) => {
            return (
              <div className="mb-4">
                <div
                  key={index}
                  className="text-blue-500 font-bold border border-t-0 border-l-0 border-r-0 border-b-blue-500 border-b-2"
                >
                  {item.category}
                </div>
                <div className="mt-2">
                  {item.data.map((detail, index) => {
                    return (
                      <NavLink
                        to={detail.to}
                        key={index}
                        onClick = {show}
                        className="my-2 rounded-md flex items-center p-2 text-stone-600 font-bold  duration-700 hover:duration-700 hover:bg-blue-200"
                      >
                        <p>{detail.icon}</p>
                        <p className="ml-4">{detail.name}</p>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}
