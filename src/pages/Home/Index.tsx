import React, { useEffect, useState } from "react";
import MarketInfoBoxContainer from "../../components/Box/MarketInfoBox";
import Banner from "../../components/layouts/Banner";
import StockInfoBox from "../../components/Box/StockInfoBox";
import { useWords } from "../../components/SideBar/DictionarySideBar/WordsContext";
import { TableContainer, FlexBox, RowFlexBox } from "./Style";
import { fetchHomePageData } from "api/home/MarketInfo";

const Index = () => {
  const { setWords } = useWords();
  useEffect(() => {
    setWords([{ word: "", description: "" }]);
  }, [setWords]);

  const [marketData, setMarketData] = useState<{
    kospi: { Close: number; Comp: number; Change: number };
    kosdaq: { Close: number; Comp: number; Change: number };
    usdkrw_data: { close_price: number; percentage_change: number; price_change: number };
  } | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchHomePageData();
      if (data) {
        setMarketData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <FlexBox>
        <RowFlexBox>
          <MarketInfoBoxContainer marketData={marketData} />
          <Banner />
        </RowFlexBox>
        <TableContainer>
          <StockInfoBox title={"실시간 거래량 TOP5"} category={["코스피", "코스닥"]} />
          <StockInfoBox title={"MY 보유 주식"} login={false} />
        </TableContainer>
      </FlexBox>
    </>
  );
};

export default Index;
