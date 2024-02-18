import React from "react";
import NavbarPages from "@/components/UI/Navbar/PagesNavbar";
import Videos from "@/components/UI/VideosPageUI/Videos";
import Button from "@/components/UI/ButtonsUI/Button";
import { Suspense } from "react";

export default function page() {
  return (
    <div className="w-[100%] h-[100%] min-h-screen bg-[#051e2e]">
      <NavbarPages />
      <Suspense fallback={<loading />}>
        <Videos />
      </Suspense>
      <Button />
    </div>
  );
}
