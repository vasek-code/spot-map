import React, { useState } from "react";
import { HamburgerMenuBody } from "./HamburgerMenuBody/HamburgerMenuBody";
import { HamburgerMenuIcon } from "./HamburgerMenuIcon/HamburgerMenuIcon";

export const HamburgerMenu = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <HamburgerMenuIcon
        onClick={() => {
          setOpened(!opened);
        }}
        opened={opened}
      />
      <HamburgerMenuBody opened={opened} />
    </>
  );
};
