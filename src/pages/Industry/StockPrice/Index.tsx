import React from "react";
import styled from "styled-components";
import StockPriceButton from "components/Box/StockPriceBox";
import CompanyInfo from "components/layouts/CompanyInfo";
import FinancialIndicators from "components/FinancialIndicators";
import StockOrderBox from "components/Box/StockOrderBox";
import IndustryComparisonTable from "components/Table/IndusryComparisonTable";
import { FlexBox, RowFlexBox, Table } from "./Style";

const Index: React.FC = () => {
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
      <Table>
        <IndustryComparisonTable height={"85vh"} />
      </Table>
    </FlexBox>
  );
};

export default Index;
