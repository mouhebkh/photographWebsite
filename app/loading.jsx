import React from "react";

export default function Loading() {
  return (
    <div className="w-full  px-[50%] pt-32 bg-[#051e2e] h-[100vh]">
      <i className="fa-solid fa-circle-notch text-5xl text-pink-800 animate-spin"></i>
      <div className="h-7 w-7 text-5xl animate-spin mx-auto"></div>
    </div>
  );
}
