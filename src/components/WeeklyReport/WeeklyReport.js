import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { FiServer } from "react-icons/fi";
import { IoMusicalNotesOutline, IoLogoInstagram } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./WeeklyReport.scss";

const JunkCard = ({ icon, title, value, color, isActive = false }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      direction="column"
      className={isActive ? "junk__card active" : "junk__card"}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        className="junk__card__content"
      >
        <Box
          className="junk__card__icon__wrapper"
          style={{
            borderColor: color,
            backgroundColor: isActive ? color : "none",
          }}
        >
          {icon}
        </Box>
        <Text className="junk__card__title">{title}</Text>
      </Flex>
      <Box
        className="junk__card__value"
        style={{ backgroundColor: isActive ? color : "none" }}
      >{`${value} Gb`}</Box>
    </Flex>
  );
};

function WeeklyReport() {
  return (
    <Box className="weekly__report__card">
      <Flex justify="space-between">
        <Text className="weekly__report__card__title">Weekly Reports</Text>

        <Flex alignItems="center" className="weekly__report__card__duration">
          <Text>Today</Text>
          <Text className="active">Week</Text>
          <Text>Month</Text>
        </Flex>
      </Flex>

      <Flex className="junk__card__wrapper" justifyContent="space-between">
        <JunkCard
          icon={<FiServer style={{ color: true ? "#ffffff" : "#ffa100" }} />}
          title="System Junk"
          value="35"
          color="#ffa100"
          isActive={true}
        />
        <JunkCard
          icon={<IoMusicalNotesOutline style={{ color: "#f25667" }} />}
          title="iTunes Junk"
          value="1.25"
          color="#f25667"
        />
        <JunkCard
          icon={<RiDeleteBin6Line style={{ color: "#88e0f0" }} />}
          title="Trash Bin"
          value="16.35"
          color="#88e0f0"
        />
        <JunkCard
          icon={<IoLogoInstagram style={{ color: "#30257d" }} />}
          title="Photo Junk"
          value="12.10"
          color="#30257d"
        />
      </Flex>
    </Box>
  );
}

export default WeeklyReport;
