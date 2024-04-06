import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 70%;
  height: 80%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 20x;
  font-family: Pretendard-Medium;
  border-top: 1px solid #d9d9d9;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23.8%;
  height: 198px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  margin-top: 40px;
  margin-right: 1%;

  &:hover {
    cursor: pointer;
  }
  &:hover ${Title} {
    background: #708ffe;
    border-radius: 0px 0px 8px 8px;
    color: #fff;
  }
`;

interface DictionaryCategoryBoxProps {
  image: string;
  description: string;
}

const DictionaryCategoryBox: React.FC<DictionaryCategoryBoxProps> = ({ image, description }) => {
  return (
    <Container>
      <Image src={image} />
      <Title>{description}</Title>
    </Container>
  );
};

export default DictionaryCategoryBox;
