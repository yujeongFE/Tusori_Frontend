import React, { useState } from "react";
import Profile from "components/Profile";
import MypageTable from "components/MypageTable";
import InterestedStocksTable from "components/InterestedStocksTable";
import { Container, Text, LogsBtnContainer, LogsBtn, Bar } from "./Style";

const MystocksHeaders = ["종목명", "현재가", "전일비", "등락률", "보유수량", "보유기간", "수익금", "수익률"];
const InterestedHeaders = ["종목명", "현재가", "전일비", "등락률", "시가", "고가", "저가", "거래량", "시가총액"];
const BuyingLogsHeaders = ["종목명", "매수일자", "체결일자", "주문단가", "체결단가", "주문수량", "수익금", "수익률"];
const SellingLogsHeaders = ["종목명", "매도일자", "체결일자", "주문단가", "체결단가", "주문수량", "수익금", "수익률"];

const MyStocksData = [
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
  ["KODEX 200선물인버스2X", "2,555", "▼ 75", "-2.85%", "2,555", "2,555", "2,555", "144,846,760", "2,555"],
  ["삼성전자", "2,555", "▲ 3,000", "+4.18%", "74,700", "74,700", "74,700", "4,364,129", "74,700"],
  ["대한해운", "2,555", "▼ 75", "-2.85%", "2,555", "2,555", "2,555", "144,846,760", "2,555"],
  ["LG헬로비전", "2,555", "▼ 75", "-2.85%", "2,555", "2,555", "2,555", "144,846,760", "2,555"],
  ["KTcs", "2,555", "▼ 75", "-2.85%", "2,555", "2,555", "2,555", "144,846,760", "2,555"],
];
const BuyingLogsData = [
  ["KODEX 200선물인버스2X", "2024-01-12", "거래 대기 중", "125,000", "5,000", "2,500주", "+4,364,129", "+16.18%"],
  ["삼성전자", "2024-01-12", "2024-01-12", "1,325,000", "5,000", "25주", "+4,364,129", "+16.18%"],
  ["대한해운", "2024-01-12", "2024-01-12", "125,000", "5,000", "25주", "+4,129", "+16.18%"],
  ["LG헬로비전", "2024-01-12", "2024-01-12", "5,000", "5,000", "25주", "+364,129", "+16.18%"],
  ["KTcs", "2024-01-12", "2024-01-12", "5,000", "5,000", "25주", "+4,364,129", "+16.18%"],
];
const SellingLogsData = [
  ["KODEX 200선물인버스2X", "2024-01-10", "거래 대기 중", "125,000", "5,000", "2,500주", "+4,364,129", "+16.18%"],
  ["삼성전자", "2024-01-10", "2024-01-11", "1,325,000", "5,000", "25주", "+4,364,129", "+16.18%"],
  ["대한해운", "2024-01-10", "2024-01-11", "125,000", "5,000", "25주", "+4,129", "+16.18%"],
  ["LG헬로비전", "2024-01-10", "2024-01-11", "5,000", "5,000", "25주", "+364,129", "+16.18%"],
  ["KTcs", "2024-01-10", "2024-01-11", "5,000", "5,000", "25주", "+4,364,129", "+16.18%"],
];

const Index: React.FC = () => {
  const [activeTable, setActiveTable] = useState<"BuyingLogs" | "SellingLogs">("BuyingLogs");

  return (
    <Container>
      <Profile />
      <Text>MY 보유주식</Text>
      <MypageTable headers={MystocksHeaders} data={MyStocksData} />
      <Text>관심 주식</Text>
      <InterestedStocksTable headers={InterestedHeaders} data={InterestedData} />
      <LogsBtnContainer>
        <LogsBtn onClick={() => setActiveTable("BuyingLogs")} active={activeTable === "BuyingLogs"}>
          매수 일지
        </LogsBtn>
        <Bar />
        <LogsBtn onClick={() => setActiveTable("SellingLogs")} active={activeTable === "SellingLogs"}>
          매도 일지
        </LogsBtn>
      </LogsBtnContainer>
      {activeTable === "BuyingLogs" ? (
        <MypageTable headers={BuyingLogsHeaders} data={BuyingLogsData} />
      ) : (
        <MypageTable headers={SellingLogsHeaders} data={SellingLogsData} />
      )}
    </Container>
  );
};

export default Index;
