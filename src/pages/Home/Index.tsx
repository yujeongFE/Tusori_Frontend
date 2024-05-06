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
    top_5_kospi: { Name: string; Close: string; Changes: number; ChagesRatio: number; Volume: number }[];
    top_5_kosdaq: { Name: string; Close: string; Changes: number; ChagesRatio: number; Volume: number }[];
    top_5_konex: { Name: string; Close: string; Changes: number; ChagesRatio: number; Volume: number }[];
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

  const accessToken = localStorage.getItem("accessToken");
  const login = accessToken ? true : false;

  return (
    <>
      <FlexBox>
        <RowFlexBox>
          <MarketInfoBoxContainer marketData={{ kospi: marketData?.kospi, kosdaq: marketData?.kosdaq, usdkrw_data: marketData?.usdkrw_data }} />
          <Banner />
        </RowFlexBox>
        <TableContainer>
          <StockInfoBox
            title={"실시간 거래량 TOP5"}
            category={["코스피", "코스닥", "코넥스"]}
            stockData={{
              top_5_kospi: marketData?.top_5_kospi || [],
              top_5_kosdaq: marketData?.top_5_kosdaq || [],
              top_5_konex: marketData?.top_5_konex || [],
            }}
          />
          <StockInfoBox title={"MY 보유 주식"} login={login} />
        </TableContainer>
      </FlexBox>
    </>
  );
};

export default Index;
