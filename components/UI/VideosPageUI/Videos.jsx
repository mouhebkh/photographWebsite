"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { getRequest } from "@/public/Utills/allRequests";

export default function Videos() {
  const [loading, setLoading] = useState(false);
  const [cloudinaryData, setCloudinaryData] = useState([]);

  // Set loader on page load
  const handleVideoLoad = () => {
    setLoading(false); // Set loading state to false when video is loaded
  };

  // use useEffect to fetch the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("/api/videos"); // Call the API route created in the server-side code
        setCloudinaryData(response.data); // Set fetched images to state
        setLoading(false); // Turn off loading state
        console.log("Fetched videos:", response.data);
      } catch (error) {
        console.error("Error fetching data from Cloudinary:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto sm:px-5 px-2  sm:py-32 max-sm:pt-10 sm:mt-16">
      {/* title */}
      <h1 className="sm:text-6xl text-2xl text-center font-bold mb-4 text-white">
        VIDEOS
      </h1>

      {/* grid layout*/}
      <div className="grid sm:grid-cols-12 grid-cols-1  gap-7 sm:mt-10 mt-5">
        {loading ? ( // If loading, display loading spinner
          <div className="col-span-12 flex items-center justify-center h-[50vh]">
            <i className=" fa-solid fa-circle-notch lg:text-6xl text-4xl text-center text-pink-800 animate-spin"></i>
          </div>
        ) : cloudinaryData.length === 0 ? (
          <div className="col-span-12 text-center text-pink-800 ">
            <p className="text-center sm:text-5xl my-4 font-bold">
              No Data Available
            </p>
            <div>
              <Image
                src={"/assets/Images/NoDataFound/img4.jpg"}
                alt="404 Error"
                className="object-cover w-full h-[80vh]"
                width={1000}
                height={1000}
              />
            </div>
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
                onLoad={() => handleVideoLoad()}
                onLoadStart={() => setLoading(true)} // Set loading state to true when video starts loading
              ></iframe>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
