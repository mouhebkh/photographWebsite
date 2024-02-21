import { Suspense } from "react";
import NavbarPages from "@/components/UI/Navbar/PagesNavbar";
import Button from "@/components/UI/ButtonsUI/Button";
import CombinedComponent from "@/components/UI/GridView/Combined";

export default function Home() {
  return (
    <>
      <div className="w-[100%] h-full min-h-screen bg-black">
        <NavbarPages />
        <Suspense fallback={<loading />}>
          <CombinedComponent />
        </Suspense>
        <Button />
      </div>
    </>
  );
}
