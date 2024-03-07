import React, { useState } from "react";
import styled from "styled-components";

const StockButtonsWrapper = styled.div`
  display: flex;
  margin-top: 5vh;
`;

const StockButtonContainer = styled.div`
  width: 10.3vw
  height: 3.05vh;
  flex-shrink: 0;
  cursor: pointer;
`;

const StockButtonSvgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StockButton: React.FC<{ onClick: (type: "KOSPI" | "KOSDAQ") => void }> = ({ onClick }) => {
  const [isActive, setIsActive] = useState("KOSPI");

  const handleClick = (type: "KOSPI" | "KOSDAQ") => {
    const newType = type === "KOSPI" ? "KOSPI" : "KOSDAQ";
    console.log(newType);
    setIsActive(newType);
    onClick(newType);
  };

  return (
    <StockButtonContainer>
      <StockButtonSvgWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" width="198" height="33" viewBox="0 0 198 33" fill="none">
          {isActive === "KOSPI" ? (
            <>
              <g onClick={() => handleClick("KOSPI")}>
                <path
                  d="M98.5 32.5L10 32.5C4.7533 32.5 0.5 28.2467 0.500001 23L0.500002 9.99999C0.500002 4.75329 4.7533 0.499992 10 0.499992L98.5 0.5L98.5 32.5Z"
                  fill="white"
                  stroke="#708FFE"
                />
                <text x="25%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="#222" fontFamily="Pretendard" fontSize="16" fontWeight="500">
                  코스피
                </text>
              </g>
              <g onClick={() => handleClick("KOSDAQ")}>
                <path
                  d="M99.5 32.5L188 32.5C193.247 32.5 197.5 28.2467 197.5 23L197.5 10C197.5 4.7533 193.247 0.500001 188 0.5L99.5 0.499992L99.5 32.5Z"
                  fill="white"
                  stroke="#CCCCCC"
                />
                <text x="75%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="#222" fontFamily="Pretendard" fontSize="16" fontWeight="500">
                  코스닥
                </text>
              </g>
            </>
          ) : (
            <>
              <g onClick={() => handleClick("KOSPI")}>
                <path
                  d="M98.5 32.5L10 32.5C4.7533 32.5 0.5 28.2467 0.500001 23L0.500002 9.99999C0.500002 4.75329 4.7533 0.499992 10 0.499992L98.5 0.5L98.5 32.5Z"
                  fill="white"
                  stroke="#CCCCCC"
                />
                <text x="25%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="#222" fontFamily="Pretendard" fontSize="16" fontWeight="500">
                  코스피
                </text>
              </g>
              <g onClick={() => handleClick("KOSDAQ")}>
                <path
                  d="M99.5 32.5L188 32.5C193.247 32.5 197.5 28.2467 197.5 23L197.5 10C197.5 4.7533 193.247 0.500001 188 0.5L99.5 0.499992L99.5 32.5Z"
                  fill="white"
                  stroke="#708FFE"
                />
                <text x="75%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="#222" fontFamily="Pretendard" fontSize="16" fontWeight="500">
                  코스닥
                </text>
              </g>
            </>
          )}
        </svg>
      </StockButtonSvgWrapper>
    </StockButtonContainer>
  );
};

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

  const handleButtonClick = (type: "KOSPI" | "KOSDAQ") => {
    console.log("Button clicked with type:", type);
  };

  return (
    <>
      <StockButtonsWrapper>
        <StockButton onClick={handleButtonClick} />
      </StockButtonsWrapper>
      <GridContainer>
        {industryTitles.map((title, index) => (
          <StyledContainer key={index}>
            <div className="title">{title}</div>
            <div className="percentageChange">{percentageChange[index]}</div>
          </StyledContainer>
        ))}
      </GridContainer>
    </>
  );
};

export default IndustrySectorBox;
