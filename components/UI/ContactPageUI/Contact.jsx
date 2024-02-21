"use client";
import React, { useState } from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import { ContactProvider } from "@/contexts/contactContextApi/ContactProvider";

export default function Contact() {
  return (
    <>
      <div className="sm:pt-44 pt-28 2xl:pt-64 ">
        <h1 className=" md:text-6xl sm:text-3xl 2xl:text-7xl text-4xl text-center font-bold mb-4 text-white ">
          GET IN TOUCH
        </h1>
      </div>

      {/* contact details */}
      <div className="w-[100%] flex justify-center items-center mx-auto max-lg:flex-col  max-sm:w-[100%] xl:py-12 2xl:mb-24">
        {/* call the contact details component */}
        <div className="w-[60%] max-lg:w-[100%] flex justify-center items-center mx-auto">
        <ContactDetails />
        </div>

        {/*call the contact form component*/}
        <div className="2xl:w-[50%] xl:w-[30%] lg:w-[40%] md:w-[50%] w-[80%] mx-auto mt-12">
          <ContactProvider>
            <ContactForm />
          </ContactProvider>
        </div>
      </div>
    </>
  );
}
