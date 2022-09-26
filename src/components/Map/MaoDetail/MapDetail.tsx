import React from "react";
import ReactDOM from "react-dom";

export const MapDetail: React.FC<{
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setOpened }) => {
  return ReactDOM.createPortal(
    <>
      <div
        id="map-detail"
        className="absolute w-full h-screen z-10 pt-20"
        onClick={() => {
          setOpened(false);
        }}
      >
        <div className="w-full h-full p-20">
          <div className="w-full h-full bg-zinc-50 shadow-2xl rounded-2xl"></div>
        </div>
      </div>
    </>,
    document.querySelector("body") as Element
  );
};
