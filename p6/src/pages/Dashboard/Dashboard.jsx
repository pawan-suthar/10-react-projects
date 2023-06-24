import { Grid, GridItem } from "@chakra-ui/react";
import Dashboardlayout from "../../components/Dashboardlayout";
import Portfolio from "./components/Portfolio";
import Pricesection from "./components/Pricesection";
import Transaction from "./components/Transaction";

const Dashboard = ({}) => {
  return (
    <Dashboardlayout title={"Dashboard"}>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={6}
      >
        <GridItem colSpan={2}>
          <Portfolio />
        </GridItem>
        <GridItem colSpan={1}>
          <Pricesection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>
      </Grid>
    </Dashboardlayout>
  );
};

export default Dashboard;
