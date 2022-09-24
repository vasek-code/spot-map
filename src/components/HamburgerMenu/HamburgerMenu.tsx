import React, { useState } from "react";

import { GrMap } from "react-icons/gr";
import { BiHome } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

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
        <HamburgerMenuButton Icon={BiHome} link="/">
          Home
        </HamburgerMenuButton>
        <HamburgerMenuButton Icon={GrMap} link="/map">
          Map
        </HamburgerMenuButton>
        <HamburgerMenuButton Icon={FiUser} link="/map">
          Sign In
        </HamburgerMenuButton>
      </HamburgerMenuBody>
    </>
  );
};
