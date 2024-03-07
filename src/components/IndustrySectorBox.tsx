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
  return (
    <GridContainer>
      <StyledContainer>
        <div className="title">업종명</div>
        <div className="percentageChange">업종별 주가 변동율</div>
      </StyledContainer>
    </GridContainer>
  );
};

export default IndustrySectorBox;
