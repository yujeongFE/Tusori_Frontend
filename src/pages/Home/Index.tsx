import React, { useEffect } from "react";
import MarketInfoBoxContainer from "../../components/Box/MarketInfoBox";
import Banner from "../../components/layouts/Banner";
import StockInfoBox from "../../components/Box/StockInfoBox";
import { useWords } from "../../components/SideBar/DictionarySideBar/WordsContext";
import { TableContainer, FlexBox, RowFlexBox } from "./Style";

const Index = () => {
  const { setWords } = useWords();
  useEffect(() => {
    setWords([{ word: "", description: "" }]);
  }, [setWords]);

  return (
    <>
      <FlexBox>
        <RowFlexBox>
          <MarketInfoBoxContainer />
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
