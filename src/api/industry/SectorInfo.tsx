import axios from "axios";

interface StockInfo {
  KOSPI: string[];
  KOSDAQ: string[];
  KONEX: string[];
}

const apiUrl = "api/fastapi/sic/";

export async function SectorInfo(): Promise<StockInfo | null> {
  try {
    console.log("데이터 받아오는 중...");
    const response = await axios.get(apiUrl);
    const data: StockInfo = response.data;
    console.log("업종 카테고리 분류 데이터", data);
    return data;
  } catch (error) {
    console.error("Error axios get stockInfo:", error);
    return null;
  }
}
