import React from "react";
import ReactDOM from "react-dom";
import { MapDetailBody } from "./MapDetailBody";
import { GrFormClose } from "react-icons/gr";

export const MapDetail: React.FC<{
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  opened: boolean;
  clicked: boolean;
}> = ({ setOpened, opened, clicked }) => {
  if (!clicked) return null;

  return ReactDOM.createPortal(
    <>
      <MapDetailBody opened={opened}>
        <div className="w-full h-full flex p-3">
          <button
            onClick={() => {
              setOpened(false);
            }}
            className="rounded-full w-11 h-11 hover:bg-zinc-100 active:bg-zinc-200 transition-all ml-auto flex items-center justify-center"
          >
            <GrFormClose size={30} />
          </button>
        </div>
      </MapDetailBody>
    </>,
    document.querySelector("body") as Element
  );
};
