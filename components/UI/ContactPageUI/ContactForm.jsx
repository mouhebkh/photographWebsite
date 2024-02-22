"use client";
import React, { useContext, useRef } from "react";
import { ToastContainer } from "react-toastify";
import { ContactContext } from "@/contexts/contactContextApi/contactContext";
const ContactForm = () => {
  const { formData, handleChange, handleSubmit, form } = useContext(ContactContext);


  return (
    <div className="flex max-2xl:items-end max-lg:justify-center max-2xl:justify-end 2xl:justify-center lg:pr-14 xl:pr-8 2xl:pr-1">
      <ToastContainer />
      {/* <form ref={form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
      <form
        ref={form}
        className="flex flex-col  space-y-4 sm:text-xl 2xl:text-2xl 2xl:w-[60%] xl:w-[80%] "
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <i className="fa-solid fa-user absolute top-3 left-3 2xl:py-2 text-gray-500"></i>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 w-[100%] rounded-md pl-10 pr-3 py-2 2xl:py-3 focus:border-pink-800"
          />
        </div>
        <div className="relative">
          <i className="fa-regular fa-envelope absolute 2xl:py-2 top-3 left-3 text-gray-500"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 w-[100%] 2xl:py-3 rounded-md pl-10 pr-3 py-2 focus:border-pink-800"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3  w-[100%] py-2 h-32 focus:border-pink-800"
        ></textarea>
        <button
          type="submit"
          className="bg-pink-800 2xl:text-2xl 2xl:py-4 font-semibold text-white px-4 py-2 rounded-md hover:bg-pink-800
                        hover:scale-110 transform transition duration-500 ease-in-out  "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
