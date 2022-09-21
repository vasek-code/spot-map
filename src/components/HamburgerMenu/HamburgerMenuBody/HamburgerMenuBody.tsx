import React from "react";
import styles from "./HamburgerMenuBody.module.scss";

export const HamburgerMenuBody: React.FC<{
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  opened: boolean;
}> = ({ opened }) => {
  return (
    <>
      <div
        className={`min-h-screen bg-zinc-100 absolute z-10 top-20 ${
          opened ? styles.opened : styles.closed
        }`}
        style={{
          width: "200px",
          left: "0px",
        }}
      />
      <div
        className={`w-full bg-stone-800 opacity-75 absolute top-20 ${
          opened ? styles.bgOpened : styles.bgClosed
        }`}
        style={{
          left: "0px",
          height: "100vh",
        }}
      />
    </>
  );
};
