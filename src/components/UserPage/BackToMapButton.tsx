import Link from "next/link";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

export const BackToMapButton = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/map">
        <a className="w-11 h-11 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 transition-all">
          <BsArrowLeftShort className="w-full h-full" />
        </a>
      </Link>
      <h3 className="font-semibold text-lg">Map</h3>
    </div>
  );
};
