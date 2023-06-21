import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";

const Topnav = () => {
  return (
    <Box>
      <HStack h="16" justify="space-between" px="32" maxW="80rem" mx="auto">
        <Heading fontWeight="medium" fontSize="28px">
          Dashboard
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={CgProfile} fontSize="30px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
