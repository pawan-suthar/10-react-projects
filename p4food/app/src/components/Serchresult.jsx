import { styled } from "styled-components";
import { BASE_URL } from "../App";

const Serchresult = ({ data: foods }) => {
  return (
    <Foodcardcontainer>
      <Foodcards>
        {foods?.map(({ name, image, text, price }) => (
          <Foodcard key={name}>
            <div className="foodimg">
              <img src={BASE_URL + image} alt={name} />
            </div>
            <div className="foodinfo">
              <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <Button>${price}</Button>
            </div>
          </Foodcard>
        ))}
      </Foodcards>
    </Foodcardcontainer>
  );
};

export default Serchresult;

const Foodcardcontainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;

  height: calc(100vh - 210px);
`;

const Foodcards = styled.div``;

const Foodcard = styled.div``;

const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;
