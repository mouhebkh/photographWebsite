"use client";
import React, { useState } from "react";
import { ContactContext } from "./contactContext";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const ContactProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (!formData.name || !formData.email || !formData.message) {
      console.error("Please fill out all fields");
      toast.error("Please fill out all fields");
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("Email Successfully Sent", result.text);
          // Optionally, reset the form after successful submission
          // dispatch(resetFormData());
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          toast.success("Message Sent Successfully");
        },
        (error) => {
          console.error("Error in sending email", error);
        }
      );
  };

  return (
    <ContactContext.Provider value={{ formData, handleChange, handleSubmit }}>
      {children}
    </ContactContext.Provider>
  );
};
