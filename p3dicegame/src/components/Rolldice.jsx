import styled from "styled-components";
// porps ko destructure krna
const Rolldice = ({ currdice, setdice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={setdice}>
        <img src={`/img/dice_${currdice}.png`} alt="one" />
      </div>
      <p>Click Dice to Roll</p>
    </DiceContainer>
  );
};

export default Rolldice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
