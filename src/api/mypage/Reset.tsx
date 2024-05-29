import axios from "axios";

export const Reset = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/springboot/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    //response 콘솔에 출력
    console.log("Reset Data:", response);
    return response;
  } catch (error) {
    console.error("Reset Error:", error);
    return null;
  }
};
