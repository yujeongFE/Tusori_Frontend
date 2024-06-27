import axios from "axios";

export interface User {
  user_id: number;
  email: number;
  assets: number;
  nickname: string;
}

export interface StockInfo {
  Name: string;
  Close: string;
  Changes: number;
  ChagesRatio: number;
  Volume: number;
}

export interface UserData {
  user_data: {
    user: User;
    save_stocks: StockInfo[][];
  };
}

export async function fetchUserData(): Promise<UserData | null> {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/fastapi/home/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
    // 데이터 형식 단언
    const responseData = response.data as UserData;

    console.log("데이터를 성공적으로 불러왔습니다.");
    console.log("불러온 데이터:", responseData);

    // 조정된 데이터를 반환
    return responseData;
  } catch (error) {
    console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
    return null;
  }
}
