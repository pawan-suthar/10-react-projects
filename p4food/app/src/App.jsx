import styled from "styled-components";

const App = () => {
  return (
    <Container>
      {/* header sectio */}
      <Headerection>
        <div className="log">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input placeholder="Search for food" />
        </div>
      </Headerection>
      {/* end header  */}
      {/* filter btns */}
      <Filterbtns>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </Filterbtns>
      {/* end btns */}
    </Container>
  );
};

export default App;

const Container = styled.div`
  /* background-color: #323334; */
  max-width: 1200px;
  margin: 0 auto;
`;

const Headerection = styled.section`
  min-height: 140px;
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: space-between;

  .search {
    input {
      background: transparent;
      border: 1px solid red;
      border-radius: 5px;
      color: white;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const Filterbtns = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;
