import axios from "axios";

interface StockInfo {
  KOSPI: string[];
  KOSDAQ: string[];
  KONEX: string[];
}

export async function SectorInfo(): Promise<StockInfo | null> {
  try {
    console.log("데이터 받아오는 중...");
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/fastapi/sic`);
    const data: StockInfo = response.data;
    console.log("업종 카테고리 분류 데이터", data);

    sessionStorage.setItem("stockInfo", JSON.stringify(data));

    return data;
  } catch (error) {
    console.error("Error axios get stockInfo:", error);
    return null;
  }
}
