import axios from "axios";

// 알림 요청 보내는 함수
export const sendNotificationRequest = async () => {
  const token = localStorage.getItem("accessToken");

  try {
    if (!token) {
      console.error("Access token not found in local storage.");
      return null;
    }

    const apiUrl = `${process.env.REACT_APP_BASE_URL}/springboot/notification`;

    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Notification response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error occurred in sendNotificationRequest:", error);
    return null;
  }
};

export default sendNotificationRequest;
