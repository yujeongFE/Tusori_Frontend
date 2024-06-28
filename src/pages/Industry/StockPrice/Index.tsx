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
import { useMyPageData } from "api/mypage/mypageDataContext";
import { useRecoilState } from "recoil";
import { stockCodeState, userInfoState, saveStockState } from "recoil/atoms";

const RowFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.35vw;
`;

const Index = () => {
  const { setWords } = useWords();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [guidModalOpen, setGuidModalOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [stockData, setStockData] = useState<any>(null);
  const location = useLocation();
  const [stockCode, setStockCode] = useRecoilState(stockCodeState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [saveStockInfo, setSaveStockInfo] = useRecoilState(saveStockState);
  const [sector, setSector] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { user_info, interest_stocks, save_stocks } = useMyPageData();

  useEffect(() => {
    if (user_info) {
      setUserInfo(user_info);
    }
  }, [user_info, setUserInfo]);

  useEffect(() => {
    if (Array.isArray(save_stocks) && save_stocks.length > 0) {
      const firstStock = save_stocks[0];
      setSaveStockInfo((prevSaveStocks) => [
        {
          name: name && name,
          save_name: firstStock.name || "",
          my_quantity: firstStock.my_quantity || 0,
        },
        ...prevSaveStocks.slice(1), 
      ]);
    } else {
      setSaveStockInfo([]); 
    }
  }, [save_stocks, setSaveStockInfo]);

  const fetchData = async ({ sector, name }: { sector: string; name: string }) => {
    try {
      const data = await IndividualStockInfo(sector, name);
      if (data) {
        setStockData(data);
        setStockCode(data?.company_info?.Code);
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
    const sector = location.state?.sector;
    const name = location.state?.name;

    if (sector && name) {
      fetchData({ sector, name });
      setSector(sector);
      setName(name);
    }
  }, [location.state, fetchData]);

  useEffect(() => {
    setWords([
      { word: "종목코드", description: "종목의 고유코드" },
      {
        word: "코스피",
        description: "코스피: 한국종합주가지수",
        subDescription1: "카카오, 삼성전자 등 국가 대표 기업들이 상장되어 있음",
        subDescription2: "가격 변동률 ↓",
      },
      { word: "종가", description: "일정 시간 기준 주식의 종료 시 가격" },
      { word: "전일비", description: "전일 대비 현재 시세의 변동 폭" },
      { word: "등락률", description: "전일비를 퍼센트(%)로 나타낸 수치" },
      { word: "주봉", description: "일주일(월~금) 동안 주가가 어떻게 변화했는지 확인할 수 있는 표" },
      { word: "월봉", description: "한 달 동안 주가가 어떻게 변화했는지 확인할 수 있는 표" },
      { word: "시가", description: "시작가의 줄임말, 주식시장이 열린 후 처음 거래된 가격" },
      { word: "고가", description: "하루 동안의 주가 중에서 가장 높은 주가" },
      { word: "저가", description: "하루 동안의 주가 중에서 가장 낮은 주가" },
      {
        word: "시가총액",
        description: "기업의 주식 가치를 보여주는 지표 현재 주식시장의 규모가 얼마나 되는지 판단할 수 있음",
        subDescription1: "현재 주식시장의 규모가 얼마나 되는지 판단할 수 있음",
      },
      {
        word: "PBR",
        description: "주가순자산비율",
        subDescription1: "기업의 순자산가치가 시장에서 얼마만큼의 평가를 받고 있는지 측정하는 지표",
        subDescription2: "순자산에 비해 주가가 어느 정도인지 파악 가능",
      },
      { word: "EPS", description: "주당순이익", subDescription1: "1주당 얼마의 이익을 창출하였느냐를 나타내는 지표" },
      {
        word: "PER",
        description: "주당순이익비율",
        subDescription1: "회사 1주당 수익의 몇 배가 되는가를 나타내는 지표",
        subDescription2: "주가의 과대, 과소 평가의 척도",
      },
      { word: "상장주식 수", description: "어떠한 회사가 시장에 상장한 총 주식수" },
      { word: "거래량", description: "주식시장에서 매매된 주식의 수량" },
      { word: "배당수익률", description: "주식에 대한 배당금으로 주가 대비 몇 퍼센트의 수익을 올릴 수 있는지 나타내는 지표" },
      { word: "매수", description: "주식을 사는 행위" },
      { word: "매도", description: "주식을 파는 행위" },
      { word: "가용 자산", description: "언제든지 사용할 수 있는 자산" },
      { word: "평균 매수가", description: "평균적으로 매수되는 가격" },
      { word: "보유량", description: "가지고 있는 해당 주식의 개수" },
      { word: "현재가", description: "해당 종목이 가장 최근에 체결된 거래 가격" },
      { word: "등락률", description: "전일비를 퍼센트(%)로 나타낸 수치" },
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
          <StockPriceBox sector={sector} data={stockData?.company_info} interestStocks={interest_stocks ?? []} />
          <CompanyInfoBox company_content={stockData?.company_content[0]} />
        </RowFlexBox>
        <RowFlexBox style={{ gap: "2.44vw", flexDirection: isMobile ? "column" : "row" }}>
          <FinancialIndicators data={stockData?.company_info} />
          {!isMobile && (
            <StockOrderBox
              code={stockCode}
              name={name}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              guidModalOpen={guidModalOpen}
              setGuidModalOpen={setGuidModalOpen}
              userInfo={userInfo}
              saveStocks={saveStockInfo}
            />
          )}
        </RowFlexBox>
        <Table style={{ zIndex: 3 }}>
          <IndustryComparisonTable height={"auto"} isMobile={isMobile} data={stockData} />
        </Table>
      </FlexBox>
    </div>
  );
};

export default Index;
