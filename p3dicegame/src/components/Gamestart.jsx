import styled from "styled-components";
import Numselect from "./Numselect";
import TotalScore from "./TotalScore";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button } from "../styled/button";

const Gamestart = () => {
  // state of numselect
  const [num, setnum] = useState();
  // state of roll dice
  const [currdice, setcurdice] = useState(1);
  // state for erorr
  const [error, seterror] = useState("");
  const [score, setscore] = useState(0);

  const Genraterandomnum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const setdice = () => {
    if (!num) {
      seterror("please select a number");
      return;
    }
    seterror("");

    const randomnumber = Genraterandomnum(1, 7);
    setcurdice((prev) => randomnumber);

    // agar num select hi h to score ko mt bahadao or func return krr do

    if (setnum == randomnumber) {
      setscore((prev) => prev + randomnumber);
    } else {
      setscore((prev) => prev - 2);
    }
    // ek baa dice rol k baad option ko undefine kr do
    setnum(undefined);
  };

  const resetscore = () => {
    setscore(0);
  };

  return (
    <Maincontainer>
      <div className="top_section">
        <TotalScore score={score} />
        {/* pass props to numselect */}
        <Numselect
          num={num}
          setnum={setnum}
          error={error}
          seterror={seterror}
        />
      </div>
      {/* pass props to roll doce  */}
      <Rolldice currdice={currdice} setdice={setdice} />
      <div className="buttons">
        <Button onClick={resetscore}>Reset Score</Button>
        <Button>Show Rules</Button>
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
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* max-width: 220px; */
    gap: 10px;
    align-items: center;
  }
`;
