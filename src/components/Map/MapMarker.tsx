import { Marker } from "@react-google-maps/api";
import React, { useState } from "react";
import { useCurrentPosition } from "../../hooks/useCurrentPosition";
import { MapDetail } from "./MapDetail/MapDetail";

export const MapMarker = () => {
  const [opened, setOpened] = useState(false);
  const [clicked, setClicked] = useState(false);

  const currentPostion = useCurrentPosition();

  return (
    <>
      <Marker
        position={{
          lat: currentPostion.lat,
          lng: currentPostion.lng,
        }}
        icon={{
          url: "/images/place-marker.svg",
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        onClick={() => {
          setOpened(!opened);
          setClicked(true);
        }}
      />
      <MapDetail setOpened={setOpened} opened={opened} clicked={clicked} />
    </>
  );
};