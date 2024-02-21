"use client";
import React, { useState, useEffect } from "react";
import { CarouselContext } from "./carouselContext";
import { fetchCarouselData } from "./fetchCarouselData";

export const CarouselProvider = ({ children }) => {
  const [imageData, setImageData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    // fetch Carousel Data
    fetchCarouselData(setImageData, setLoading);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Set up interval when component mounts
    const id = setInterval(nextSlide, 4000);
    setIntervalId(id);

    // Clear interval when component unmounts
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    // Reset interval when current slide reaches the last one
    if (currentSlide === imageData.length - 1) {
      clearInterval(intervalId); // Clear the current interval
      const id = setInterval(nextSlide, 4000); // Start a new interval
      setIntervalId(id);
    }
  }, [currentSlide, imageData]);

  //   move to next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === imageData.length - 1 ? 0 : prevSlide + 1
    );
  };

  //   move to previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? imageData.length - 1 : prevSlide - 1
    );
  };

  //   image load event
  const onImageLoad = () => {
    setLoading(false); // Set loading state to false when image is loaded
  };

  return (
    <CarouselContext.Provider
      value={{
        fetchCarouselData,
        imageData,
        currentSlide,
        nextSlide,
        prevSlide,
        onImageLoad,
        loading,
        setCurrentSlide,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};
