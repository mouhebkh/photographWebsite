import React from "react";

export default function ContactDetails() {
  return (
    <div className="flex flex-col mx-auto 2xl:text-3xl xl:text-base max-sm:px-12 text-white lg:text-2xl sm:text-base text-xs justify-center items-center max-sm:mt-6 max-md:mt-5">
      <p className="pb-3">
        <i className="fa-solid fa-phone"></i> Phone: +92-0000000
      </p>
      <p className="py-3">
        <i className="fa-solid fa-envelope  "></i> Email: dummy@gmail.com
      </p>
      <p className="py-3">
        <i className="fa-solid fa-location-dot  "></i> Address: 2557 Olaf Spurs
        Apt. 686
      </p>
    </div>
  );
}
