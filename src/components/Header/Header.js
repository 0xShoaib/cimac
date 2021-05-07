import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineBell } from "react-icons/ai";

import AvatarImage from "../../assets/img/avatar.jpg";

import "./Header.scss";

function Header() {
  return (
    <Flex justify="flex-end" align="center" className="header">
      <Box className="header__icon__wrapper">
        <IoSettingsOutline />
      </Box>
      <Box className="header__icon__wrapper">
        <Box className="notify__dot"></Box>
        <AiOutlineBell />
      </Box>
      <Box className="header__avatar__wrapper">
        <img src={AvatarImage} alt="Avatar" />
      </Box>
    </Flex>
  );
}

export default Header;
