import axios from "axios";

export interface UserInfomation {
  user_id: number;
  nickname: string;
  email: string;
  assets: number;
}

export interface InterestedStocksInfo {
  Name: string; // 종목명
  Close: string; // 종가
  Changes: number; // 전일비
  ChangesRatio: number; // 등락률
  Open: number; // 시가
  High: number; // 고가
  Low: number; // 저가
  Volume: number; // 거래량
  Marcap: number; // 시가총액
}

export interface recordsStocksInfo {
  stock_record_id: number;
  sell_or_buy_date: string;
  contract_price: number;
  quantity: number;
  proceeds_rate: number;
  sell_or_buy: string;
  code: string;
  record_date: string;
  proceeds: number;
  user_id: number;
  name: string;
}

export interface saveStocksInfo {
  stock_id: number;
  average_price: number;
  stock_record_id: number;
  code: string;
  purchase: number;
  my_quantity: number;
  name: string;
  close: string;
  valuation: number;
  valuation_rate: number;
  retention_date: number;
}

export async function MyPageData(): Promise<{
  user_info: UserInfomation;
  interest_stocks: InterestedStocksInfo[];
  stocks_records: recordsStocksInfo[];
  save_stocks: saveStocksInfo[];
} | null> {
  try {
    console.log("로딩 중...");
    const id = localStorage.getItem("id");

    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/fastapi/mypage/1`);

    const responseData = response.data as {
      user_info: UserInfomation;
      interest_stocks: InterestedStocksInfo[];
      stock_records: recordsStocksInfo[];
      save_stocks: saveStocksInfo[];
    };

    const { user_info, interest_stocks, stock_records: stocks_records, save_stocks } = responseData;

    console.log("Mypage Data:", {
      user_info,
      interest_stocks,
      stocks_records,
      save_stocks,
    });

    return {
      user_info,
      interest_stocks,
      stocks_records,
      save_stocks,
    };
  } catch (error) {
    console.error("Get Mypage Info Failed: ", error);
    return null;
  }
}
