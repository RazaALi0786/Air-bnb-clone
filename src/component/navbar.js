import React from "react";
import Logo from "./Vector.png";
export default function Navbar() {
  return (
    <nav className="flex items-center bg-[#FFFFFF] shadow-md  px-7 py-6 h-20 flex">
      <img className="mr-2 h-7" src={Logo} alt="Logo" />
    </nav>
  );
}
