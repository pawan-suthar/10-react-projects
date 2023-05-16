import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  color: white;

  background: #000000;
  border-radius: 5px;
  cursor: pointer;
  min-width: 220px;
  border: none;
  font-size: 16px;
  transition: 0.4s bacground ease-in;

  &:hover {
    transition: 0.4s bacground ease-in;
    background-color: #828282;
  }
`;
