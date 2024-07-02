import axios from "axios";

export interface UserInfomation {
  user_id: number;
  nickname: string;
  email: string;
  assets: number;
}

// 관심주식
export interface InterestedStocksInfo {
  Code: string; // 종목코드
  Name: string; // 종목명
  Sector: string; // 업종
  Close: string; // 종가
  Changes: number; // 전일비
  ChagesRatio: number; // 등락률
  Open: number; // 시가
  High: number; // 고가
  Low: number; // 저가
  Volume: number; // 거래량
  Marcap: number; // 시가총액
}

// 매도 기록
export interface SellRecordsInfo {
  name: string; // 종목명
  sell_or_buy_date: string; // 매도 날짜
  record_date: string; // 체결일자
  contract_price: number; // 체결단가
  quantity: number; // 주문수량
  proceeds_rate: number; // 수익률
  proceeds: number; // 수익금
}

// 매수 기록
export interface BuyRecordsInfo {
  name: string; // 종목명
  sell_or_buy_date: string; // 매도 날짜
  record_date: string; // 체결일자
  contract_price: number; // 체결단가
  quantity: number; // 주문수량
  proceeds_rate: number; // 수익률
  proceeds: number; // 수익금
}

// 보유주식
export interface saveStocksInfo {
  name: string; // 종목명
  purchase: number; // 매입가
  close: string; // 현재가
  average_price: number; // 평단가
  my_quantity: number; // 보유수량
  retention_date: number; // 보유일
  valuation: number; // 평가 손익금
  valuation_rate: number; // 평가 손익률
}

export async function MyPageData(): Promise<{
  user_info: UserInfomation;
  interest_stocks: InterestedStocksInfo[];
  sell_records: SellRecordsInfo[];
  buy_records: BuyRecordsInfo[];
  save_stocks: saveStocksInfo[];
} | null> {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/fastapi/mypage`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const responseData = response.data as {
      user_info: UserInfomation;
      interest_stocks: InterestedStocksInfo[];
      sell_records: SellRecordsInfo[];
      buy_records: BuyRecordsInfo[];
      save_stocks: saveStocksInfo[];
    };

    const { user_info, interest_stocks, sell_records, buy_records, save_stocks } = responseData;

    console.log("Mypage Data:", {
      user_info,
      interest_stocks,
      sell_records,
      buy_records,
      save_stocks,
    });

    return {
      user_info,
      interest_stocks,
      sell_records,
      buy_records,
      save_stocks,
    };
  } catch (error) {
    console.error("Get Mypage Info Failed: ", error);
    return null;
  }
}
