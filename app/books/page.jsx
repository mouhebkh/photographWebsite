"use client";
import React from "react";
import NavbarPages from "@/components/UI/Navbar/PagesNavbar";
import BooksUI from "@/components/UI/BookPageUI/BooksUI";
import Button from "@/components/UI/ButtonsUI/Button";
import { Suspense } from "react";
import { BooksProvider } from "@/contexts/booksContext/BookProvider";

export default function page() {
  return (
    <div className="w-[100%] h-[100%] min-h-[100vh]  bg-black">
      <NavbarPages />
      <Suspense fallback={<loading />}>
        <BooksProvider>
        <BooksUI />
        </BooksProvider>
      </Suspense>
      <Button />
    </div>
  );
}
