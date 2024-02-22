import React from "react";
import Image from "next/image";
import 'aos/dist/aos.css'; 


export default function ContactDetails() {
  return (
    <>
      <div className=" grid grid-cols-12 gap-3">
      <div className="sm:col-span-6 col-span-12" >

          <div className="mx-auto max-sm:px-4 mt-10" data-aos="fade-left" data-aos-duration="1500"
     data-aos-easing="linear" >
            <Image
              src="/assets/Images/contact_image.jpg"
              alt="Contact Image"
              className="rounded-lg"
              width={350}
              height={200}
              priority
            />
          </div>
        </div>
        <div className="sm:col-span-6 col-span-12  flex max-lg:justify-center items-center lg:pl-4 max-sm:pl-1 2xl:pl-10 xl:pl-6">
          <div className=" 2xl:text-2xl  text-white lg:text-base sm:text-xl text-base max-sm:my-6 max-md:mt-5">
            <h1 className="sm:py-6 py-4 sm:text-5xl lg:text-4xl text-4xl font-bold text-pink-800">Contact Details</h1>
            <p className="pb-3">
              <i className="fa-solid fa-phone"></i> Phone: <a href="tel:+4915145077259">+49 1514 5077259</a>
            </p>
            <p className="sm:py-3 py-1">
              <i className="fa-solid fa-envelope"></i> Email: <a href="mailto:ishakfiras4@gmail.com">ishakfiras4@gmail.com</a>
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
