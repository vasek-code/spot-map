/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { GrFormClose } from "react-icons/gr";
import styles from "../MapDetail/MapDetail.module.scss";
import { MapMarkerHashtagInput } from "./MapMarkerHashtagInput";
import MapMarkerAddButton from "./MapMarkerAddButton";
import MapMarkerFormTitle from "./MapMarkerFormTitle";

const MarkerCreateForm: React.FC<{
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  opened: boolean;
  clicked: boolean;
}> = ({ setOpened, opened, clicked }) => {
  const [hashtags, setHashtags] = useState<number[]>([1]);

  if (!clicked) return null;

  return ReactDOM.createPortal(
    <>
      <style jsx global>
        {`
          /* width */
          ::-webkit-scrollbar {
            width: 10px;
            border-radius: 1rem;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: #fafafa;
            border-radius: 1rem;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #d9d9d9;
            border-radius: 10px;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #cbcbcb;
          }
        `}
      </style>
      <div
        className={`flex absolute w-full h-full pt-20 z-10 ${
          opened ? styles.opened : styles.closed
        }`}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      >
        <div className="w-full h-full p-20 flex">
          <div
            className="max-w-7xl w-full bg-zinc-50 mx-auto rounded-2xl p-3 shadow-2xl flex-col overflow-y-scroll"
            style={{
              minHeight: "700px",
            }}
          >
            <button
              onClick={() => {
                setOpened(false);
              }}
              className="rounded-full w-11 h-11 hover:bg-zinc-100 active:bg-zinc-200 transition-all ml-auto flex items-center justify-center"
            >
              <GrFormClose size={30} />
            </button>
            <div className="w-full flex gap-10 px-9">
              <div
                className="w-full rounded-2xl border-2 border-zinc-300"
                style={{
                  minHeight: "600px",
                  maxHeight: "600px",
                }}
              ></div>
              <div className="w-full flex flex-col gap-5">
                <MapMarkerFormTitle />
                <div className="w-full flex flex-col gap-3">
                  <h2 className="text-xl font-semibold ">Description</h2>
                  <textarea
                    style={{
                      minHeight: "150px",
                    }}
                    className="w-full border-2 border-zinc-300 rounded-xl p-3 outline-none font-semibold focus-visible:border-zinc-400 transition-all pr-12"
                  ></textarea>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <h2 className="text-xl font-semibold ">Hashtags</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-3">
                    {hashtags.map((numberOfHashtags, index) => (
                      <MapMarkerHashtagInput
                        key={numberOfHashtags}
                        index={index}
                        hashtags={hashtags}
                        setHashtags={setHashtags}
                      />
                    ))}
                    <MapMarkerAddButton
                      setHashtags={setHashtags}
                      hashtags={hashtags}
                    />
                  </div>
                </div>

                <button className="w-40 rounded-full ml-auto bg-zinc-200 py-3 text-lg hover:bg-zinc-300 active:bg-zinc-400 transition-all font-semibold">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.querySelector("#__next") as Element
  );
};

export default MarkerCreateForm;
