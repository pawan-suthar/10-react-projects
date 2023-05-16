import styled from "styled-components";

const ScoreContainer = styled.div`
  max-width: 150px;
  text-align: center;
  h1 {
    font-size: 80px;
    /* line-height: 100px; */
  }
  p {
    font-size: 24px;
    font-family: Arial, sans-serif;
  }
`;

const TotalScore = ({ score }) => {
  return (
    <div>
      <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      </ScoreContainer>
    </div>
  );
};

export default TotalScore;
