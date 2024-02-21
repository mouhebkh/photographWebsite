"use client";
import React, { useEffect, useContext, useState } from "react";
import LoadingSpinner from "../LoadingUI/LoadingSpinner";
import NoDataFound from "../LoadingUI/NoDataFound";
import { getRequest } from "@/public/Utills/allRequests";
import { VideosContext } from "@/contexts/videosContext/videosContext";

const Videos = () => {
  const { cloudinaryData, loading, handleVideoLoad, setLoading } =
    useContext(VideosContext);

  return (
    <div className="w-full mx-auto sm:px-5 px-2  sm:py-32 max-sm:pt-10 sm:mt-16">
      {/* title */}
      <h1 className="sm:text-6xl text-2xl text-center font-bold mb-4 text-white">
        VIDEOS
      </h1>

      {/* grid layout*/}
      <div className="grid sm:grid-cols-12 grid-cols-1  gap-7 sm:mt-10 mt-5">
        {loading ? ( // If loading, display loading spinner
          <div className="col-span-12 flex items-center justify-center h-[50vh] 2xl:h-[60vh]">
            <LoadingSpinner />
          </div>
        ) : // If data is not available
        cloudinaryData.length === 0 ? (
          <div className="col-span-12 text-center text-pink-800 ">
            <NoDataFound />
          </div>
        ) : (
          cloudinaryData.map((video, index) => (
            <div key={index} className="w-full sm:col-span-4">
              {/* use iframe to display videos */}
              <iframe
                src={video.video}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full sm:h-[20rem] hover:scale-105 transform transition duration-500 ease-in-out cursor-pointer"
                onLoad={handleVideoLoad}
                onLoadStart={() => setLoading(true)} // Set loading state to true when video starts loading
              ></iframe>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Videos;
