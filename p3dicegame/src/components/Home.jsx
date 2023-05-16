import styled from "styled-components";
import { Button } from "../styled/button";

const Home = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/img/dices.png" alt="diceimsg" />
      </div>
      <div className="gamename">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .gamename h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;
