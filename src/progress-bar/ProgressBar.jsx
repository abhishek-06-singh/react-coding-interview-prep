import React, { useEffect, useState } from "react";

const ProgressBar = ({ value }) => {
  return (
    <>
      <div className="w-1/2 h-8 bg-white bg-opacity-5 rounded-full justify-center flex items-center border-2 border-amber-600 bg-clip-padding backdrop-filter backdrop-blur-md border-opacity-10 shadow-sm overflow-hidden relative">
        <span className="absolute inset-0 flex items-center justify-center text-gray-200 font-bold z-50">
          {value.toFixed()}%
        </span>
        <div
          className="bg-lime-600 h-full absolute left-0 top-0 z-40 animate-pulse"
          style={{ width: `${value}%`, transition: "width 0.3s ease-in-out" }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
