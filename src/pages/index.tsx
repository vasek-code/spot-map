import type { NextPage } from "next";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import { env } from "../env/client.mjs";
import removeElementsByQuery from "../utils/removeElementsByQuery.js";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Home: NextPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map: any) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);

    setTimeout(() => {
      removeElementsByQuery([".gm-control-active", ".gm-svpc", ".gmnoprint"]);
    }, 500);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
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

export default Home;
