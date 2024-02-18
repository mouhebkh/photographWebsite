"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { getRequest } from "@/public/Utills/allRequests";

export default function Gallery() {
  const [loading, setLoading] = useState(false);
  const [cloudinaryData, setCloudinaryData] = useState([]);

  const imageDate = [
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
    const fetchGalleryData = async () => {
      setLoading(true); // Set loading to true when data fetching starts
      try {
        const response = await getRequest("/api/gallery");
        setCloudinaryData(response.data);
      } catch (error) {
        console.error("Error fetching data from Cloudinary:", error);
      } finally {
        setLoading(false); // Set loading to false when data fetching completes (whether successful or not)
      }
    };

    fetchGalleryData();
  }, []);

  const calculateDimensions = (colSpan, rowSpan) => {
    const gridColumn = `span ${colSpan}`;
    const gridRow = `span ${rowSpan}`;
    return { gridColumn, gridRow };
  };

  return (
    <div className="pt-32 w-[100%] mx-auto sm:px-5 px-2 sm:pb-32">
      <h1 className="lg:text-6xl sm:text-4xl text-2xl text-center font-bold mb-4 lg:pb-12 text-white">
        GALLERY
      </h1>
      <div className="grid grid-cols-12 gap-4 sm:mt-10 mt-5">
        {/* Render images or loading spinner */}
        {loading ? ( // If loading, display loading spinner
          <div className="col-span-12 flex items-center justify-center h-[50vh]">
            <i className="fa-solid fa-circle-notch lg:text-6xl text-4xl text-center text-pink-800 animate-spin"></i>
          </div>
        ) : cloudinaryData.length === 0 ? ( // If no data available, display message and image
          <div className="col-span-12 sm:px-12 text-center text-pink-800">
            <p className="text-center sm:text-5xl sm:my-12 my-6 text-2xl font-bold">
              No Data Available
            </p>
            <div>
              <Image
                src={"/assets/Images/NoDataFound/img4.jpg"}
                alt="404 Error"
                className="object-cover w-full  h-[80vh]"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        ) : (
          // If data available, render images
          cloudinaryData.map((image, index) => {
            const { colSpan, rowSpan } = imageDate[index % imageDate.length];
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
                    priority
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
