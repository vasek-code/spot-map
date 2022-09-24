import React, { useState } from "react";

import { HiOutlineLocationMarker, HiOutlineCog } from "react-icons/hi";
import { RiUserLine } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";

import { UserMenuBody } from "./UserMenuBody/UserMenuBody";
import { UserMenuButton } from "./UserMenuButton";
import { UserMenuIcon } from "./UserMenuIcon";

export const UserMenu = () => {
  const [opened, setOpened] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <UserMenuIcon
        opened={opened}
        onClick={() => {
          setOpened(!opened);
          setClicked(true);
        }}
      />
      <UserMenuBody opened={opened} clicked={clicked}>
        <UserMenuButton link="/" Icon={RiUserLine} top>
          Profile
        </UserMenuButton>
        <UserMenuButton link="/" Icon={HiOutlineLocationMarker}>
          My places
        </UserMenuButton>
        <UserMenuButton link="/" Icon={HiOutlineCog}>
          Settings
        </UserMenuButton>
        <UserMenuButton link="/" Icon={VscSignOut} bottom>
          Sign Out
        </UserMenuButton>
      </UserMenuBody>
    </>
  );
};
