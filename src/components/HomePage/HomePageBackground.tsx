/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

import { HomePageMarker } from "./HomePageMarker/HomePageMarker";

export const HomePageBackground = () => {
  const [markers, setMarkers] = useState<number[]>([1, 2, 3, 4, 5]);

  useEffect(() => {
    setInterval(() => {
      setMarkers((prevState) => [...prevState, prevState.length + 1]);
    }, 1000);
  }, []);

  return (
    <div className="absolute w-full h-full">
      <img
        src="/images/background.png"
        className="w-full h-full object-cover"
        alt="background image"
      />
      {markers.map((marker) => {
        return <HomePageMarker key={marker} />;
      })}
    </div>
  );
};
