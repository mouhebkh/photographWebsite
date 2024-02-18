import { Suspense } from "react";
import NavbarHome from "@/components/UI/Navbar/NavbarHome";
import HomeContent from "@/components/UI/HomePageUI/Home";

export default function Home() {
  return (
    <>
      <div className="w-[100%] h-screen bg-black">
        <NavbarHome />
        <HomeContent />
      </div>
    </>
  );
}
