import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import NumberBtn from "components/Dictionary/NumberBtn";

interface TopStockInfo {
  Code: string;
  Name: string;
  Close: string;
  ChagesRatio: number;
  Volume: number;
  Marcap: number;
  PER: number;
  PBR: number;
  EPS: number;
  DIV: number;
}

interface TopStockInfos {
  top_5_stocks_info: TopStockInfo[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxContainer = styled.div<{ height: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  height: ${({ height }) => height};
  z-index: 1;
  overflow-y: auto;
`;

const Title = styled.h2`
  margin-top: 3vh;
  margin-left: 2vw;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TableContainer = styled.div`
  color: #000;
  font-size: 18px;
  z-index: 0;
  margin-top: 2.5vh;
  margin-left: 2.6vw;
  flex-grow: 1;
  @media (max-width: 768px) {
    font-size: 13px;
    margin-left: 0px;
    display: flex;
    justify-content: center;
  }
`;

const StyledTable = styled.table`
  width: 53vw;
  border-collapse: collapse;
`;

const StyledTh = styled.th.attrs<{ "data-istitlecell"?: boolean }>(({ "data-istitlecell": isTitleCell }) => ({
  "data-istitlecell": isTitleCell,
}))`
  padding: 8px;
  width: 16.6%;
  height: 4vh;
  border-top: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.05);
  background: #fafafa;
  @media (max-width: 768px) {
    font-size: 12px;
    width: auto;
  }
`;

const StyledTd = styled.td<{ value?: string }>`
  padding: 8px;
  width: 16.6%;
  height: 5.37vh;
  border-top: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;
  background: #fff;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.05);
  text-align: center;

  color: #1e1e1e;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 12px;
    width: auto;
  }
`;

const RowFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2vw;
  overflow-x: auto;
  padding-bottom: 20px;
`;

const Arrow = styled.img`
  color: #555;
  cursor: pointer;
  width: 3.5vw;
  min-width: 63px;
  @media (max-width: 768px) {
    font-size: 2vw;
    min-width: 40px;
  }
`;

const More = styled.span`
  font-size: 16px;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const IndustryComparisonTable: React.FC<{ height: string; isMobile: boolean; data: TopStockInfos }> = ({ height, isMobile, data }) => {
  const navigate = useNavigate();
  const { isOpen } = useWords();

  const handleClick = () => {
    navigate("/industry/details");
  };

  return (
    <Container>
      <BoxContainer height={height}>
        <Title>동종 업계 비교</Title>
        <RowFlexBox>
          <TableContainer>
            <StyledTable>
              <thead>
                <tr>
                  <StyledTh data-istitlecell>종목명</StyledTh>
                  {data?.top_5_stocks_info
                    .slice(0, isMobile ? 2 : data?.top_5_stocks_info.length)
                    .map((stock, index) => <StyledTh key={index}>{stock.Name}</StyledTh>)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <StyledTd>{!isMobile && isOpen && <NumberBtn number={23} />}현재가</StyledTd>
                  {data?.top_5_stocks_info
                    .slice(0, isMobile ? 2 : data?.top_5_stocks_info.length)
                    .map((stock, index) => <StyledTd key={index}>{Number(stock.Close).toLocaleString()}</StyledTd>)}
                </tr>
                <tr>
                  <StyledTd>{!isMobile && isOpen && <NumberBtn number={24} />}등락률</StyledTd>
                  {data?.top_5_stocks_info.slice(0, isMobile ? 2 : data?.top_5_stocks_info.length).map((stock, index) => (
                    <StyledTd style={{ color: stock.ChagesRatio >= 0 ? "red" : "blue" }} key={index}>
                      {stock.ChagesRatio >= 0 ? `+${stock.ChagesRatio.toLocaleString()}%` : `${stock.ChagesRatio.toLocaleString()}%`}
                    </StyledTd>
                  ))}
                </tr>
                <tr>
                  <StyledTd>시가총액</StyledTd>
                  {data?.top_5_stocks_info
                    .slice(0, isMobile ? 2 : data?.top_5_stocks_info.length)
                    .map((stock, index) => <StyledTd key={index}>{stock?.Marcap.toLocaleString()}</StyledTd>)}
                </tr>
                <tr>
                  <StyledTd>거래량</StyledTd>
                  {data?.top_5_stocks_info
                    .slice(0, isMobile ? 2 : data?.top_5_stocks_info.length)
                    .map((stock, index) => <StyledTd key={index}>{stock?.Volume.toLocaleString()}</StyledTd>)}
                </tr>
                <tr>
                  <StyledTd>배당 수익률</StyledTd>
                  {data?.top_5_stocks_info
                    .slice(0, isMobile ? 2 : data?.top_5_stocks_info.length)
                    .map((stock, index) => <StyledTd key={index}>{stock?.DIV.toLocaleString()}%</StyledTd>)}
                </tr>
                <tr>
                  <StyledTd>EPS</StyledTd>
                  {data?.top_5_stocks_info
                    .slice(0, isMobile ? 2 : data?.top_5_stocks_info.length)
                    .map((stock, index) => <StyledTd key={index}>{stock?.EPS.toLocaleString()}</StyledTd>)}
                </tr>
                <tr>
                  <StyledTd>PBR</StyledTd>
                  {data?.top_5_stocks_info
                    .slice(0, isMobile ? 2 : data?.top_5_stocks_info.length)
                    .map((stock, index) => <StyledTd key={index}>{stock?.PBR.toLocaleString()}</StyledTd>)}
                </tr>
                <tr>
                  <StyledTd>PER</StyledTd>
                  {data?.top_5_stocks_info
                    .slice(0, isMobile ? 2 : data?.top_5_stocks_info.length)
                    .map((stock, index) => <StyledTd key={index}>{stock?.PER.toLocaleString()}</StyledTd>)}
                </tr>
              </tbody>
            </StyledTable>
          </TableContainer>
          {!isMobile && (
            <div onClick={handleClick} style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "5vw" }}>
              <Arrow src={`${process.env.PUBLIC_URL}/assets/Home/seemore_arrow.svg`} />
              <More>더보기</More>
            </div>
          )}
        </RowFlexBox>
      </BoxContainer>
    </Container>
  );
};

export default IndustryComparisonTable;
