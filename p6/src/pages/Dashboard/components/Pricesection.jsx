import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Customcard } from "../../../chakra/Customcard";
import { FiArrowUpRight } from "react-icons/fi";
import { RiAddCircleFill } from "react-icons/ri";
import { AiFillMinusCircle } from "react-icons/ai";

const Pricesection = () => {
  const timestamps = ["7:15 PM", "7:30 PM", "7:45 PM", "8:00 PM", "9:15 PM"];

  return (
    <Customcard>
      <Flex justifyContent="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm" fontWeight="medium" color="gray">
              Current Price
            </Text>
          </HStack>
          <HStack
            spacing={4}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              xl: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={FiArrowUpRight} fontSize="24px" />
                <Text textStyle="h2" fontWeight="medium" fontSize="sm">
                  0.004
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={RiAddCircleFill} />} fontWeight="medium">
            Buy
          </Button>
          <Button
            leftIcon={<Icon as={AiFillMinusCircle} />}
            fontWeight="medium"
          >
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
                _selected={{
                  bg: "white",
                }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.png" mt="50px" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="gray">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image w="100%" src="/graph.png" mt="50px" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="gray">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Customcard>
  );
};

export default Pricesection;
