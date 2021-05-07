import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { HiOutlineDotsVertical } from "react-icons/hi";

import "./OtherFunctions.scss";
import { FiBarChart2, FiCheckCircle } from "react-icons/fi";
import { RiSignalTowerLine } from "react-icons/ri";
import { IoSync } from "react-icons/io5";

const FuncCard = ({ icon, color, title, isDisabled = false }) => {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      direction="column"
      className={isDisabled ? "func__card disabled" : "func__card"}
    >
      <Flex
        justify="space-between"
        align="center"
        className="func__card__header"
        style={{ backgroundColor: color }}
      >
        <Box className="func__card__icon">{icon}</Box>
        <HiOutlineDotsVertical />
      </Flex>

      <Flex
        justify="space-between"
        align="center"
        className="func__card__content"
      >
        <Text>{title}</Text>
      </Flex>
    </Flex>
  );
};

function OtherFunctions() {
  return (
    <Box className="other__func__card">
      <Flex justify="space-between">
        <Text className="other__func__card__title">Other Functions</Text>
      </Flex>

      <Flex wrap="wrap" className="func__card__wrapper">
        <FuncCard icon={<FiBarChart2 />} color="#f25667" title="Optimization" />
        <FuncCard
          icon={<RiSignalTowerLine />}
          color="#ffa100"
          title="Smart Scan"
        />
        <FuncCard icon={<FiCheckCircle />} color="#88e0f0" title="Malware" />
        <FuncCard
          icon={<IoSync />}
          color="#eeeeee"
          title="Updater"
          isDisabled={true}
        />
      </Flex>
    </Box>
  );
}

export default OtherFunctions;
