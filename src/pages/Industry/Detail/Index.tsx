import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Message, VerticalContainer, TableContainer, FlexBox } from "./Style";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import StockInfoTable from "components/Table/StockInfoTable";
import StockData from "../../../json/IndustryStockData.json";
import IndustrySidebar from "components/SideBar/IndustrySideBar";

const Index = () => {
  const { state } = useLocation();
  const { setWords } = useWords();
  const titles = ["종목명", "현재가", "전일비", "등락률(%)", "거래량", "순매수호가잔량"];
  const dataKeys = ["name", "currentPrice", "priceChange", "percentChange", "value", "bid"];

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemSelected = (item: string | null) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    setWords([
      { word: "현재가", description: "해당 종목이 가장 최근에 체결된 거래 가격" },
      { word: "전일비", description: "전일 대비 현재 시세의 변동 폭" },
      { word: "등락률", description: "전일비를 퍼센트(%)로 나타낸 수치" },
      { word: "거래량", description: "조회 시점 기준 거래되고 있는 매수/매도 잔량" },
      { word: "순매수호가잔량", description: "매수를 위해 주문을 걸어둔, 체결되지 않은 주식 수량" },
    ]);
  }, [setWords]);

  return (
    <VerticalContainer>
      <Message> {selectedItem ? selectedItem : state.value} 업종에 속한 종목입니다. 관심있는 종목을 눌러 상세정보를 확인해보세요.</Message>
      <FlexBox>
        <IndustrySidebar onItemSelected={handleItemSelected} initialItem={selectedItem ? selectedItem : state.value} />
        <TableContainer>
          <StockInfoTable titles={titles} dataKeys={dataKeys} data={StockData} />
        </TableContainer>
      </FlexBox>
    </VerticalContainer>
  );
};

export default Index;
