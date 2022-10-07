import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";

export const MapMarkerHashtagInput: React.FC<{
  hashtags: number[];
  setHashtags: React.Dispatch<React.SetStateAction<number[]>>;
  index: number;
}> = ({ hashtags, index, setHashtags }) => {
  const [text, setText] = useState("#");

  return (
    <div className="flex justify-end w-full h-12 relative">
      <input
        className="w-full h-full border-2 border-zinc-300 rounded-full px-5 outline-none font-semibold focus-visible:border-zinc-400 transition-all pr-12"
        placeholder="#place"
        value={text}
        onChange={(e) => {
          if (e.target.value[0] !== "#") return;
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const hashtagsCopy = [...hashtags];
          hashtagsCopy.splice(index, 1);

          setHashtags(hashtagsCopy);
        }}
        className="h-12 w-12 border-2 absolute border-zinc-300 rounded-full bg-zinc-100 flex justify-center items-center hover:bg-zinc-200 active:bg-zinc-300 transition-all"
      >
        <GrFormClose size={19} />
      </button>
    </div>
  );
};
