import React, { useState } from "react";
import styled from "styled-components";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import NumberBtn from "components/Dictionary/NumberBtn";
import rise from "../../assets/rising_arrow.svg";
import graph from "../../assets/CandleGraph.png";

const BoxContainer = styled.div`
  width: 45vw;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  margin-top: 1.77vh;
  padding: 1.77vh 1.9vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 95%;
    border-radius: 12px;
    overflow-y: auto;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4vh;
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const KOSPI = styled.span`
  color: #000;
  font-family: Pretendard-Medium;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0.1vw;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Title = styled.span`
  color: #000;
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 0.8vh;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CurrentPrice = styled.span`
  color: #f40006;
  font-family: Pretendard-Bold;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 0.2vh;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ChangeInfo = styled.span`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    font-align: center;
  }
`;

const PriceChange = styled.span`
  align-items: center;
  color: #f5141a;
  font-family: Pretendard-Regular;
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const DetailPriceInfo = styled.div`
  display: flex;
  flex-direction: row;
  color: #7a7a7a;
  font-family: Pretendard-Medium;
  font-size: 14px;
  font-weight: 600;
  margin-top: 1.6vh;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 33px;
  background: #e6e6e6;
`;

const LongLine = styled.div`
  width: 44vw;
  height: 1px;
  background: #f2f2f2;
  margin-bottom: 0.8vh;
  @media (max-width: 768px) {
    width: auto;
  }
`;

const Graph = styled.img`
  width: 100%;
  height: auto;
`;

const Star = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const StockPriceBox: React.FC = () => {
  const stockName = decodeURIComponent(window.location.href.split("/")[4]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { isOpen } = useWords();

  // 즐겨찾기 기능(별 부분)
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <BoxContainer>
      <Header>
        <PriceInfo>
          <KOSPI>
            {isOpen ? <NumberBtn number={1} /> : null}000000 {isOpen ? <NumberBtn number={2} /> : null}코스피
          </KOSPI>
          <Title>{stockName}</Title>
          <CurrentPrice>{isOpen ? <NumberBtn number={3} /> : null}00,000</CurrentPrice>
          <ChangeInfo>
            <PriceChange>
              {isOpen ? <NumberBtn number={4} /> : null}
              <img src={rise} style={{ width: "10px", height: "10px" }} alt={"상승 화살표"} />
              <span>000</span>
            </PriceChange>
            <PriceChange style={{ marginLeft: "0.62vw" }}>{isOpen ? <NumberBtn number={5} /> : null}+0.00%</PriceChange>
          </ChangeInfo>
        </PriceInfo>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginRight: "1.25vw" }}>
          <img src={isFavorite ? "/assets/Industry/filledStar.svg" : "/assets/Industry/emptyStar.svg"} style={{ cursor: "pointer" }} onClick={toggleFavorite} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <DetailPriceInfo>
              {isOpen ? <NumberBtn number={8} /> : null}
              <PriceDetail label="시가" value="75,900" />
              {isOpen ? <NumberBtn number={9} /> : null}
              <PriceDetail label="고가" value="75,900" />
              {isOpen ? <NumberBtn number={10} /> : null}
              <PriceDetail label="저가" value="75,900" />
            </DetailPriceInfo>
          </div>
        </div>
      </Header>
      <LongLine />
      <Graph src={graph} alt={"일봉 그래프"} />
    </BoxContainer>
  );
};

const PriceDetail: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <>
    <div style={{ display: "flex", flexDirection: "column", padding: "0 10px", alignItems: "center" }}>
      <span>{label}</span>
      <span style={{ color: "#F40006", paddingTop: "5px" }}>{value}</span>
    </div>
    <Line />
  </>
);

export default StockPriceBox;
