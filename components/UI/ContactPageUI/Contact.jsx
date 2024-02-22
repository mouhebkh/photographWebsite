"use client";
import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import { ContactProvider } from "@/contexts/contactContextApi/ContactProvider";

export default function Contact() {
  return (
    <>
      <div className="sm:pt-32 pt-28 ">
        <h1 className=" md:text-6xl sm:text-3xl 2xl:text-6xl text-4xl text-center font-bold mb-4 text-white ">
          GET IN TOUCH
        </h1>
      </div>

      {/* contact details */}
      <div className="w-[100%] lg:px-4 flex justify-center items-center  max-lg:flex-col  max-sm:w-[100%]  2xl:mb-24 xl:pb-5">
        {/* call the contact details component */}
        <div className=" max-lg:w-[100%] 2xl:w-[70%] flex justify-center items-center mx-auto xl:pb-14">
        <ContactDetails />
        </div>

        {/*call the contact form component*/}
        <div className="2xl:w-[50%] xl:w-[40%] lg:w-[40%] md:w-[50%] w-[80%]  max-lg:mt-10 xl:pb-12">
          <ContactProvider>
            <ContactForm />
          </ContactProvider>
        </div>
      </div>
    </>
  );
}
