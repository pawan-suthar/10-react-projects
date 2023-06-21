import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Sidedrawer from "./Sidedrawer";

const Dashboardlayout = ({ title, children }) => {
  const { onClose, isOpen, onOpen } = useDisclosure();

  return (
    <Box>
      <Flex>
        <Box
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <Sidenav />
        </Box>
        <Sidedrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <Topnav title={title} onOpen={onOpen} />
          <Container maxW="70rem" bg="red">
            {children}
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboardlayout;
