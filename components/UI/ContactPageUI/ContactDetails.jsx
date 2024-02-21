import React from "react";
import Image from "next/image";

export default function ContactDetails() {
  return (
    <>
      <div className="grid grid-cols-12 gap-3 ">
        <div className="sm:col-span-6 col-span-12 ">
          <div className="mx-auto max-sm:px-4 mt-10">
            <Image
              src="/assets/Images/contact_image.jpg"
              alt="Contact Image"
              className=""
              width={300}
              height={200}
              priority
            />
          </div>
        </div>
        <div className="sm:col-span-6 col-span-12  flex max-lg:justify-center items-center ">
          <div className=" 2xl:text-2xl text-white lg:text-base sm:text-xl text-base max-sm:mt-6 max-md:mt-5">
            <h1 className="sm:py-6 py-4 sm:text-5xl lg:text-4xl text-4xl font-bold text-pink-800">Contact Details</h1>
            <p className="pb-3">
              <i className="fa-solid fa-phone"></i> Phone: +4915145077259
            </p>
            <p className="sm:py-3 py-1">
              <i className="fa-solid fa-envelope"></i> Email: dummy@gmail.com
            </p>
            <div className="sm:py-3 py-2">
              <i className="fa-solid fa-location-dot"></i> Address: Firas Isaac
              <div className="">
                
                <p>Emil Figge Straße 39</p>
                <p>44227 Dortmund</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
