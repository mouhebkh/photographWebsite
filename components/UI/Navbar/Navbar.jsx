"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#051e2e] w-full sm:h-28 h-14 sm:p-8 p-2 flex justify-between">
      {/* Left side */}
      <div className="flex w-2/3 max-lg:flex-col">
        <div className="mt-3">
          <Image
            src="/assets/Images/logo.png"
            alt="logo"
            className="max-sm:w-[50%]"
            width={180}
            height={180}
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex mt-3">
        <div className="">
          <ul className="flex text-white sm:text-xl text-xs font-semibold ">
            <li className="sm:px-6 px-2 hover:text-pink-900  hover:underline transform transition duration-500 ease-in-out cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="sm:px-6 px-2 hover:text-pink-900  hover:underline transform transition duration-500 ease-in-out cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="sm:px-6 px-2 hover:text-pink-900  hover:underline transform transition duration-500 ease-in-out cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="sm:px-6 px-2 hover:text-pink-900  hover:underline transform transition duration-500 ease-in-out cursor-pointer">
              Gallery
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
