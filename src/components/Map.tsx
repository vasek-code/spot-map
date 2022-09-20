import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback, useState } from "react";
import { env } from "../env/client.mjs";
import removeElementsByQuery from "../utils/removeElementsByQuery";

export const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds({
      lat: 1,
      lng: 1,
    });
    map.fitBounds(bounds);

    setTimeout(() => {
      removeElementsByQuery([
        ".gm-control-active",
        ".gm-style-cc",
        ".gm-svpc",
        "img[alt='Google']",
        ".gm-bundled-control",
      ]);
    }, 500);
  }, []);

  const onUnmount = useCallback(() => {
    return;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "100vh",
      }}
      center={{
        lat: 1,
        lng: 1,
      }}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};
