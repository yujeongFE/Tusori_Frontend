import React from "react";
import Profile from "../../components/Profile";
import MypageTable from "components/MypageTable";
import { Container, Text } from "./Style";

const MystocksHeaders = ["종목명", "매입가", "현재가", "평단가", "보유수량", "보유일", "평가손익금", "평가손익률"];
const InterestedHeaders = ["종목명", "현재가", "전일비", "등락률", "시가", "고가", "저가", "거래량", "시가총액"];
const BuyingLogsHeaders = ["종목명", "매수일자", "체결일자", "주문단가", "체결단가", "주문수량", "수익금", "수익률"];

const MyStocksData = [["삼성전자", "80,000", "82,000", "81,000", "100", "2021.01.01", "2,000,000", "2.5%"]];
const InterestedData = [["삼성전자", "82,000", "2,000", "2.5%", "80,000", "82,000", "80,000", "1,000,000", "1,000,000,000"]];
const BuyingLogsData = [["삼성전자", "2021.01.01", "2021.01.01", "80,000", "82,000", "100", "2,000,000", "2.5%"]];

const Index: React.FC = () => {
  return (
    <Container>
      <Profile />
      <Text>My 보유주식</Text>
      <MypageTable headers={MystocksHeaders} data={MyStocksData} />
      <Text>관심 주식</Text>
      <MypageTable headers={InterestedHeaders} data={InterestedData} />
      <Text>매수 일지</Text>
      <MypageTable headers={BuyingLogsHeaders} data={BuyingLogsData} />
    </Container>
  );
};

export default Index;
