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
      </FlexBox>
    </>
  );
};

export default Index;
