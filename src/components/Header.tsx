import React from "react";
import { HamburgerMenuIcon } from "./HamburgerMenu/HamburgerMenuIcon";

const Header: React.FC = () => {
  return (
    <header className="w-full absolute h-20 bg-zinc-100 z-10 border-b-zinc-300 border-b-2 flex items-center p-5">
      <HamburgerMenuIcon
        onClick={() => {
          console.log("ahoj");
        }}
      />
    </header>
  );
};

export default Header;
