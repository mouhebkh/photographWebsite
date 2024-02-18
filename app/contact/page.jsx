import React from "react";
import NavbarPages from "@/components/UI/Navbar/PagesNavbar";
import Contact from "@/components/UI/ContactPageUI/Contact";
import Button from "@/components/UI/ButtonsUI/Button";

export default function page() {
  return (
    <div className="w-[100%] h-[100%] min-h-screen bg-[#051e2e]">
      <NavbarPages />
      <Contact />
      <div className="2xl:fixed 2xl:bottom-0 2xl:left-0 2xl:right-0 bg-[#051e2e] w-[100%]">
        <Button />
      </div>
    </div>
  );
}
