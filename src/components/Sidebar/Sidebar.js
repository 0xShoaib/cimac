import React from "react";
import { Flex } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { HiOutlineFolder, HiOutlineMail } from "react-icons/hi";
import { GoSettings } from "react-icons/go";
import { BiLockAlt } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

import "./Sidebar.scss";

function Sidebar() {
  return (
    <Flex
      className="sidebar"
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <div className="logo__wrapper">
        <h1>
          <span>CI</span>Mac
        </h1>
      </div>

      <Flex
        className="menu__wrapper"
        direction="column"
        justify="center"
        alignItems="center"
      >
        <p>
          <MdDashboard />
        </p>
        <p className="active">
          <RiComputerLine />
        </p>
        <p>
          <HiOutlineFolder />
        </p>
        <p>
          <GoSettings />
        </p>
        <p>
          <BiLockAlt />
        </p>
        <p>
          <HiOutlineMail />
        </p>
      </Flex>

      <div className="logout__wrapper">
        <FiLogOut />
      </div>
    </Flex>
  );
}

export default Sidebar;
