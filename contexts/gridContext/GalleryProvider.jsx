// photosContext.js
"use client";
import React, { useState, useEffect } from "react";
import { fetchGalleryImage } from "./fetchGalleryData";
import { GalleryContext } from "./galleryContext";

export const GalleryProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cloudinaryData, setCloudinaryData] = useState([]);

  const imageData = [
    { colSpan: "12", rowSpan: "1" },
    { colSpan: "6", rowSpan: "1" },
    { colSpan: "6", rowSpan: "1" },
    { colSpan: "9", rowSpan: "1" },
    { colSpan: "3", rowSpan: "2" },
    { colSpan: "5", rowSpan: "1" },
    { colSpan: "4", rowSpan: "1" },
    { colSpan: "6", rowSpan: "1" },
    { colSpan: "6", rowSpan: "1" },
  ];

  useEffect(() => {
    fetchGalleryImage(setCloudinaryData, setLoading);
  }, []);

  const calculateDimensions = (colSpan, rowSpan) => {
    const gridColumn = `span ${colSpan}`;
    const gridRow = `span ${rowSpan}`;
    return { gridColumn, gridRow };
  };

  const onImageLoad = () => {
    setLoading(false); // Set loading state to false when image is loaded
  };

  return (
    <GalleryContext.Provider
      value={{
        cloudinaryData,
        loading,
        onImageLoad,
        calculateDimensions,
        imageData,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
