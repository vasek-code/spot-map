/* eslint-disable @next/next/no-img-element */
import React from "react";

import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";

import { SearchBar } from "./SearchBar/SearchBar";
import { UserMenu } from "./UserMenu/UserMenu";

const Header: React.FC = () => {
  return (
    <header className="w-full absolute h-20 bg-zinc-100 z-10 border-b-zinc-300 border-b-2 flex items-center p-5 justify-between gap-3">
      <HamburgerMenu />
      <SearchBar />
      <UserMenu />
    </header>
  );
};

export default Header;
