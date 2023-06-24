import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const loc = useLocation();

  const isactivelink = (link) => {
    return location.pathname === link;
  };

  const navlinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transaction",
      link: "/transactions",
    },
  ];

  return (
    <Stack
      bg="white"
      justify="space-between"
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
      boxShadow={{ base: "none", lg: "lg" }}
    >
      <Box>
        <Heading as="h1" fontSize="20px" pt="3.5rem" textAlign="center">
          @Crypto
        </Heading>
        <Box mt="6" mx="3" cursor="pointer">
          {navlinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isactivelink(nav.link) ? "#dedee4bb" : "transparent"}
                color={isactivelink(nav.link) ? "#171717" : "#797e82"}
                borderRadius="10px"
                mx="3"
                py="3"
                px="4"
                _hover={{
                  bg: "#dedee4bb",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6" cursor="pointer">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            mx="3"
            py="3"
            px="4"
            bg={isactivelink("/support") ? "#dedee4bb" : "transparent"}
            color={isactivelink("/support") ? "#171717" : "#797e82"}
            _hover={{
              bg: "#dedee4bb",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
