import React, { useEffect } from "react";
import styled from "styled-components";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import sendNotificationRequest from "api/notification/notification";

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
      axios.post(`${process.env.REACT_APP_BASE_URL}/springboot/user/kakao?code=${code}`).then(async (response) => {
        localStorage.setItem("accessToken", response.data.data.accessToken);

        // 5시간 후 accessToken 만료
        setTimeout(
          () => {
            localStorage.removeItem("accessToken");
          },
          5 * 60 * 60 * 1000,
        );
        // 로그인 시 알림 연결
        await sendNotificationRequest(response.data.data.accessToken);

        window.location.href = "/";
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
