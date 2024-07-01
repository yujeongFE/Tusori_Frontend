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
  try {
    if (!selectedItem) {
      return null;
    }
    const response = await axios.get(url);

    const data: StockInfo[] = response.data;
    return data;
  } catch (error) {
    return null;
  }
}
