"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { getRequest } from "@/public/Utills/allRequests";

export default function Carousel() {
  const [imageData, setImageData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state
  const totalSlides = imageData.length; // Total number of slides

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("/api/carousel");
        setImageData(response.data);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      } finally {
        setLoading(false); // Set loading to false when data fetching is done
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 4000); // Change slide every 4 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  return (
    <div
      id="default-carousel"
      className="relative sm:w-[90%] w-[98%] mx-auto sm:mt-24 mt-12"
      data-carousel="slide"
    >
      {/* Show spinner if loading */}
      {loading && (
        <div className="pt-24 2xl:pt-48 flex items-center justify-center">
          <i className="fa-solid fa-circle-notch lg:text-6xl text-4xl text-center text-pink-800 animate-spin"></i>
        </div>
      )}

      {/* Carousel wrapper */}
      <div
        className={`relative sm:h-[80vh] h-[60vh] overflow-hidden ${
          loading ? "hidden" : "block"
        }`}
      >
        {/* Display only the current slide */}
        {imageData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            data-carousel-item
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                className="w-full h-[80vh] object-cover object-center"
                width={3000}
                height={3000}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {imageData.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`sm:w-3 w-1 h-1 sm:h-3 rounded-full ${
              index === currentSlide ? "bg-black" : "bg-gray-300"
            }`}
            aria-current={index === currentSlide ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        {/* Previous button icon */}
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        {/* Next button icon */}
      </button>
    </div>
  );
}
