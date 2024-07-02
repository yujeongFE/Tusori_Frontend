import axios from "axios";

// 알림 기록 조회 함수
export const checkNotificationHistory = async () => {
  const token = localStorage.getItem("accessToken");
  try {
    if (!token) {
      console.error("Access token not found in local storage.");
      return null;
    }

    const apiUrl = `${process.env.REACT_APP_BASE_URL}/springboot/notification/history`;

    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Notification response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error occurred in checkNotificationHistory:", error);
    return null;
  }
};

export default checkNotificationHistory;
