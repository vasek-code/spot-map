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
        src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/view_1_1.png"
        alt="user icon"
        className="w-full h-full rounded-full kokotko"
      />
    </div>
  );
};
