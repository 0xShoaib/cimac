import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// import { VictoryBar } from "victory";

import "./UpdateMonitoring.scss";

const MonitoringCard = ({
  title,
  date,
  percentage,
  color,
  isActive = false,
}) => {
  return (
    <Flex
      justify="space-evenly"
      align="center"
      className={isActive ? "monitoring__card active" : "monitoring__card"}
    >
      <Box className="monitoring__card__content">
        <Text className="monitoring__card__title">{title}</Text>
        <Text className="monitoring__card__date">{date}</Text>
      </Box>
      <Box className="monitoring__card__stat">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={{
            path: {
              stroke: color,
              strokeWidth: 7,
              strokeLinecap: "round",
            },
            trail: {
              stroke: isActive
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(0, 0, 0, 0.08)",
              strokeWidth: 7,
              strokeLinecap: "round",
            },
            text: {
              fill: isActive ? "#ffffff" : "#262626",
              fontSize: "20px",
              fontWeight: "600",
            },
          }}
        />
      </Box>
    </Flex>
  );
};

function UpdateMonitoring() {
  return (
    <Box className="update__monitoring__card">
      <Flex justify="space-between">
        <Text className="update__monitoring__card__title">
          Update Monitoring
        </Text>
      </Flex>

      <Flex
        className="monitoring__card__wrapper"
        justifyContent="space-between"
      >
        <MonitoringCard
          title="System Files"
          date="December 2021"
          percentage={25}
          color="#f25667"
        />
        <MonitoringCard
          title="Applications"
          date="December 2021"
          percentage={50}
          color="#ffa100"
          isActive={true}
        />
      </Flex>
    </Box>
  );
}

export default UpdateMonitoring;
