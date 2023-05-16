import styled from "styled-components";
import Numselect from "./Numselect";
import TotalScore from "./TotalScore";
import Rolldice from "./Rolldice";

const Gamestart = () => {
  return (
    <Maincontainer>
      <div className="top_section">
        <TotalScore />
        <Numselect />
      </div>
      <Rolldice />
    </Maincontainer>
  );
};

export default Gamestart;

const Maincontainer = styled.main`
  /* padding-top: -70px; */
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
