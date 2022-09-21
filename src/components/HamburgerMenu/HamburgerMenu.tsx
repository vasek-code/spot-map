import React, { useState } from "react";

import { GrMap } from "react-icons/gr";
import { HiHome } from "react-icons/hi";

import { HamburgerMenuBody } from "./HamburgerMenuBody/HamburgerMenuBody";
import { HamburgerMenuButton } from "./HamburgerMenuButton/HamburgerMenuButton";
import { HamburgerMenuIcon } from "./HamburgerMenuIcon/HamburgerMenuIcon";

export const HamburgerMenu = () => {
  const [opened, setOpened] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <HamburgerMenuIcon
        onClick={() => {
          setOpened(!opened);
          setClicked(true);
        }}
        clicked={clicked}
        opened={opened}
      />
      <HamburgerMenuBody opened={opened} clicked={clicked}>
        <HamburgerMenuButton Icon={HiHome} content="Home" link="/" />
        <HamburgerMenuButton Icon={GrMap} content="Map" link="/map" />
      </HamburgerMenuBody>
    </>
  );
};
