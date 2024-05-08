import axios, { AxiosResponse } from "axios";

export interface BookmarkResponse {
  code: string;
  interest_id: number;
  user_id: number;
}

export const BookmarkRequest = async (sector: string, code: string): Promise<BookmarkResponse | null> => {
  const token = localStorage.getItem("accessToken");

  try {
    const response: AxiosResponse<BookmarkResponse> = await axios.post(`${process.env.REACT_APP_BASE_URL}/fastapi/sic/${sector}/${code}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error occurred in BookmarkRequest:", error);
    return null;
  }
};
