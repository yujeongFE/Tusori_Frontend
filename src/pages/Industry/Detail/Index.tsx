import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Message, VerticalContainer, TableContainer, FlexBox } from "./Style";
import StockInfoTable from "components/StockInfoTable";
import StockData from "../../../json/IndustryStockData.json";
import IndustrySidebar from "components/IndustrySideBar";

const Index = () => {
  const { state } = useLocation();
  const titles = ["종목명", "현재가", "전일비", "등락률(%)", "거래량", "순매수호가잔량"];
  const dataKeys = ["name", "currentPrice", "priceChange", "percentChange", "value", "bid"];

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemSelected = (item: string | null) => {
    setSelectedItem(item);
  };

  return (
    <VerticalContainer>
      <Message> {selectedItem ? selectedItem : state.value} 업종에 속한 종목입니다. 관심있는 종목을 눌러 상세정보를 확인해보세요.</Message>
      <FlexBox>
        <IndustrySidebar onItemSelected={handleItemSelected} />
        <TableContainer>
          <StockInfoTable titles={titles} dataKeys={dataKeys} data={StockData} />
        </TableContainer>
      </FlexBox>
    </VerticalContainer>
  );
};

export default Index;
