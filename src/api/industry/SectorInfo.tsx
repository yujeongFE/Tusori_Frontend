import axios from "axios";

interface StockInfo {
  KOSPI: string[];
  KOSDAQ: string[];
  KONEX: string[];
}

export async function SectorInfo(): Promise<StockInfo | null> {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/fastapi/sic`);
    const data: StockInfo = response.data;

    sessionStorage.setItem("stockInfo", JSON.stringify(data));

    return data;
  } catch (error) {
    return null;
  }
}
