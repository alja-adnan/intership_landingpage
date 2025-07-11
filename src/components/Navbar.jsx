import { useState } from "react";

const Navbar = () => {
    const[isOpen,setIsOpen]=useState(false)
  return (
    <nav  className="bg-slate-900 py-16">
        <div className="h-16 items-center flex justify-between">
      <div className="text-2xl font-bold text-white pl-4">HOOBANK</div>
      <div className="hidden sm:block">
        <a herf=""className="text-grey-100 text-lg px-4">HOME</a>
        <a herf=""className="text-grey-100 text-lg px-4">About us</a>
        <a herf=""className="text-grey-100 text-lg px-4">Contact us</a>
        <a herf=""className="text-grey-100 text-lg px-4">Features</a>
      </div>
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden space-y-2 p-3`}>
        <a href=""className="text-grey-600 text-lg px-4 block">HOME</a>
        <a href=""className="text-grey-600 text-lg px-4 block">About us</a>
        <a href=""className="text-grey-600 text-lg px-4 block">Contact us</a>
        <a href=""className="text-grey-600 text-lg px-4 block">Features</a>
      </div>
    </nav>
  );
};

export default Navbar;