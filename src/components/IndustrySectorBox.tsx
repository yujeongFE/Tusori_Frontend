import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2.3vw 3vh;
  margin-top: 14.5vh;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #dedede;
  background: #fff;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.04);
  width: 12.3vw;
  height: 8.5vh;

  .title {
    color: #222;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 1vh;
  }

  .percentageChange {
    color: #f74848;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
  }
`;

const IndustrySectorBox: React.FC = () => {
  const industryTitles = [
    "음식료품",
    "섬유, 의복",
    "종이, 목재",
    "화학",
    "의약품",
    "비금속광물",
    "철강 및 금속",
    "기계",
    "전기, 전자",
    "의료정밀",
    "운수장비",
    "유통업",
    "전기가스업",
    "건설업",
    "통신업",
    "금융업",
    "서비스업",
  ];

  const percentageChange = [
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
    "+0.44%",
  ];

  return (
    <GridContainer>
      {industryTitles.map((title, index) => (
        <StyledContainer key={index}>
          <div className="title">{title}</div>
          <div className="percentageChange">{percentageChange[index]}</div>
        </StyledContainer>
      ))}
    </GridContainer>
  );
};

export default IndustrySectorBox;
