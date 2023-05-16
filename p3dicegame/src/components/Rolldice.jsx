import { useState } from "react";
import styled from "styled-components";

const Rolldice = () => {
  const [currdice, setcurdice] = useState(1);

  const Genraterandomnum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const setdice = () => {
    const randomnumber = Genraterandomnum(1, 7);
    setcurdice((prev) => randomnumber);
  };

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
