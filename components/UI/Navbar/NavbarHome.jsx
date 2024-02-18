import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar2() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black w-full sm:h-32 h-20 sm:p-10 p-4 flex  items-center">
      <ul className="flex justify-between items-center w-[100%] mx-auto sm:px-4 text-center">
        <li>
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/Images/layout-img/logo.png"
              alt="logo"
              className="max-sm:w-[30%]"
              width={100}
              height={100}
            />
          </Link>
        </li>

        {/* Title */}
        <li className="md:text-5xl sm:text-4xl text-base text-white italic font-bold max-sm:-ml-20 ">
          <span className="text-pink-800 md:text-6xl sm:text-5xl">M</span>y{" "}
          <span className="text-pink-800 md:text-6xl sm:text-5xl">C</span>
          reations
        </li>

        {/* Contact link */}
        <li className="lg:text-2xl sm:text-xl text-xs text-white font-semibold cursor-pointer hover:text-pink-900  hover:underline transform transition duration-500 ease-in-out ">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
