import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineCalendar,
} from "react-icons/ai";

import "./Calendar.scss";

const DateCard = ({ day, date, color, isActive = false }) => {
  return (
    <Flex
      direction="column"
      justify="center"
      alignItems="center"
      className={isActive ? "date__card active" : "date__card"}
      style={{
        backgroundColor: isActive ? color : "white",
        boxShadow: isActive
          ? `0px 10px 20px 0.1px rgba($color: ${color}, $alpha: 0.1)`
          : "none",
      }}
    >
      <Text className="date__card__day">{day}</Text>
      <Text className="date__card__date">{date}</Text>
      <Box
        className="date__card__event"
        style={{ backgroundColor: color }}
      ></Box>
    </Flex>
  );
};

function Calendar() {
  return (
    <Box className="calendar__card">
      <Flex justify="space-between">
        <Flex alignItems="center">
          <Text className="calendar__card__title">December 2-8</Text>
          <Flex alignItems="center" className="calendar__card__title__btns">
            <button>
              <AiOutlineLeft />
            </button>
            <button>
              <AiOutlineRight />
            </button>
          </Flex>
        </Flex>
        <Flex alignItems="center" className="calendar__card__title__month">
          <AiOutlineCalendar />
          <Text>Month</Text>
        </Flex>
      </Flex>

      <Flex className="date__card__wrapper" justifyContent="space-between">
        <DateCard day="Mon" date="2" color="#ffa100" />
        <DateCard day="Tue" date="3" color="#30257d" />
        <DateCard day="Wed" date="4" color="#f25667" />
        <DateCard day="Thu" date="5" color="#f25667" isActive={true} />
        <DateCard day="Fri" date="6" color="#ffa100" />
        <DateCard day="Sat" date="7" color="#f25667" />
        <DateCard day="Sun" date="8" color="#30257d" />
      </Flex>
    </Box>
  );
}

export default Calendar;
