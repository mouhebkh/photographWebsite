"use client";
import React, { useEffect, useState } from "react";
import { VideosContext } from "./videosContext";
import { fetchVideosData } from "./fetchVideo";

export const VideosProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cloudinaryData, setCloudinaryData] = useState([]);

  // use useEffect to fetch the data
  useEffect(() => {
    fetchVideosData(setCloudinaryData, setLoading);
  }, []);

  // Set loader on page load
  const handleVideoLoad = () => {
    setLoading(false); // Set loading state to false when video is loaded
  };

  return (
    <VideosContext.Provider
      value={{
        cloudinaryData,
        loading,
        handleVideoLoad,
        setLoading,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
