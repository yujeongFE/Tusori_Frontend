import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StockButtonsWrapper = styled.div`
  display: flex;
  margin-top: 5vh;
  @media (max-width: 768px) {
    margin-top: 2vh;
  }
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

  @media (max-width: 768px) {
    width: 14vw;
    max-width: 60px;
    min-width: 0px;
    height: 26px;
    font-size: 13px;
    font-weight: 500;
  }
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

  @media (max-width: 768px) {
    margin-top: 1.7vh;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px 2.4vw;
  }
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
  width: auto;
  height: 8.5vh;
  min-height: 92px;
  padding: 0 1rem;
  overflow: hidden;

  .title {
    color: #222;
    font-family: Pretendard-Medium;
    font-size: 19px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 1vh;
    text-align: center;
    overflow: auto;
    /* 스크롤 바 숨기기 */
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .percentageChange {
    color: #f74848;
    font-family: Pretendard-Regular;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: auto;
    height: 12vh;
    min-height: 100px;
    .title {
      font-size: 16px;
    }
    .percentageChange {
      font-size: 14px;
    }
  }
`;

interface StockInfo {
  KOSPI: string[];
  KOSDAQ: string[];
  KONEX: string[];
}
interface IndustrySectorBoxProps {
  sectorInfo: StockInfo | null;
}

const IndustrySectorBox: React.FC<IndustrySectorBoxProps> = ({ sectorInfo }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<"KOSPI" | "KOSDAQ" | "KONEX">("KOSPI");

  const KOSPI_industryTitles = sectorInfo?.KOSPI || [];
  const KOSDAQ_industryTitles = sectorInfo?.KOSDAQ || [];
  const KONEX_industyTitles = sectorInfo?.KONEX || [];

  const data = isActive === "KOSPI" ? KOSPI_industryTitles : isActive === "KOSDAQ" ? KOSDAQ_industryTitles : KONEX_industyTitles;

  const handleBoxClick = (title: string) => {
    navigate("details", { state: { value: title, data: data } });
  };

  const handleButtonClick = (type: "KOSPI" | "KOSDAQ" | "KONEX") => {
    setIsActive(type);
  };

  return (
    <>
      <StockButton onClick={handleButtonClick} />
      <GridContainer>
        {data &&
          data?.map((title, index) => (
            <StyledContainer key={index} onClick={() => handleBoxClick(title)}>
              <div className="title">{title}</div>
            </StyledContainer>
          ))}
      </GridContainer>
    </>
  );
};

export default IndustrySectorBox;
