// photosContext.js
"use client";
import React, { useState, useEffect } from "react";
import { fetchPhotosData } from "./fetchPhotosData";
import { PhotosContext } from "./photosContext";

export const PhotosProvider = ({ children }) => {
  const [cloudinaryData, setCloudinaryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const onImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    fetchPhotosData(setCloudinaryData, setLoading);
  }, []);

  return (
    <PhotosContext.Provider
      value={{
        cloudinaryData,
        loading,
        onImageLoad,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
};
