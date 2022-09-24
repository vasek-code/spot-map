import React from "react";
import { SearchBarContainer } from "./SearchBarContainer";

export const SearchBar = () => {
  return (
    <div
      style={{
        maxWidth: "700px",
        width: "100%",
        height: "55px",
      }}
    >
      <SearchBarContainer />
    </div>
  );
};
