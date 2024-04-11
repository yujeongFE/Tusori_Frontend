import axios from "axios";

interface StockInfo {
  Code: string;
  Name: string;
  Close: string;
  Changes: number;
  ChagesRatio: number;
  Volume: number;
}

export async function StockInfo(selectedItem: string | null): Promise<StockInfo[] | null> {
  const url = `${process.env.REACT_APP_BASE_URL}/fastapi/sic/${selectedItem}`;
  console.log(url);
  try {
    if (!selectedItem) {
      return null;
    }

    console.log("데이터 받아오는 중...");
    const response = await axios.get(url);

    const data: StockInfo[] = response.data;

    console.log("업종별 종목 정보", data);
    return data;
  } catch (error) {
    console.error("Error axios get stockInfo:", error);
    return null;
  }
}
