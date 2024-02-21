"use client";
import React, { useState, useEffect } from "react";
import { fetchBooksData } from "./fetchBooks";
import { BooksContext } from "./bookContext";
import axios from "axios";

export const BooksProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  // use useEffect to fetch the data
  useEffect(() => {
    // call books api to fetch the data of books
    fetchBooksData(setBooks, setLoading);
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

  // on loading
  const onImageLoad = () => {
    setLoading(false); // Set loading state to false when image is loaded
  };


// Inside BooksProvider.jsx
const handleDeleteBook = async (title) => {
  debugger;
  try {
    const response = await axios.delete('/api/deleteBook', {
      data: { title }
    });

    console.log(response);
    if (response.status === 200) {
      // If deletion is successful, remove the book from the state
      setBooks(books.filter((book) => book.title !== title));
      console.log('Book deleted successfully');
      console.log('Books:', response.data);
    } else {
      console.error('Failed to delete book:', response.data);
    }
  } catch (error) {
    console.error('Error deleting book:', error); // Log the error object
  }
};




  return (
    <BooksContext.Provider
      value={{ books, loading, handleOpenBook, onImageLoad, handleDeleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};
