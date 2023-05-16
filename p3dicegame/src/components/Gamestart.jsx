import styled from "styled-components";
import Numselect from "./Numselect";
import TotalScore from "./TotalScore";

const Gamestart = () => {
  return (
    <Maincontainer>
      <div className="top_section">
        <TotalScore />
        <Numselect />
      </div>
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
