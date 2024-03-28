import React, { useState, useEffect } from "react";
import Profile from "components/Box/ProfileBox";
import MypageTable from "components/Table/MypageTable";
import InterestedStocksTable from "components/Table/InterestedStocksTable";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import { Container, Text, LogsBtnContainer, LogsBtn, Bar } from "./Style";
import MobliePageName from "components/layouts/MobliePageName";

const MyStocksData = [
  ["종목명", "매입가", "현재가", "평단가", "보유수량", "보유일", "평가손익금", "평가손익률"],
  ["KODEX 200선물인버스2X", "2,555", "2,555", "2,555", "2000주", "10일", "+846,760", "+2.85%"],
  ["삼성전자", "74,700", "74,700", "74,700", "2주", "7일", "+4,364,129", "+16.18%"],
  ["대한해운", "2,555", "2,555", "2,555", "30주", "30일", "-846,760", "-2.85%"],
  ["LG헬로비전", "2,555", "2,555", "2,555", "1,500주", "2일", "-846,760", "-2.85%"],
  ["KTcs", "2,555", "2,555", "2,555", "2주", "10일", "-4,846,760", "-2.85%"],
  ["KODEX 200선물인버스2X", "2,555", "2,555", "2,555", "2000주", "10일", "+846,760", "+2.85%"],
  ["삼성전자", "74,700", "74,700", "74,700", "2주", "7일", "+4,364,129", "+16.18%"],
  ["대한해운", "2,555", "2,555", "2,555", "30주", "30일", "-846,760", "-2.85%"],
  ["LG헬로비전", "2,555", "2,555", "2,555", "1,500주", "2일", "-846,760", "-2.85%"],
  ["KTcs", "2,555", "2,555", "2,555", "2주", "10일", "-4,846,760", "-2.85%"],
];
const InterestedData = [
  ["", "종목명", "현재가", "전일비", "등락률", "시가", "고가", "저가", "거래량", "시가총액"],
  ["", "KODEX 200선물인버스2X", "2,555", "▼ 75", "-2.85%", "2,555", "2,555", "2,555", "144,846,760", "2,555"],
  ["", "삼성전자", "2,555", "▲ 3,000", "+4.18%", "74,700", "74,700", "74,700", "4,364,129", "74,700"],
  ["", "대한해운", "2,555", "▼ 75", "-2.85%", "2,555", "2,555", "2,555", "144,846,760", "2,555"],
  ["", "LG헬로비전", "2,555", "▼ 75", "-2.85%", "2,555", "2,555", "2,555", "144,846,760", "2,555"],
  ["", "KTcs", "2,555", "▼ 75", "-2.85%", "2,555", "2,555", "2,555", "144,846,760", "2,555"],
];
const BuyingLogsData = [
  ["종목명", "매수일자", "체결일자", "주문단가", "체결단가", "주문수량", "수익금", "수익률"],
  ["KODEX 200선물인버스2X", "2024-01-12", "거래 대기 중", "125,000", "5,000", "2,500주", "+4,364,129", "+16.18%"],
  ["삼성전자", "2024-01-12", "2024-01-12", "1,325,000", "5,000", "25주", "+4,364,129", "+16.18%"],
  ["대한해운", "2024-01-12", "2024-01-12", "125,000", "5,000", "25주", "+4,129", "+16.18%"],
  ["LG헬로비전", "2024-01-12", "2024-01-12", "5,000", "5,000", "25주", "+364,129", "+16.18%"],
  ["KTcs", "2024-01-12", "2024-01-12", "5,000", "5,000", "25주", "+4,364,129", "+16.18%"],
];
const SellingLogsData = [
  ["종목명", "매도일자", "체결일자", "주문단가", "체결단가", "주문수량", "수익금", "수익률"],
  ["KODEX 200선물인버스2X", "2024-01-10", "거래 대기 중", "125,000", "5,000", "2,500주", "+4,364,129", "+16.18%"],
  ["삼성전자", "2024-01-10", "2024-01-11", "1,325,000", "5,000", "25주", "+4,364,129", "+16.18%"],
  ["대한해운", "2024-01-10", "2024-01-11", "125,000", "5,000", "25주", "+4,129", "+16.18%"],
  ["LG헬로비전", "2024-01-10", "2024-01-11", "5,000", "5,000", "25주", "+364,129", "+16.18%"],
  ["KTcs", "2024-01-10", "2024-01-11", "5,000", "5,000", "25주", "+4,364,129", "+16.18%"],
];

const Index: React.FC = () => {
  const [activeTable, setActiveTable] = useState<"BuyingLogs" | "SellingLogs">("BuyingLogs");
  const { setWords } = useWords();

  useEffect(() => {
    setWords([
      { word: "총 자산", description: "현재 가지고 있는 모든 자산의 총합" },
      { word: "가용 자산", description: "언제든지 사용할 수 있는 자산" },
      { word: "보유 주식 총액", description: "현재 가지고 있는 주식의 총액" },
      { word: "보유 종목 수", description: "현재 가지고 있는 종목의 개수" },
      { word: "매입가", description: "해당 종목을 체결한 가격" },
      { word: "현재가", description: "해당 종목이 가장 최근에 체결된 거래 가격" },
      { word: "평단가", description: "평균단가의 줄임말. 주식 하나당 매입 가격" },
      { word: "보유수량", description: "가지고 있는 해당 주식의 개수" },
      { word: "보유일", description: "해당 주식을 보유하고 있는 기간" },
      { word: "평가 손익금", description: "매입금액을 기준으로 현재까지의 손익" },
      { word: "평가 손익률", description: "비율로 나타낸 평가손익금" },
      { word: "전일비", description: "전일 대비 현재 시세의 변동 폭" },
      { word: "등락률", description: "전일비를 퍼센트(%)로 나타낸 수치" },
      { word: "시가", description: "시작가의 줄임말, 주식시장이 열린 후 처음 거래된 가격" },
      { word: "고가", description: "하루 동안의 주가 중에서 가장 높은 주가" },
      { word: "거래량", description: "조회 시점 기준 거래되고 있는 매수/매도 수량" },
      { word: "시가 총액", description: "기업의 주식 가치를 보여주는 지표. 현재 주식시장의 규모가 얼마나 되는지 판단할 수 있음" },
      { word: "주문 단가", description: "최대한 지불할 의사가 있는 가격" },
      { word: "체결 단가", description: "최대한 지불할 의사가 있는 가격" },
      { word: "주문 수량", description: "주문을 한 수량" },
      { word: "수익금", description: "이익으로 얻은 돈" },
      { word: "수익률", description: "수익에 대한 비율" },
    ]);
  }, [setWords]);

  return (
    <Container>
      <MobliePageName pageTitle="마이페이지" />
      <Profile />
      <Text>MY 보유주식</Text>
      <MypageTable data={MyStocksData} />
      <Text>관심 주식</Text>
      <InterestedStocksTable data={InterestedData} />
      <LogsBtnContainer>
        <LogsBtn onClick={() => setActiveTable("BuyingLogs")} active={activeTable === "BuyingLogs"}>
          매수 일지
        </LogsBtn>
        <Bar />
        <LogsBtn onClick={() => setActiveTable("SellingLogs")} active={activeTable === "SellingLogs"}>
          매도 일지
        </LogsBtn>
      </LogsBtnContainer>
      {activeTable === "BuyingLogs" ? <MypageTable data={BuyingLogsData} /> : <MypageTable data={SellingLogsData} />}
    </Container>
  );
};

export default Index;
