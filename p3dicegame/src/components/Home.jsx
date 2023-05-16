import styled from "styled-components";

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

const Button = styled.button`
  padding: 10px 18px;
  color: white;

  background: #000000;
  border-radius: 5px;
  cursor: pointer;
  min-width: 220px;
  border: none;
  font-size: 16px;
  transition: 0.4s bacground ease-in;

  &:hover {
    transition: 0.4s bacground ease-in;
    background-color: #828282;
  }
`;
