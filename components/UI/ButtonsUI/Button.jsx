import React from "react";
import Link from "next/link";

export default function Button() {
  // footer buttons
  const buttons = [
    { text: "Photos", link: "/photos" },
    { text: "Books", link: "/books" },
    { text: "Videos", link: "/videos" },
    { text: "Tatos", link: "/" },
    { text: "Deco", link: "/" },
    { text: "Logos", link: "/" },
    { text: "DIY", link: "/" },
    { text: "Gallery", link: "/gallery" },
  ];

  return (
    <div className="">
      <div className=" sm:w-[70%] w-[100%]   mx-auto py-10 flex justify-between items-center text-white xl:text-2xl sm:text-base text-[8px] font-semibold">
        {buttons.map((button, index) => (
          <Link key={index} href={button.link}>
            <button className=" sm:py-2 py-1 sm:rounded-lg rounded-sm sm:px-3 px-1 hover:bg-pink-900 hover:scale-110 transform transition duration-500 ease-in-out cursor-pointer">
              {button.text}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
