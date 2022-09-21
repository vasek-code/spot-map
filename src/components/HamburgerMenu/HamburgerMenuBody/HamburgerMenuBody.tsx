import React, { Children } from "react";
import styles from "./HamburgerMenuBody.module.scss";

export const HamburgerMenuBody: React.FC<{
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  opened: boolean;
  clicked: boolean;
  children: React.ReactNode;
}> = ({ opened, clicked, children }) => {
  return (
    <>
      <div
        className={`min-h-screen bg-zinc-100 absolute z-10 top-20 ${
          clicked ? (opened ? styles.opened : styles.closed) : ""
        }`}
        style={{
          width: "200px",
          left: "0px",
          transform: "translateX(-200px)",
        }}
      >
        {children}
      </div>
      <div
        className={`w-full bg-stone-800 opacity-0 absolute top-20 ${
          clicked ? (opened ? styles.bgOpened : styles.bgClosed) : ""
        }`}
        style={{
          left: "0px",
          height: "100vh",
        }}
      />
    </>
  );
};
