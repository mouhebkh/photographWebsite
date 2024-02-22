import React from "react";
import Image from "next/image";
import Button from "../ButtonsUI/Button";

export default function HomeContent() {
  return (
    <div className="w-[100%] h-full   ">
      <div className="max-sm:pt-20">
        <Image
          src="/assets/Images/layout-img/home1.png"
          alt="Home Image"
          className="w-full md:h-[74vh] xl:h-[78vh] h-[60vh]"
          width={1000}
          height={1000}
        />
      </div>
      <div className="2xl:fixed 2xl:bottom-0 2xl:left-0 2xl:right-0 ">
        <Button />
      </div>
    </div>
  );
}
