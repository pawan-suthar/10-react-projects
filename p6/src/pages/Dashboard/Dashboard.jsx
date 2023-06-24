import { Grid, GridItem } from "@chakra-ui/react";
import Dashboardlayout from "../../components/Dashboardlayout";
import Portfolio from "./components/Portfolio";
import Pricesection from "./components/Pricesection";
import Transaction from "./components/Transaction";
import Infcards from "./components/Infcards";

const Dashboard = ({}) => {
  return (
    <Dashboardlayout title={"Dashboard"}>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={6}
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <Portfolio />
        </GridItem>
        <GridItem colSpan={1}>
          <Pricesection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>
        <GridItem colSpan={1}>
          <Infcards
            img="/loan_bg.svg"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without
        selling it"
            tagtext="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Infcards
            img="/contact-bg.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services"
            tagtext="Contact"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </Dashboardlayout>
  );
};

export default Dashboard;
