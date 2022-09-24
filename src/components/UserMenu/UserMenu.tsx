import React, { useState } from "react";

import { HiOutlineLocationMarker, HiOutlineCog } from "react-icons/hi";
import { RiUserLine } from "react-icons/ri";
import { GoSignOut } from "react-icons/go";

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
        <UserMenuButton Icon={RiUserLine} top>
          Profile
        </UserMenuButton>
        <UserMenuButton Icon={HiOutlineLocationMarker}>
          My places
        </UserMenuButton>
        <UserMenuButton Icon={HiOutlineCog}>Settings</UserMenuButton>
        <UserMenuButton Icon={GoSignOut} bottom>
          Sign Out
        </UserMenuButton>
      </UserMenuBody>
    </>
  );
};
