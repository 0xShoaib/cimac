import React from "react";

import { Box, Container, Flex } from "@chakra-ui/react";

import Sidebar from "../components/Sidebar/";
import Banner from "../components/Banner/";
import Calendar from "../components/Calendar/";
import WeeklyReport from "../components/WeeklyReport/";
import UpdateMonitoring from "../components/UpdateMonitoring/";
import Header from "../components/Header/";
import OtherFunctions from "../components/OtherFunctions/";

function DashboardLayout() {
  return (
    <Container>
      <Sidebar />
      <Flex justifyContent="space-between" className="content">
        <Box className="content__left">
          <Banner />
          <Calendar />
          <WeeklyReport />
          <UpdateMonitoring />
        </Box>
        <Box className="content__right">
          <Header />
          <Box className="content__right__inner__wrapper">
            <OtherFunctions />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default DashboardLayout;
