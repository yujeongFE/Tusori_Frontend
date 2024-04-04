import React, { useState, useEffect } from "react";
import { FlexBox } from "./Style";
import IndustrySectorBox from "components/Box/IndustrySectorBox";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import { SectorInfo } from "api/industry/SectorInfo";

interface StockInfo {
  KOSPI: string[];
  KOSDAQ: string[];
  KONEX: string[];
}

const Index = () => {
  const { setWords } = useWords();
  const [sectorInfo, setSectorInfo] = useState<StockInfo | null>(null); 

  async function fetchData() {
    try {
      const data = await SectorInfo();
      setSectorInfo(data);
    } catch (error) {
      console.error("Error fetching stock info:", error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setWords([{ word: "전일비", description: "전일 대비 현재 시세의 변동 폭" }]);
  }, [setWords]);

  return (
    <FlexBox>
      <IndustrySectorBox sectorInfo={sectorInfo} />
    </FlexBox>
  );
};

export default Index;
