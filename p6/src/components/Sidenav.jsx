import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidenav = () => {
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
                borderRadius="10px"
                mx="3"
                py="3"
                px="4"
                _hover={{
                  bg: "#f3f3f7bc",
                  color: "#171717",
                }}
                color="#797e82"
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
            _hover={{
              bg: "#f3f3f7bc",
              color: "#171717",
            }}
            color="#797e82"
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
