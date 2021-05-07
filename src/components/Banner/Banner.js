import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import "./Banner.scss";

function Banner() {
  return (
    <Box className="banner__card">
      <Heading as="h1">Hello, Barbara!</Heading>
      <Text>Welcome back to Clean My Mac</Text>
    </Box>
  );
}

export default Banner;
