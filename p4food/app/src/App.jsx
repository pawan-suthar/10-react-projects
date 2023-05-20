import { useEffect, useState } from "react";
import styled from "styled-components";
import Serchresult from "./components/Serchresult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setError("unable to fetch data");
      }
    };
    fetchData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;

  return (
    <>
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
      <Serchresult data={data} />
    </>
  );
};

export default App;

// styled components css

export const Container = styled.div`
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
  padding-bottom: 40px;
`;

const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;
