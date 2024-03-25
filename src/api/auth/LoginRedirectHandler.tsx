import React, { useEffect } from "react";
import axios from "axios";

const LoginRedirectHandler: React.FC = () => {
  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get("code");

    if (code) {
      axios
        .post(`/springboot/user/kakao?code=${code}`)
        .then((response) => {
          console.log("Login success:", response.data.data.accessToken);
          localStorage.setItem("accessToken", response.data.data.accessToken);
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    }
  }, []);

  return <div>로그인 처리 중</div>;
};

export default LoginRedirectHandler;
