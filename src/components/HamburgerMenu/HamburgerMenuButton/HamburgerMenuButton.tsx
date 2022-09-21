import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

export const HamburgerMenuButton: React.FC<{
  Icon: IconType;
  content: string;
  link: string;
}> = ({ Icon, content, link }) => {
  return (
    <Link href={link}>
      <div className="w-full h-20 border-b-2 flex items-center justify-between px-5 hover:bg-zinc-200 cursor-pointer">
        <h1 className="font-bold text-lg">{content}</h1>
        <Icon size={30} />
      </div>
    </Link>
  );
};
