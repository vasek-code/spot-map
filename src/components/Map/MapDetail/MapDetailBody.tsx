import React from "react";
import styles from "./MapDetail.module.scss";

export const MapDetailBody: React.FC<{
  children: React.ReactNode;
  opened: boolean;
}> = ({ children, opened }) => {
  return (
    <div
      id="map-detail"
      className={`absolute w-full h-screen z-10 pt-20 ${
        opened ? styles.opened : styles.closed
      }`}
    >
      <div className="w-full h-full p-20 flex justify-center">
        <div className="max-w-7xl w-full h-full bg-zinc-50 shadow-2xl rounded-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};
