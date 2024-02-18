"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <div className="sm:pt-44 pt-28 2xl:pt-64 ">
        <h1 className=" md:text-6xl sm:text-3xl 2xl:text-7xl text-xl text-center font-bold mb-4 text-white ">
          GET IN TOUCH
        </h1>
      </div>

      {/* contact details */}
      <div className="flex max-md:flex-col sm:px-5 max-sm:w-[100%] xl:py-12 2xl:mb-24 ">
        {/* call the contact details component */}
        <ContactDetails />

        {/*call the contact form component*/}
        <div className="2xl:w-[35%] xl:w-[30%] lg:w-[40%] md:w-[50%] w-[80%] mx-auto mt-12">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
