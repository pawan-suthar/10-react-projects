import { useEffect, useState } from "react";
import styled from "styled-components";
import Serchresult from "./components/Serchresult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(null);
  const [btn, setBtn] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilter(json);
        setLoading(false);
      } catch (err) {
        setError("unable to fetch data");
      }
    };
    fetchData();
  }, []);

  const filterbtn = (type) => {
    if (type === "all") {
      setFilter(data);
      setBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilter(filter);
    setBtn(type);
  };

  const serchfood = (e) => {
    const serchvalue = e.target.value;
    if (serchvalue === "") {
      setFilter(null);
    }
    // method to serch items
    const filterdata = data?.filter((food) =>
      food.name.toLowerCase().includes(serchvalue.toLowerCase())
    );
    setFilter(filterdata);
  };

  return (
    <>
      <Container>
        {/* header section */}
        <Headerection>
          <div className="log">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input onChange={serchfood} placeholder="Search for food" />
          </div>
        </Headerection>
        {/* end header */}
        {/* filter btns */}
        <Filterbtns>
          <Button onClick={() => filterbtn("all")}>All</Button>
          <Button onClick={() => filterbtn("breakfast")}>Breakfast</Button>
          <Button onClick={() => filterbtn("lunch")}>Lunch</Button>
          <Button onClick={() => filterbtn("dinner")}>Dinner</Button>
        </Filterbtns>
        {/* end btns */}
      </Container>
      {error && <div>{error}</div>}
      {loading && <div>loading...</div>}
      <Serchresult data={filter} />
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
  height: 140px;
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
      &::placeholder {
        color: white;
      }
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
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
  cursor: pointer;
  &:hover {
    background-color: #ff3232;
  }
`;
