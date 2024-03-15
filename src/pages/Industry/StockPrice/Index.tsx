import React from "react";
import styled from "styled-components";
import StockPriceButton from "components/StockPriceBox";
import CompanyInfo from "components/layouts/CompanyInfo";
import FinancialIndicators from "components/FinancialIndicators";
import StockOrderBox from "components/StockOrderBox";
import { FlexBox } from "../Style";

const RowFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.35vw;
`;

const Index = () => {
  return (
    <FlexBox>
      <RowFlexBox>
        <StockPriceButton />
        <CompanyInfo />
      </RowFlexBox>
      <RowFlexBox style={{ gap: "2.44vw" }}>
        <FinancialIndicators />
        <StockOrderBox />
      </RowFlexBox>
    </FlexBox>
  );
};

export default Index;
