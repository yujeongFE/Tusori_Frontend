import React, { useEffect } from "react";
import styled from "styled-components";
import { BeatLoader } from "react-spinners";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`;

const Title = styled.div`
  margin-top: 20px;
`;

const LoginRedirectHandler: React.FC = () => {
  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get("code");

    if (code) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/springboot/user/kakao?code=${code}`)
        .then((response) => {
          console.log("Login success:", response.data.data);
          //console.log("data:", response.data.data.nickname);
          localStorage.setItem("accessToken", response.data.data.accessToken);
          localStorage.setItem("id", response.data.data.id);
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    }
  }, []);

  return (
    <Container>
      <BeatLoader color="#708FFE" />
      <Title>로그인 처리 중</Title>
    </Container>
  );
};

export default LoginRedirectHandler;
