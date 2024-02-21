"use client";
import { Suspense } from "react";
import NavbarPages from "@/components/UI/Navbar/PagesNavbar";
import Photos from "@/components/UI/PhotosPageUI/Photos";
import Button from "@/components/UI/ButtonsUI/Button";
import { PhotosProvider } from "@/contexts/photosContext/PhotosProvider";

export default function Home() {
  return (
    <>
      <div className="w-[100%] h-full min-h-screen bg-black">
        <NavbarPages />

        <Suspense fallback={<loading />}>
          <PhotosProvider>
          <Photos />
          </PhotosProvider>
        </Suspense>
        <Button />
      </div>
    </>
  );
}
