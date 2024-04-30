import axios, { AxiosResponse } from "axios";

interface StockInfo {
  sector: string;
  company_info: CompanyInfo;
  top_5_stocks_info: TopStockInfo[];
}

interface CompanyInfo {
  Code: string;
  Market: string;
  Name: string;
  Close: string;
  Changes: number;
  ChagesRatio: number;
  Open: number;
  High: number;
  Low: number;
  Volume: number;
  Marcap: number;
  Stocks: number;
  PER: number;
  PBR: number;
  EPS: number;
  DIV: number;
}

interface TopStockInfo {
  Code: string;
  Name: string;
  Close: string;
  ChagesRatio: number;
  Volume: number;
  Marcap: number;
  PER: number;
  PBR: number;
  EPS: number;
  DIV: number;
}

export async function IndividualStockInfo(sector: string, name: string): Promise<StockInfo | null> {
  try {
    const response: AxiosResponse<StockInfo> = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/fastapi/sic/${encodeURIComponent(sector)}/${encodeURIComponent(name)}`,
    );
    console.log("종목 시세 데이터", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching sector info:", error);
    return null;
  }
}
