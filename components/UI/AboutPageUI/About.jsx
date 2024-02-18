import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="sm:pt-28 pt-16">
        <h1 className=" sm:text-6xl  text-2xl text-center font-bold mb-4 text-white ">
          ABOUT US
        </h1>
      </div>
      <div className="flex lg:px-20 px-12">
        <div className="mt-10 xl:mt-16  text-white tracking-wide">
          <div className="max-md:flex  lg:w-[70%] lg:text-2xl 2xl:text-3xl font-inter ">
            <p className=" "></p>
            <p className=" ">
              {" "}
              Welcome to our company's About Us page. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.{" "}
            </p>
          </div>
        </div>

        <div className="lg:mt-10 max-md:hidden ">
          <Image
            src="/assets/Images/about-me.svg"
            alt="logo"
            className="w-full sm:w-[150rem]"
            width={1000} // Set a fixed width for the image (optional)
            height={1000} // Set a fixed height for the image (optional)
          />
        </div>
      </div>
    </>
  );
}
