import React from "react";
import { MapDetailCommentStars } from "../Map/MapDetail/MapDetailCommentStars";

export const BestFindersFinder = () => {
  return (
    <div className="w-full flex flex-col shrink-0">
      <div className="w-full h-20 bg-zinc-100 rounded-lg border-2 flex justify-center gap-10 items-center px-4">
        <img
          src="/images/undraw_pic_profile.svg"
          alt="profile img"
          style={{
            maxWidth: "60px",
          }}
        />
        <h2 className="font-semibold text-lg">Vašek</h2>
        <MapDetailCommentStars stars={5} />
        <h2 className="font-medium text-lg shrink-0">Total places: 200</h2>
        <h2 className="font-semibold text-xl shrink-0">Krásný les</h2>
      </div>
    </div>
  );
};
