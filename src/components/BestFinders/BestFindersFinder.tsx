import React from "react";
import { trpc } from "../../utils/trpc";
import { MapDetailCommentStars } from "../Map/MapDetail/MapDetailCommentStars";
import StarRatings from "react-star-ratings";

export const BestFindersFinder: React.FC<{
  id: string;
  totalVotes: number;
  totalStars: number;
}> = ({ id, totalStars, totalVotes }) => {
  const user = trpc.useQuery([
    "user.getOneById",
    {
      id: id,
    },
  ]);

  if (user.isLoading) return null;

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
        <h2 className="font-semibold text-lg">
          {user.data?.name === ""
            ? user.data?.email.split("@")[0]
            : user.data?.name}
        </h2>
        <StarRatings
          rating={totalStars / totalVotes}
          starDimension="25px"
          starSpacing="2px"
          starRatedColor="#f59e0b"
        />
        <h2 className="font-medium text-lg shrink-0">Total places: 200</h2>
        <h2 className="font-semibold text-xl shrink-0">Krásný les</h2>
      </div>
    </div>
  );
};
