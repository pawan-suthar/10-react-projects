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
import { GiHamburgerMenu } from "react-icons/gi";

const Topnav = ({ title, onOpen }) => {
  return (
    <Box px="4">
      <HStack h="16" justify="space-between" maxW="70rem" mx="auto">
        <Icon
          as={GiHamburgerMenu}
          fontSize="24px"
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
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
