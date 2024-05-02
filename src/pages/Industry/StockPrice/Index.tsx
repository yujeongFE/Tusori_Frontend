import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StockPriceBox from "components/Box/StockPriceBox";
import CompanyInfoBox from "components/Box/CompanyInfoBox";
import FinancialIndicators from "components/FinancialIndicators";
import StockOrderBox from "components/Box/StockOrderBox";
import IndustryComparisonTable from "components/Table/IndusryComparisonTable";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import { FlexBox, Table } from "./Style";
import MobliePageName from "components/layouts/MobliePageName";
import { useLocation } from "react-router-dom";
import { IndividualStockInfo } from "api/industry/IndividualStockInfo";

const RowFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.35vw;
`;

const Index = () => {
  const { setWords } = useWords();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [guidModalOpen, setGuidModalOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [stockData, setStockData] = useState<any>(null);
  const location = useLocation();

  const fetchData = async ({ sector, name }: { sector: string; name: string }) => {
    try {
      const data = await IndividualStockInfo(sector, name);
      if (data) {
        setStockData(data);
      }
    } catch (error) {
      console.error("개별 종목 상세 데이터 파싱 오류:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (location.state) {
      const sector = location.state.sector;
      const name = location.state.name;
      fetchData({ sector, name });
    }
  }, [location.state]);

  useEffect(() => {
    setWords([
      { word: "종목코드", description: "종목의 고유코드" },
      // (중략) 단어 설정
    ]);
  }, [setWords]);

  return (
    <div style={{ position: "relative" }}>
      {(isModalOpen || guidModalOpen) && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isModalOpen || guidModalOpen ? "rgba(120, 120, 120, 0.40)" : "transparent",
            zIndex: 31,
          }}
        />
      )}
      <MobliePageName pageTitle="종목 상세" />
      <FlexBox style={{ zIndex: 2 }}>
        <RowFlexBox style={{ gap: "2.44vw", flexDirection: isMobile ? "column" : "row" }}>
          <StockPriceBox data={stockData?.company_info} />
          <CompanyInfoBox isMobile={isMobile} />
        </RowFlexBox>
        <RowFlexBox style={{ gap: "2.44vw", flexDirection: isMobile ? "column" : "row" }}>
          <FinancialIndicators data={stockData?.company_info} />
          {!isMobile && (
            <StockOrderBox isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} guidModalOpen={guidModalOpen} setGuidModalOpen={setGuidModalOpen} />
          )}
        </RowFlexBox>
        <Table style={{ zIndex: 3 }}>
          <IndustryComparisonTable height={"auto"} isMobile={isMobile} />
        </Table>
      </FlexBox>
    </div>
  );
};

export default Index;
