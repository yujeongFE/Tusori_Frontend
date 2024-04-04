import axios from "axios";

export interface UserInfomation {
  user_id: number;
  nickname: string;
  email: number;
  assets: number;
}

export interface MyStockInfo {
  Code: string;
  Name: string;
  Sector: string;
  Close: string;
  Changes: number;
  ChangesRatio: number;
  Open: number;
  High: number;
  Low: number;
  Volume: number;
  Marcap: number;
}

export async function MyPageData(): Promise<{
  user_info: UserInfomation;
  interests: MyStockInfo[];
} | null> {
  try {
    console.log("로딩 중...");
    const id = localStorage.getItem("id");

    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/fastapi/mypage/${id}`);

    const responseData = response.data as {
      user_info: UserInfomation;
      interests: MyStockInfo[];
    };

    const { user_info, interests } = responseData;

    console.log("Mypage Data:", {
      user_info,
      interests,
    });

    return {
      user_info,
      interests,
    };
  } catch (error) {
    console.error("Get Mypage Info Failed: ", error);
    return null;
  }
}
