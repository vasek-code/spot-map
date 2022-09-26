import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback, useEffect, useState } from "react";
import { env } from "../../env/client.mjs";
import getCurrentPosition from "../../utils/getCurrentPosition";
import removeElementsByQuery from "../../utils/removeElementsByQuery";
import mapStyle from "../../assets/json/map-style.json";
import { MapMarker } from "./MapMarker";

export const Map: React.FC = () => {
  const [center, setCenter] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  useEffect(() => {
    getCurrentPosition().then(({ lat, lng }) => {
      setCenter({ lat, lng });
    });
  }, []);

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setInterval(() => {
        removeElementsByQuery([
          ".gm-control-active",
          ".gm-style-cc",
          "img[alt='Google']",
          ".gm-style-mtc",
          "div[data-control-height='81']",
          "div[jstcache='82']",
          ".gmnoprint",
        ]);
      }, 10);
    },
    [center]
  );

  const onUnmount = useCallback(() => {
    return;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "100vh",
        position: "absolute",
      }}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ styles: mapStyle }}
    >
      <MapMarker />
    </GoogleMap>
  ) : (
    <></>
  );
};
