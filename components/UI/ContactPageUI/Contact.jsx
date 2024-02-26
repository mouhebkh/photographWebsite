"use client";
import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import { ContactProvider } from "@/contexts/contactContextApi/ContactProvider";

export default function Contact() {
  return (
    <>
    <div className="w-[100%] bg-black overflow-hidden">
      <div className="sm:pt-32 pt-28 ">
        <h1 className=" md:text-6xl sm:text-3xl 2xl:text-6xl text-4xl text-center font-bold mb-4 text-white ">
          GET IN TOUCH
        </h1>
      </div>

      {/* contact details */}
      <div className="w-[100%] bg-black lg:px-4 flex justify-center items-center  max-lg:flex-col   2xl:mb-24 xl:pb-5">
        {/* call the contact details component */}
        <div className="max-lg:w-[70%] max-sm:w-[100%] flex justify-center items-center mx-auto xl:pb-14">
        <ContactDetails />
        </div>

        {/*call the contact form component*/}
        <div className="xl:w-[40%] lg:w-[50%] md:w-[75%] w-[100%]  max-lg:mt-10">
          <ContactProvider>
            <ContactForm />
          </ContactProvider>
        </div>
      </div>

      </div>
    </>
  );
}
