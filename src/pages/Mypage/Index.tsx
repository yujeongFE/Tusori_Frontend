import React, { useState, useEffect } from "react";
import Profile from "components/Box/ProfileBox";
import MypageTable from "components/Table/MypageTable";
import InterestedStocksTable from "components/Table/InterestedStocksTable";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import { Container, Text, LogsBtnContainer, LogsBtn, Bar } from "./Style";
import MobliePageName from "components/layouts/MobliePageName";
import { useNavigate } from "react-router-dom";
import { useMyPageData } from "api/mypage/mypageDataContext";

const Index: React.FC = () => {
  const [activeTable, setActiveTable] = useState<"BuyingLogs" | "SellingLogs">("BuyingLogs");
  const [InterestedTableData, setInterestedData] = useState([["", "종목명", "현재가", "전일비", "등락률", "시가", "고가", "저가", "거래량", "시가총액"]]);
  const [MyStocksData, setMyStocksData] = useState([["종목명", "매입가", "현재가", "평단가", "보유수량", "보유일", "평가손익금", "평가손익률"]]);
  const [BuyingLogsData, setBuyingLogsData] = useState([["종목명", "매수일자", "체결일자", "체결단가", "주문수량", "수익금", "수익률"]]);
  const [SellingLogsData, setSellingLogsData] = useState([["종목명", "매도일자", "체결일자", "체결단가", "주문수량", "수익금", "수익률"]]);
  const { setWords } = useWords();
  const { interest_stocks, stock_records, save_stocks } = useMyPageData();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    }
  }, []);

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
      { word: "저가", description: "하루 동안의 주가 중에서 가장 낮은 주가" },
      { word: "거래량", description: "조회 시점 기준 거래되고 있는 매수/매도 수량" },
      { word: "시가 총액", description: "기업의 주식 가치를 보여주는 지표. 현재 주식시장의 규모가 얼마나 되는지 판단할 수 있음" },
      { word: "체결 단가", description: "최대한 지불할 의사가 있는 가격" },
      { word: "주문 수량", description: "주문을 한 수량" },
      { word: "수익금", description: "이익으로 얻은 돈" },
      { word: "수익률", description: "수익에 대한 비율" },
    ]);
  }, [setWords]);

  // my보유주식
  useEffect(() => {
    if (save_stocks == null) return;
    const myData = save_stocks
      .map((stock) => [
        stock.name,
        stock.purchase.toLocaleString(),
        stock.close.toLocaleString(),
        stock.average_price.toLocaleString(),
        stock.my_quantity.toLocaleString() + "주",
        stock.retention_date.toLocaleString() + "일",
        stock.valuation > 0 ? `+${stock.valuation}` : `-${stock.valuation}`,
        stock.valuation_rate > 0 ? `+${stock.valuation_rate.toFixed(2)}%` : `-${stock.valuation_rate.toFixed(2)}%`,
      ])
      .map((row) => row.map((item) => String(item)));
    setMyStocksData((prevData) => [...prevData.slice(0, 1), ...myData]);
  }, [save_stocks]);

  // 관심 주식
  useEffect(() => {
    if (interest_stocks == null) return;
    const interestedData = interest_stocks
      .map((stock) => [
        "",
        stock.Name,
        stock.Close,
        stock.Changes > 0 ? `▲ ${stock.Changes.toLocaleString()}` : `▼ ${Math.abs(stock.Changes).toLocaleString()}`,
        stock.ChagesRatio > 0 ? `+${stock.ChagesRatio}%` : `-${Math.abs(stock.ChagesRatio)}%`,
        stock.Open.toLocaleString(),
        stock.High.toLocaleString(),
        stock.Low.toLocaleString(),
        stock.Volume.toLocaleString(),
        stock.Marcap.toLocaleString(),
      ])
      .map((row) => row.map((item) => String(item)));

    setInterestedData((prevData) => [...prevData.slice(0, 1), ...interestedData]);
  }, [interest_stocks]);

  //매수 일지
  useEffect(() => {
    if (stock_records == null) return;
    const buyingLogs = stock_records
      .filter((stock) => stock.sell_or_buy === true)
      .map((stock) => [
        stock.name,
        stock.sell_or_buy_date,
        stock.record_date,
        stock.contract_price.toLocaleString(),
        stock.quantity.toLocaleString() + "주",
        stock.proceeds > 0 ? `+${stock.proceeds}` : `${stock.proceeds}`,
        stock.proceeds_rate > 0 ? `+${stock.proceeds_rate.toFixed(2)}%` : `-${stock.proceeds_rate.toFixed(2)}%`,
      ])
      .map((row) => row.map((item) => String(item)));
    setBuyingLogsData((prevData) => [...prevData.slice(0, 1), ...buyingLogs]);
  }, [stock_records]);

  //매도 일지
  useEffect(() => {
    if (stock_records == null) return;
    const sellingLogs = stock_records
      .filter((stock) => stock.sell_or_buy === false)
      .map((stock) => [
        stock.name,
        stock.sell_or_buy_date,
        stock.record_date,
        stock.contract_price.toLocaleString(),
        stock.quantity.toLocaleString() + "주",
        stock.proceeds > 0 ? `+${stock.proceeds}` : `${stock.proceeds}`,
        stock.proceeds_rate > 0 ? `+${stock.proceeds_rate.toFixed(2)}%` : `-${stock.proceeds_rate.toFixed(2)}%`,
      ])
      .map((row) => row.map((item) => String(item)));
    setSellingLogsData((prevData) => [...prevData.slice(0, 1), ...sellingLogs]);
  }, [stock_records]);

  return (
    <Container>
      <MobliePageName pageTitle="마이페이지" />
      <Profile />
      <Text>MY 보유주식</Text>
      <MypageTable data={MyStocksData} />
      <Text>관심 주식</Text>
      <InterestedStocksTable data={InterestedTableData} />
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
      <div style={{ marginTop: "170px" }} />
    </Container>
  );
};

export default Index;
