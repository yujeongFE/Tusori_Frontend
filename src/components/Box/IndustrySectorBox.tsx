import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StockButtonsWrapper = styled.div`
  display: flex;
  margin-top: 5vh;
`;

const StockButtonContainer = styled.button<{ active: boolean }>`
  width: 6vw;
  min-width: 70px;
  height: 33px;
  border-radius: 40px;
  background: ${(props) => (props.active ? "#708FFE" : "#CCCCCC")};
  border: none;
  margin-right: 1.04vw;
  cursor: pointer;

  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const StockButton: React.FC<{ onClick: (type: "KOSPI" | "KOSDAQ" | "KONEX") => void }> = ({ onClick }) => {
  const [isActive, setIsActive] = useState<"KOSPI" | "KOSDAQ" | "KONEX">("KOSPI");

  const handleClick = (type: "KOSPI" | "KOSDAQ" | "KONEX") => {
    setIsActive(type);
    onClick(type);
  };

  return (
    <StockButtonsWrapper>
      <StockButtonContainer active={isActive === "KOSPI"} onClick={() => handleClick("KOSPI")}>
        코스피
      </StockButtonContainer>
      <StockButtonContainer active={isActive === "KOSDAQ"} onClick={() => handleClick("KOSDAQ")}>
        코스닥
      </StockButtonContainer>
      <StockButtonContainer active={isActive === "KONEX"} onClick={() => handleClick("KONEX")}>
        코넥스
      </StockButtonContainer>
    </StockButtonsWrapper>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.3vw 3vh;
  margin-top: 6.5vh;
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
  width: 16vw;
  height: 8.5vh;

  .title {
    color: #222;
    font-family: Pretendard-Medium;
    font-size: 19px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 1vh;
  }

  .percentageChange {
    color: #f74848;
    font-family: Pretendard-Regular;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
  }
`;

const IndustrySectorBox: React.FC = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<"KOSPI" | "KOSDAQ" | "KONEX">("KOSPI");

  const handleBoxClick = (title: string) => {
    navigate("details", { state: { value: title } });
  };

  const KOSPI_industryTitles = [
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

  const KOSDAQ_industryTitles = ["제조", "건설", "유통", "운송", "금융", "오락•문화", "통신방송서비스", "IT S/W & SVC", "IT H/W"];

  const KOSPI_percentageChange = [
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

  const KOSDAQ_percentageChange = ["+0.44%", "+0.44%", "+0.44%", "+0.44%", "+0.44%", "+0.44%", "+0.44%", "+0.44%", "+0.44%"];

  const handleButtonClick = (type: "KOSPI" | "KOSDAQ" | "KONEX") => {
    setIsActive(type);
  };

  const data = isActive === "KOSPI" ? KOSPI_industryTitles : KOSDAQ_industryTitles;
  const percentageChange = isActive === "KOSPI" ? KOSPI_percentageChange : KOSDAQ_percentageChange;

  return (
    <>
      <StockButton onClick={handleButtonClick} />
      <GridContainer>
        {data.map((title, index) => (
          <StyledContainer key={index} onClick={() => handleBoxClick(title)}>
            <div className="title">{title}</div>
            <div className="percentageChange">{percentageChange[index]}</div>
          </StyledContainer>
        ))}
      </GridContainer>
    </>
  );
};

export default IndustrySectorBox;
