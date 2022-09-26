/* eslint-disable @next/next/no-img-element */
import React from "react";

export const UserMenuIcon: React.FC<{
  opened: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}> = ({ onClick }) => {
  return (
    <div
      className="overflow-hidden cursor-pointer"
      onClick={onClick}
      style={{
        minWidth: "2.75rem",
        minHeight: "2.75rem",
        height: "2.75rem",
        width: "2.75rem",
      }}
    >
      <img
        src="http://simpleicon.com/wp-content/uploads/talk_1.svg"
        alt="user icon"
        className="w-full h-full rounded-full kokotko"
      />
    </div>
  );
};
