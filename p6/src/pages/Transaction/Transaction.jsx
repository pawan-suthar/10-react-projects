import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import Dashboardlayout from "../../components/Dashboardlayout";
import { HiDownload } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import Transactiontable from "./components/Transaciontable";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 49,
    },
  ];

  return (
    <Dashboardlayout title="Transaction">
      <Flex justify="end" mt="6" mb="3">
        <Button fontSize="sm" leftIcon={<Icon as={HiDownload} />}>
          Export CSV
        </Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList
            pt="4"
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BiSearchAlt} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Dashboardlayout>
  );
};

export default TransactionPage;
