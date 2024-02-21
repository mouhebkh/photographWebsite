'use client'
import React, { useContext } from 'react';
import { CarouselContext } from '@/contexts/carouselContext/carouselContext';
import Image from "next/image";
import LoadingSpinner from "../LoadingUI/LoadingSpinner";
import NoDataFound from "../LoadingUI/NoDataFound";

const Carousel = () => {
  const { imageData, currentSlide, nextSlide, prevSlide, onImageLoad, loading, setCurrentSlide } = useContext(
    CarouselContext
  );

  return (
    <div id="default-carousel" className="relative sm:w-[90%] w-[98%] mx-auto sm:mt-24 mt-12" data-carousel="slide">
      <div className={`relative sm:h-[80vh] h-[60vh] overflow-hidden`}>
        {loading ? (
          <div className="col-span-12 flex items-center justify-center h-[60vh]">
            <LoadingSpinner />
          </div>
        ) : imageData.length === 0 ? (
          <div className="col-span-12 sm:px-12 pt-8 text-center text-pink-800">
            <NoDataFound />
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
          imageData.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              data-carousel-item
            >
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[80vh] object-cover object-center"
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
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {imageData.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`sm:w-3 w-1 h-1 sm:h-3 rounded-full ${
              index === currentSlide ? "bg-black" : "bg-gray-300"
            }`}
            aria-current={index === currentSlide ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
      </button>
    </div>
  );
};

export default Carousel;

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import LoadingSpinner from "../LoadingUI/LoadingSpinner";
// import NoDataFound from "../LoadingUI/NoDataFound";
// import { getRequest } from "@/public/Utills/allRequests";
// import { CarouselProvider } from "@/contexts/carouselContext/CarouselProvider";

// export default function Carousel() {
//   const [imageData, setImageData] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [loading, setLoading] = useState(true); // Add loading state
//   const [intervalId, setIntervalId] = useState(null); // State variable for intervalId

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getRequest("/api/carousel");
//         setImageData(response.data);
//       } catch (error) {
//         console.error("Error fetching data from API:", error);
//       } finally {
//         setLoading(false); // Set loading to false when data fetching is done
//       }
//     };

//     fetchData();

//     // Clear interval when component unmounts
//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     // Set up interval when component mounts
//     const id = setInterval(nextSlide, 4000);
//     setIntervalId(id);

//     // Clear interval when component unmounts
//     return () => clearInterval(id);
//   }, []);

//   useEffect(() => {
//     // Reset interval when current slide reaches the last one
//     if (currentSlide === imageData.length - 1) {
//       clearInterval(intervalId); // Clear the current interval
//       const id = setInterval(nextSlide, 4000); // Start a new interval
//       setIntervalId(id);
//     }
//   }, [currentSlide, imageData]);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === imageData.length - 1 ? 0 : prevSlide + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? imageData.length - 1 : prevSlide - 1
//     );
//   };

//   const onImageLoad = () => {
//     setLoading(false); // Set loading state to false when image is loaded
//   };

//   return (
//     <div
//       id="default-carousel"
//       className="relative sm:w-[90%] w-[98%] mx-auto sm:mt-24 mt-12"
//       data-carousel="slide"
//     >
//       {/* Carousel wrapper */}
//       <div className={`relative sm:h-[80vh] h-[60vh] overflow-hidden`}>
//         {/* Show spinner if loading */}
//         {loading ? ( // If loading, display loading spinner
//           <div className="col-span-12 flex items-center justify-center h-[50vh]">
//             <LoadingSpinner />
//           </div>
//         ) : imageData.length === 0 ? ( // If no data available, display message and image
//           <div className="col-span-12 sm:px-12 pt-8 text-center text-pink-800">
//             {/* <GridView/> */}
//             <NoDataFound />
//             <div>
//               <Image
//                 src={"/assets/Images/NoDataFound/img4.jpg"}
//                 alt="404 Error"
//                 className="object-cover w-full  h-[80vh]"
//                 width={1000}
//                 height={1000}
//               />
//             </div>
//           </div>
//         ) : (
//           imageData.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 duration-700 ease-in-out ${
//                 index === currentSlide
//                   ? "opacity-100"
//                   : "opacity-0 pointer-events-none"
//               }`}
//               data-carousel-item
//             >
//               <div className="absolute inset-0">
//                 <Image
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full h-[80vh] object-cover object-center"
//                   width={3000}
//                   height={3000}
//                   onLoad={onImageLoad}
//                   priority
//                 />
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       {/* Slider controls */}
//       <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         {imageData.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             className={`sm:w-3 w-1 h-1 sm:h-3 rounded-full ${
//               index === currentSlide ? "bg-black" : "bg-gray-300"
//             }`}
//             aria-current={index === currentSlide ? "true" : "false"}
//             aria-label={`Slide ${index + 1}`}
//             onClick={() => setCurrentSlide(index)}
//           ></button>
//         ))}
//       </div>
//       {/* Slider controls */}
//       <button
//         type="button"
//         className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//         onClick={prevSlide}
//       >
//         {/* Previous button icon */}
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//         onClick={nextSlide}
//       >
//         {/* Next button icon */}
//       </button>
//     </div>
//   );
// }
