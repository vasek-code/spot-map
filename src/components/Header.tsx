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
    <header className="w-full z-20 absolute h-16 md:h-20 md:p-5 md:gap-3 px-2 gap-2 bg-zinc-100 border-b-zinc-300 border-b-2 flex items-center justify-between">
      <div className="flex justify-between items-center gap-1">
        <HamburgerMenu />
        <Link href="/">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="cursor-pointer md:ml-3"
            draggable={false}
            style={{
              width: "7rem",
              minWidth: "7rem",
            }}
          />
        </Link>
      </div>
      <SearchBar />
      {!session.loading && (
        <>
          {session.data ? (
            <>
              <div className="flex justify-between items-center md:gap-4 gap-2">
                <NotificationMenu />
                <UserMenu />
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center gap-3">
                <Link href="/sign-in">
                  <button className="font-semibold p-3 hover:bg-zinc-200 rounded-full active:bg-zinc-300 transition-all focus-within:border-zinc-300 border-2 border-transparent whitespace-nowrap">
                    Sign In
                  </button>
                </Link>
                <Link href="/register">
                  <button className="bg-blue-600 font-semibold text-white p-3 rounded-full hover:bg-blue-700 active:bg-blue-800 transition-all border-2 focus-within:border-blue-500">
                    Register
                  </button>
                </Link>
              </div>
            </>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
