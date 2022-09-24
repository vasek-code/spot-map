import React from "react";
import ReactDOM from "react-dom";
import styles from "./HamburgerMenuBackground.module.scss";

export const HamburgerMenuBackground: React.FC<{
  clicked: boolean;
  opened: boolean;
}> = ({ clicked, opened }) => {
  if (!clicked) return null;

  return ReactDOM.createPortal(
    <div
      className={`w-full bg-stone-800 opacity-0 absolute top-20 ${
        clicked ? (opened ? styles.bgOpened : styles.bgClosed) : ""
      }`}
      style={{
        left: "0px",
        height: "100vh",
      }}
    />,
    document.getElementById("menu") as Element
  );
};
