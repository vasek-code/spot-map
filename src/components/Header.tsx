/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { NotificationMenu } from "./NotificationMenu/NotificationMenu";

import { SearchBar } from "./SearchBar/SearchBar";
import { UserMenu } from "./UserMenu/UserMenu";

const Header: React.FC = () => {
  return (
    <header className="w-full z-20 absolute h-20 bg-zinc-100 border-b-zinc-300 border-b-2 flex items-center p-5 justify-between gap-3">
      <div className="flex justify-between items-center">
        <HamburgerMenu />
        <Link href="/">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="ml-3 cursor-pointer"
            style={{
              width: "7rem",
              minWidth: "7rem",
            }}
          />
        </Link>
      </div>
      <SearchBar />
      <div className="flex justify-between items-center gap-4">
        <NotificationMenu />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
