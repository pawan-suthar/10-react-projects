import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Headerection>
        <div className="log">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input placeholder="Search for food" />
        </div>
      </Headerection>
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
