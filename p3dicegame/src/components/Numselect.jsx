import styled from "styled-components";

const Numlist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
  width: 72px;
  cursor: pointer;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;
// porps ko destructure krna
const Numselect = ({ num, setnum, error, seterror }) => {
  const numarr = [1, 2, 3, 4, 5, 6];

  const numselecthandler = (value) => {
    setnum(value);
    seterror("");
  };

  return (
    <Numlist>
      <p>{error}</p>
      <div className="flex">
        {numarr.map((value, i) => (
          <Box
            isselected={value === num}
            key={i}
            onClick={() => numselecthandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>select number</p>
    </Numlist>
  );
};

export default Numselect;
