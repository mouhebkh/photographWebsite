"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import LoadingSpinner from "../LoadingUI/LoadingSpinner";
import NoDataFound from "../LoadingUI/NoDataFound";
import { PhotosContext } from "@/contexts/photosContext/photosContext";

const Gallery = () => {
  const { cloudinaryData, onImageLoad, loading } = useContext(PhotosContext);

  return (
    <div className="pt-32 sm:pt-52 w-[100%] mx-auto sm:px-5 px-2 sm:pb-32">
      {/* title */}
      <h1 className="sm:text-6xl text-2xl text-center font-bold mb-4 text-white">
        PHOTOS
      </h1>

      {/* grid layout*/}
      <div className="grid grid-row-3 sm:gap-4 gap-2 sm:mt-16 mt-10">
        <div className="grid grid-cols-12 sm:gap-4 gap-2 sm:mt-10 mt-5">
          {/* Show loading spinner when image is loading */}
          {loading ? (
            <div className="col-span-12 flex items-center justify-center h-[50vh]  2xl:h-[60vh]">
              <LoadingSpinner />
            </div>
          ) : // When no data found
          cloudinaryData.length === 0 ? (
            <div className="col-span-12 text-center text-pink-800 ">
              <NoDataFound />
            </div>
          ) : (
            // When data found, render images
            cloudinaryData.map((image, index) => (
              <div key={index} className={`col-span-4`}>
                <div className="h-full">
                  <Image
                    src={image.image}
                    alt={image.title}
                    className={`w-full h-full object-cover hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer`}
                    width={3000}
                    height={3000}
                    onLoad={onImageLoad}
                    priority
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
