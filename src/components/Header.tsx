/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useSession } from "../hooks/useSession";

import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { NotificationMenu } from "./NotificationMenu/NotificationMenu";

import { SearchBar } from "./SearchBar/SearchBar";
import { UserMenu } from "./UserMenu/UserMenu";

const Header: React.FC = () => {
  const session = useSession();

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
        {session ? (
          <>
            <NotificationMenu />
            <UserMenu />
          </>
        ) : (
          <>
            <Link href="/sign-in">
              <button className="font-semibold p-3 hover:bg-zinc-200 rounded-full active:bg-zinc-300 transition-all focus-within:border-zinc-300 border-2 border-transparent">
                Sign In
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-blue-600 font-semibold text-white p-3 rounded-full hover:bg-blue-700 active:bg-blue-800 transition-all border-2 focus-within:border-blue-500">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
