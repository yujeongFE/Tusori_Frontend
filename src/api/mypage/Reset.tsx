import axios from "axios";

export const Reset = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/springboot/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response;
  } catch (error) {
    return null;
  }
};
