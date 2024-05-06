import axios from "axios";

export interface StockData {
  Close: number;
  Comp: number;
  Change: number;
}

export interface StockInfo {
  Name: string;
  Close: string;
  Changes: number;
  ChagesRatio: number;
  Volume: number;
}

export interface ExchangeRateData {
  close_price: number;
  price_change: number;
  percentage_change: number;
}

export async function fetchHomePageData(): Promise<{
  kospi: StockData;
  kosdaq: StockData;
  usdkrw_data: ExchangeRateData;
  top_5_kospi: StockInfo[];
  top_5_kosdaq: StockInfo[];
  top_5_konex: StockInfo[];
} | null> {
  try {
    console.log("데이터를 불러오는 중...");
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/fastapi/home`);

    // 데이터 형식 단언
    const responseData = response.data as {
      kospi: StockData;
      kosdaq: StockData;
      usdkrw_data: ExchangeRateData;
      top_5_kospi: StockInfo[];
      top_5_kosdaq: StockInfo[];
      top_5_konex: StockInfo[];
    };

    console.log("데이터를 성공적으로 불러왔습니다.");

    const { kospi, kosdaq, top_5_kospi, top_5_kosdaq, top_5_konex, usdkrw_data } = responseData;

    console.log("불러온 데이터:", {
      kospi,
      kosdaq,
      top_5_kospi,
      top_5_kosdaq,
      top_5_konex,
      usdkrw_data,
    });

    // 조정된 데이터를 반환
    return {
      kospi,
      kosdaq,
      usdkrw_data,
      top_5_kospi,
      top_5_kosdaq,
      top_5_konex,
    };
  } catch (error) {
    console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
    return null;
  }
}
