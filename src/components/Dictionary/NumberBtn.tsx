import React from "react";
import styled from "styled-components";

interface NumberBtnProps {
  number: number;
  //onClick: (number: number) => void;
}

const Button = styled.button`
  color: #708ffe;
  //text-align: center;
  font-family: Pretendard-Bold;
  position: relative;
  top: -10px;
  font-size: 12px;
  border: none;
  border-radius: 50%;
  background-color: rgba(227, 233, 255, 0.53);
  width: 20px;
  height: 20px;
  padding: 0;
  margin-right: 3px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const NumberBtn: React.FC<NumberBtnProps> = ({ number }) => {
  return <Button>{number}</Button>;
};

export default NumberBtn;
