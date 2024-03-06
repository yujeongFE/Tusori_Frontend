import React from "react";
import MarketInfoBoxContainer from "../../components/layouts/MarketInfoBox";
import Banner from "../../components/layouts/Banner";
import StockInfoBox from "../../components/layouts/StockInfoBox";
import { FlexBox } from "./Style";

const Index = () => {
  return (
    <>
      <FlexBox>
        <MarketInfoBoxContainer />
        <Banner />
        <StockInfoBox title={"실시간 거래량 TOP5"} category={["코스피", "코스닥"]} />
      </FlexBox>
    </>
  );
};

export default Index;
