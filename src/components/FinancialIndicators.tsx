import React from "react";
import styled from "styled-components";
import NumberBtn from "components/Dictionary/NumberBtn";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";

interface CompanyInfo {
  Code: string;
  Market: string;
  Name: string;
  Close: string;
  Changes: number;
  ChagesRatio: number;
  Open: number;
  High: number;
  Low: number;
  Volume: number;
  Marcap: number;
  Stocks: number;
  PER: number;
  PBR: number;
  EPS: number;
  DIV: number;
}

const Container = styled.div`
  width: 38vw;
  height: 60vh;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  gap: 1.6vh;
  margin-top: 6.2vh;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    gap: 10px;
    margin-top: 10px;
  }
`;

const Box = styled.div`
  width: 15.7vw;
  height: 14vh;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.14vw;
  @media (max-width: 768px) {
    width: auto;
    height: 70px;
  }
`;

const Title = styled.span`
  color: #575757;
  font-family: Pretendard-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 2vh;
  align-items: left;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Subtitle = styled.span`
  color: #000;
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FinancialIndicators: React.FC<{ data: CompanyInfo }> = ({ data }) => {
  const { isOpen } = useWords();

  return (
    <Container>
      <Box>
        <Title>
          {isOpen ? <NumberBtn number={11} /> : null}
          시가총액
        </Title>
        <Subtitle>{data?.Marcap.toLocaleString()}</Subtitle>
      </Box>
      <Box>
        <Title>{isOpen ? <NumberBtn number={12} /> : null}PBR(배)</Title>
        <Subtitle>{data?.PBR}</Subtitle>
      </Box>
      <Box>
        <Title>{isOpen ? <NumberBtn number={13} /> : null}EPS(원)</Title>
        <Subtitle>{data?.EPS.toLocaleString()}</Subtitle>
      </Box>
      <Box>
        <Title>{isOpen ? <NumberBtn number={14} /> : null}PER(배)</Title>
        <Subtitle>{data?.PER}</Subtitle>
      </Box>
      <Box>
        <Title>{isOpen ? <NumberBtn number={15} /> : null}상장 주식 수</Title>
        <Subtitle>{data?.Stocks.toLocaleString()}</Subtitle>
      </Box>
      <Box>
        <Title>{isOpen ? <NumberBtn number={16} /> : null}거래량</Title>
        <Subtitle>{data?.Volume.toLocaleString()}</Subtitle>
      </Box>
      <Box>
        <Title>{isOpen ? <NumberBtn number={17} /> : null}배당수익률</Title>
        <Subtitle>{data?.DIV}</Subtitle>
      </Box>
    </Container>
  );
};

export default FinancialIndicators;
