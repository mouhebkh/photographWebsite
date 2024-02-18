import { Suspense } from "react";
import NavbarPages from "@/components/UI/Navbar/PagesNavbar";
import GridView from "@/components/UI/GridView/GridView";
import Carousel from "@/components/UI/Carousel/Carousel";
import Button from "@/components/UI/ButtonsUI/Button";

export default function Home() {
  return (
    <>
      <div className="w-[100%] h-full min-h-screen bg-[#051e2e]">
        <NavbarPages />
        <Carousel />

        <Suspense fallback={<loading />}>
          <GridView />
        </Suspense>
        <Button />
      </div>
    </>
  );
}
