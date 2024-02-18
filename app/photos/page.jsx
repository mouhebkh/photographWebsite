"use client";
import { Suspense } from "react";
import NavbarPages from "@/components/UI/Navbar/PagesNavbar";
import Photos from "@/components/UI/PhotosPageUI/Photos";
import Button from "@/components/UI/ButtonsUI/Button";

export default function Home() {
  return (
    <>
      <div className="w-[100%] h-full min-h-screen bg-[#051e2e]">
        <NavbarPages />

        <Suspense fallback={<loading />}>
          <Photos />
        </Suspense>
        <Button />
      </div>
    </>
  );
}
