"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { getRequest } from "@/public/Utills/allRequests";

export default function Gallery() {
  const [loading, setLoading] = useState(true); // Initialize loading state as true
  const [cloudinaryData, setCloudinaryData] = useState([]);

  // Function to handle image load
  const onImageLoad = () => {
    setLoading(false); // Set loading state to false when image is loaded
  };

  // use useEffect to fetch the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("/api/photos"); // Call the API route created in the server-side code
        setCloudinaryData(response.data); // Set fetched images to state
        console.log("Fetched images:", response.data);
      } catch (error) {
        console.error("Error fetching data from Cloudinary:", error);
      } finally {
        setLoading(false); // Turn off loading state regardless of success or error
      }
    };

    fetchData();
  }, []);

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
}
