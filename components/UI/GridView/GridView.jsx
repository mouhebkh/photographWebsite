"use client";
import React, { useContext } from "react";
import Image from "next/image";
import LoadingSpinner from "../LoadingUI/LoadingSpinner";
import NoDataFound from "../LoadingUI/NoDataFound";
import { GalleryContext } from "@/contexts/gridContext/galleryContext";

const Gallery = () => {
  const {
    cloudinaryData,
    onImageLoad,
    loading,
    calculateDimensions,
    imageData,
  } = useContext(GalleryContext);

  return (
    <>
      <div className="pt-32 w-[100%] mx-auto sm:px-5 px-2 sm:pb-32">
        <h1 className="lg:text-6xl sm:text-4xl text-2xl text-center font-bold mb-4 lg:pb-12 text-white">
          GALLERY
        </h1>
        <div className="grid grid-cols-12 gap-4 sm:mt-10 mt-5">
          {/* Render images or loading spinner */}
          {loading ? ( // If loading, display loading spinner
            <div className="col-span-12 flex items-center justify-center h-[50vh]">
              <LoadingSpinner />
            </div>
          ) : cloudinaryData.length === 0 ? ( // If no data available, display message and image
            <div className="col-span-12 sm:px-12 text-center text-pink-800">
              <NoDataFound />
            </div>
          ) : (
            // If data available, render images
            cloudinaryData.map((image, index) => {
              const { colSpan, rowSpan } = imageData[index % imageData.length];
              const { gridColumn, gridRow } = calculateDimensions(
                colSpan,
                rowSpan
              );
              return (
                <div
                  key={index}
                  className={`col-span-${colSpan} row-span-${rowSpan}`}
                  style={{ gridColumn, gridRow }}
                >
                  <div className="h-full">
                    <Image
                      src={image.image}
                      alt={image.title}
                      className={`w-full h-full object-cover hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer ${
                        rowSpan === "2" ? "h-full" : "h-full max-h-[70vh]"
                      }`}
                      width={3000}
                      height={3000}
                      onLoad={onImageLoad}
                      priority
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
