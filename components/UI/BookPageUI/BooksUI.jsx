"use client";
import React, {useContext} from "react";
import Image from "next/image";
import LoadingSpinner from "../LoadingUI/LoadingSpinner";
import NoDataFound from "../LoadingUI/NoDataFound";
import { ToastContainer } from "react-toastify";
import { BooksContext } from "@/contexts/booksContext/bookContext";

const BooksUI = () => {
  const { books, loading, handleOpenBook, onImageLoad} = useContext(BooksContext);

  return (
    <div className=" w-[100%] mx-auto sm:px-5 px-2 sm:py-32 max-sm:pt-10 sm:mt-16">
      <ToastContainer />
      <h1 className="sm:text-6xl text-2xl text-center font-bold mb-4 text-white">
        BOOKS
      </h1>
      <div className=" grid grid-row-3 sm:gap-4 gap-2">
        <div className="grid grid-cols-12 sm:gap-8  gap-2 sm:mt-10 mt-5">

          {loading ? (
            // If data is loading then show loading spinner
            <div className="col-span-12 flex items-center justify-center h-[50vh]  2xl:h-[60vh]">
              <LoadingSpinner />
            </div>

            // If data is not available
          ) : books.length === 0 ? (

            <div className="col-span-12 text-center text-pink-800 ">
              <NoDataFound/>
            </div>

          ) : (
            // If data available then render Images
            books
              .filter((book) => !book.pdfUrl)
              .map((book, index) => (
                <div
                  key={index}
                  className={`col-span-4 row-span-${book.rowSpan}`}
                >
                  <div className="">
                    {/* Show loading spinner when image is loading */}
                    <Image
                      src={book.titleImageUrl}
                      alt={book.title}
                      className={`sm:w-[70%] sm:max-h-[80vh] sm:h-[60vh] xl:h-[70vh] xl:w-[80%] max-sm:h-[40vh] mx-auto py-5 object-cover hover:scale-105 transform transition duration-500 ease-in-out cursor-pointer`}
                      width={3000}
                      height={3000}
                      onLoad={onImageLoad}
                      priority
                      // style={{ display: loading ? "none" : "block" }}
                    />

                    <div className="sm:w-[80%] max-sm:-mt-2 mx-auto text-white  lg:text-xl sm:text-base text-[8px] text-center py-2 sm:py-4 ">
                      {/* <p className="mb-2">Title: {image.title}</p>
                  <p className="mb-2">Author: {image.author}</p> */}

                      {/* Open Button */}
                      <button
                        className=" sm:py-2 py-1 sm:rounded-lg rounded-sm  sm:px-16 px-8
                    bg-pink-900 hover:scale-110 transform transition duration-500 ease-in-out
                     cursor-pointer"
                        onClick={() => handleOpenBook(book.title)}
                      >
                        Open
                      </button>
                    </div>

                    
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default BooksUI;