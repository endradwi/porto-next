import React from "react";
import GooeyNav from "./animation/GooeyNav";

const items = [
  { label: "About", href: "#about" },
  { label: "My Project", href: "#project" },
  { label: "Contact", href: "#" },
];
function Navbar() {
  return (
    <>
      <div className="flex gap-10 justify-center items-center py-5  shadow">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-5 py-2 text-[#FBE4D6] hover:shadow-md hover:shadow-[#FBE4D6]  hover:text-black hover:bg-white hover:rounded-full text-lg font-bold transition delay-150 duration-300 ease-in-out rounded-full"
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}

export default Navbar;
