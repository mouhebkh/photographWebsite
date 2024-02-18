"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { getRequest } from "@/public/Utills/allRequests";

export default function BooksUI() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  // use useEffect to fetch the data
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await getRequest("/api/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // handle open book function
  const handleOpenBook = (title) => {
    if (!title) {
      console.error("Title is null");
      return;
    }

    // Extract the common part of the title
    const commonTitle = title.substring(0, title.lastIndexOf("_"));

    // Find the book with a similar title (except for the last word) in both PDF and image URLs
    const similarBook = books.find((book) => {
      const bookCommonTitle = book.title.substring(
        0,
        book.title.lastIndexOf("_")
      );
      return bookCommonTitle === commonTitle && book.pdfUrl;
    });

    if (similarBook && similarBook.pdfUrl) {
      window.open(similarBook.pdfUrl, "_blank");
    } else {
      toast.error("Book not found");
      // Handle case where similar book PDF URL is not available
      console.error("PDF not found for", title);
    }
  };

  return (
    <div className=" w-[100%] mx-auto sm:px-5 px-2 sm:py-32 max-sm:pt-10 sm:mt-16">
      <ToastContainer />
      <h1 className="sm:text-6xl text-2xl text-center font-bold mb-4 text-white">
        BOOKS
      </h1>
      <div className=" grid grid-row-3 sm:gap-4 gap-2">
        <div className="grid grid-cols-12 sm:gap-8  gap-2 sm:mt-10 mt-5">
          {/* First row with full-width column */}
          {loading ? (
            <div className="col-span-12 flex items-center justify-center h-[50vh]">
              <i className="fa-solid fa-circle-notch lg:text-6xl text-4xl text-center text-pink-800 animate-spin"></i>
            </div>
          ) : books.length === 0 ? (
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
                      onLoad={() => setLoading(false)}
                      priority
                      style={{ display: loading ? "none" : "block" }}
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
