import Dashboardlayout from "../../components/Dashboardlayout";
import Portfolio from "./components/Portfolio";

const Dashboard = ({}) => {
  return (
    <Dashboardlayout title={"Dashboard"}>
      <Portfolio />
    </Dashboardlayout>
  );
};

export default Dashboard;
