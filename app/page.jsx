import { Suspense } from "react";
import NavbarHome from "@/components/UI/Navbar/NavbarHome";
import HomeContent from "@/components/UI/HomePageUI/Home";

export default function Home() {
  return (
    <>
      <div className="w-[100%] min-h-[100vh] h-[100%] bg-black">
        <NavbarHome />
        <HomeContent />
      </div>
    </>
  );
}
