import React from "react";
import MarketInfoBoxContainer from "../../components/layouts/MarketInfoBox";
import Banner from "../../components/layouts/Banner";
import StockInfoBox from "../../components/layouts/StockInfoBox";
import { TableContainer, FlexBox } from "./Style";

const Index = () => {
  return (
    <>
      <FlexBox>
        <MarketInfoBoxContainer />
        <Banner />
        <TableContainer>
          <StockInfoBox title={"실시간 거래량 TOP5"} category={["코스피", "코스닥"]} />
          <StockInfoBox title={"MY 보유 주식"} />
        </TableContainer>
      </FlexBox>
    </>
  );
};

export default Index;
