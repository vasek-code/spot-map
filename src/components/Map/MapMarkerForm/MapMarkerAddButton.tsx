import React, { useEffect, useState } from "react";
import { GrAdd } from "react-icons/gr";

const MapMarkerAddButton: React.FC<{
  setHashtags: React.Dispatch<React.SetStateAction<number[]>>;
  hashtags: number[];
}> = ({ hashtags, setHashtags }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (hashtags.length === 12) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [hashtags]);

  if (hidden) return null;

  return (
    <button
      onClick={() => {
        setHashtags((prevState) => {
          return [...prevState, prevState.length + 1];
        });
      }}
      className="bg-zinc-100 rounded-full w-12 h-12 flex justify-center items-center hover:bg-zinc-200 active:bg-zinc-300 border-2 border-zinc-300 transition-all"
    >
      <GrAdd size={15} />
    </button>
  );
};

export default MapMarkerAddButton;
