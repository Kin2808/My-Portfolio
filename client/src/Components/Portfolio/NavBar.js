import React from "react";

const items = ["about", "experiences", "projects", "contacts"];

const NavBar = () => {
  return (
    <nav className="flex gap-5 p-5 lg:gap-10 lg:py-5 lg:px-10 border lg:border-r-0 border-main2 border-b-borderGray rounded-bl-2xl rounded-tr-2xl">
      {items.map((item, index) => (
        <button key={index} className="text-xs">
          {item.toUpperCase()}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
