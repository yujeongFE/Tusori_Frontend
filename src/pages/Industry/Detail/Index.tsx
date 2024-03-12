import React from "react";
import { useState } from "react";
import { FlexBox, TableContainer } from "./Style";
import StockInfoTable from "components/StockInfoTable";
import StockData from "../../../json/IndustryStockData.json";
import IndustrySidebar from "components/IndustrySideBar";

const Index = () => {
  const titles = ["종목명", "현재가", "전일비", "등락률(%)", "거래량", "순매수호가잔량"];
  const dataKeys = ["name", "currentPrice", "priceChange", "percentChange", "value", "bid"];

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemSelected = (item: string | null) => {
    setSelectedItem(item);
  };

  return (
    <FlexBox>
      <IndustrySidebar onItemSelected={handleItemSelected} />
      <TableContainer>
        <StockInfoTable titles={titles} dataKeys={dataKeys} data={StockData} />
      </TableContainer>
    </FlexBox>
  );
};

export default Index;
