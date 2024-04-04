import React, { useEffect } from "react";
import axios from "axios";

const LoginRedirectHandler: React.FC = () => {
  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get("code");

    if (code) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/springboot/user/kakao?code=${code}`)
        .then((response) => {
          console.log("Login success:", response.data.data.accessToken);
          console.log("data:", response.data.data.nickname);
          localStorage.setItem("accessToken", response.data.data.accessToken);
          localStorage.setItem("id", response.data.data.id);
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    }
  }, []);

  return <div style={{ display: "flex" }}>로그인 처리 중</div>;
};

export default LoginRedirectHandler;
