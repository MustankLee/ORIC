import React from "react";

export default function () {
  return (
    <div className="flex p-2 items-center bg-white drop-shadow-xl h-40 rounded-md">
      <div className="text-center w-1/2 border border-t-0 border-l-0 border-b-0 h-5/6 flex flex-col justify-center border-blue-500 border-r-4 max-md:w-full max-md:border-none">
        <p className="font-semibold"> © 2023 Rico Susanto | ORIC</p>
        <p className=""> Don't hesitate to contact me if you have any questions</p>
      </div>
      <h2 className="text-center w-1/2 font-black text-blue-500 max-md:hidden">ORIC</h2>
    </div>
  );
}
