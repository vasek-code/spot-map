import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React, { useCallback, useContext } from "react";
import removeElementsByQuery from "../../utils/removeElementsByQuery";
import mapStyle from "../../assets/json/map-style.json";
import { MapMarker } from "./MapMarker";
import { useCurrentPosition } from "../../hooks/useCurrentPosition";
import { env } from "../../env/client.mjs";
import { trpc } from "../../utils/trpc";
import { markersContext } from "../../contexts/MarkersContext";

export const Map: React.FC = () => {
  const markers = useContext(markersContext);

  const center = useCurrentPosition();

  const createMarkerMutation = trpc.useMutation(["marker.create"]);

  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
  });

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
      onRightClick={async (e) => {
        await createMarkerMutation.mutateAsync({
          lat: e.latLng?.lat() as number,
          lng: e.latLng?.lng() as number,
        });

        markers?.refetch();
      }}
    >
      {markers?.markers?.map((marker) => {
        return <MapMarker key={marker.id} lat={marker.lat} lng={marker.lng} />;
      })}
    </GoogleMap>
  ) : (
    <></>
  );
};
