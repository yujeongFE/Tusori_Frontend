import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StockPriceButton from "components/Box/StockPriceBox";
import CompanyInfo from "components/layouts/CompanyInfo";
import FinancialIndicators from "components/FinancialIndicators";
import StockOrderBox from "components/Box/StockOrderBox";
import IndustryComparisonTable from "components/Table/IndusryComparisonTable";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import { FlexBox, Table } from "./Style";

const RowFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.35vw;
`;

const Index = () => {
  const { setWords } = useWords();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [guidModalOpen, setGuidModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setWords([
      { word: "종목코드", description: "종목의 고유코드" },
      { word: "코스피", description: "한국종합주가지수. 카카오, 삼성전자 등 국가 대표 기업들이 상장되어 있음. 가격 변동률 ↓ " },
      { word: "현재가", description: "해당 종목이 가장 최근에 체결된 거래 가격" },
      { word: "전일비", description: "전일 대비 현재 시세의 변동 폭" },
      { word: "등락률", description: "전일비를 퍼센트(%)로 나타낸 수치" },
      { word: "일봉", description: "하루 동안 주가가 어떻게 변화했는지 확인할 수 있는 표" },
      { word: "주봉", description: "일주일(월~금) 동안 주가가 어떻게 변화했는지 확인할 수 있는 표 " },
      { word: "월봉", description: "한 달 동안 주가가 어떻게 변화했는지 확인할 수 있는 표" },
      { word: "시가", description: "시작가의 줄임말. 주식시장이 열린 후 처음 거래된 가격" },
      { word: "고가", description: "하루 동안의 주가 중에서 가장 높은 주가" },
      { word: "저가", description: "하루 동안의 주가 중에서 가장 낮은 주가" },
      { word: "시가총액", description: "기업의 주식 가치를 보여주는 지표. 현재 주식시장의 규모가 얼마나 되는지 판단할 수 있음 " },
      {
        word: "PBR",
        description: "주가순자산비율. 기업의 순자산가치가 시장에서 얼마만큼의 평가를 받고 있는지 측정하는 지표. 순자산에 비해 주가가 어느 정도인지 파악 가능",
      },
      { word: "ROE", description: "자기자본이익률. 투자된 자본 사용하여 이익 어느 정도 올리고 있는지 나타내는 기업의 이익창출능력" },
      { word: "PER", description: "주가순이익비율. 회사 1주당 수익의 몇 배가 되는가를 나타내는 지표 주가의 과대, 과소 평가의 척도" },
      { word: "외인보증 비율", description: "외국인이 보유한 주식 비율" },
      { word: "동일 업종 PER", description: "동일 업종의 PER 지수" },
      { word: "거래량", description: "주식시장에서 매매된 주식의 수량" },
      { word: "종가", description: "주식 시장이 끝나면서 결정되는 가격" },
      { word: "매수", description: "주식을 사는 행위" },
      { word: "매도", description: "주식을 파는 행위" },
      { word: "가용자산", description: "언제든지 사용할 수 있는 자산" },
      { word: "평균매수가", description: "평균적으로 매수되는 가격" },
      { word: "보유량", description: "가지고 있는 해당 주식의 개수" },
      { word: "현재가", description: "해당 종목이 가장 최근에 체결된 거래 가격" },
      { word: "전일비", description: "전일 대비 현재 시세의 변동 폭" },
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
            background: (isModalOpen || guidModalOpen) ? "rgba(120, 120, 120, 0.40)" : "transparent",
            zIndex: 31,
          }}
        />
      )}
      <FlexBox style={{ zIndex: 2 }}>
        <RowFlexBox>
          <StockPriceButton />
          <CompanyInfo />
        </RowFlexBox>
        <RowFlexBox style={{ gap: "2.44vw" }}>
          <FinancialIndicators />
          <StockOrderBox isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} guidModalOpen={guidModalOpen} setGuidModalOpen={setGuidModalOpen} />
        </RowFlexBox>
        <Table style={{ zIndex: 3 }}>
          <IndustryComparisonTable height={"85vh"} />
        </Table>
      </FlexBox>
    </div>
  );
};
export default Index;
