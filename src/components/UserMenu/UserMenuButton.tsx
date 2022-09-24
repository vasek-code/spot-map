import React from "react";
import { IconType } from "react-icons";

export const UserMenuButton: React.FC<{
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
  Icon: IconType;
}> = ({ children, bottom, top, Icon }) => {
  return (
    <button
      className={`h-10 w-full hover:bg-zinc-100 flex justify-between items-center px-2 font-semibold ${
        bottom ? "rounded-b-md" : ""
      } ${top ? "rounded-t-md" : ""}`}
    >
      {children}
      <Icon size="20px" />
    </button>
  );
};
