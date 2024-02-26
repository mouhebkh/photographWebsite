import React from "react";
import Image from "next/image";
import Button from "../ButtonsUI/Button";

export default function HomeContent() {
  return (
    <div className="w-[100%] sm:h-[80vh] 2xl:flex 2xl:justify-center 2xl:items-center bg-black">
      <div className="max-sm:pt-20">
        <Image
          src="/assets/Images/layout-img/homeNewImage.jpeg"
          alt="Home Image"
          className="sm:h-[80vh] xl:w-[30vw] lg:w-[30vw] md:w-[40vw] w-[60vw] object-contain  h-[65vh] mx-auto  object-cover "
          width={1000}
          height={400}
        />
      </div>
      <div className="2xl:fixed 2xl:bottom-0 2xl:left-0 2xl:right-0 ">
        <Button />
      </div>
    </div>
  );
}
