import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Message, VerticalContainer, TableContainer, FlexBox } from "./Style";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import StockInfoTable from "components/Table/StockInfoTable";
import IndustrySidebar from "components/SideBar/IndustrySideBar";
import { StockInfo } from "api/industry/StockInfo";
import MobliePageName from "components/layouts/MobliePageName";

interface StockItem {
  ChagesRatio: number;
  Changes: number;
  Close: string;
  Code: string;
  Name: string;
  Volume: number;
}

const Index = () => {
  const { state } = useLocation();
  const { setWords } = useWords();
  const titles = ["종목명", "현재가", "전일비", "등락률(%)", "거래량"];

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [stockData, setStockData] = useState<StockItem[] | null>(null);

  const handleItemSelected = async (item: string | null) => {
    setSelectedItem(item);
    if (item) {
      try {
        const data = await StockInfo(item);
        if (data) {
          const transformedData: StockItem[] = data.map((info) => ({
            ChagesRatio: info.ChagesRatio,
            Changes: info.Changes,
            Close: info.Close,
            Code: info.Code,
            Name: info.Name,
            Volume: info.Volume,
          }));
          setStockData(transformedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const fetchData = async () => {
    try {
      const data = await StockInfo(state.value);
      if (data) {
        const transformedData: StockItem[] = data.map((info) => ({
          ChagesRatio: info.ChagesRatio,
          Changes: info.Changes,
          Close: info.Close,
          Code: info.Code,
          Name: info.Name,
          Volume: info.Volume,
        }));
        setStockData(transformedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setWords([
      { word: "현재가", description: "해당 종목이 가장 최근에 체결된 거래 가격" },
      { word: "전일비", description: "전일 대비 현재 시세의 변동 폭" },
      { word: "등락률", description: "전일비를 퍼센트(%)로 나타낸 수치" },
      { word: "거래량", description: "조회 시점 기준 거래되고 있는 매수/매도 잔량" },
    ]);
  }, [setWords]);

  return (
    <>
      <MobliePageName pageTitle="업종별 시세" />
      <VerticalContainer>
        <Message>{selectedItem ? selectedItem : state.value} 업종에 속한 종목입니다. 관심있는 종목을 눌러 상세정보를 확인해보세요.</Message>
        <FlexBox>
          <IndustrySidebar onItemSelected={handleItemSelected} initialItem={selectedItem ? selectedItem : state.value} data={state.data} />
          <TableContainer>
            <StockInfoTable titles={titles} data={stockData || []} sector={selectedItem ? selectedItem : state.value} />
          </TableContainer>
        </FlexBox>
      </VerticalContainer>
    </>
  );
};

export default Index;
