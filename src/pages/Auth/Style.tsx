import styled from "styled-components";

export const LoginText = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-top: 83px;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.div`
  text-align: center;
  font-family: Pretendard-Medium;
  font-size: 22px;
  margin-top: 19px;
`;

export const KakaoBtn = styled.button`
  width: 483px;
  height: 53px;
  border-radius: 12px;
  background: #fee500;
  // 배경 왼쪽 부분에 이미지 삽입
  background-image: url(${process.env.PUBLIC_URL}/assets/kakao-logo.png);
  background-repeat: no-repeat;
  background-position: 32px 50%;
  background-size: 23px;
  margin-top: 40px;
  border: none;
  font-size: 18px;
  font-family: Roboto-Regular;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 95%;
    background-position: 13px 50%;
  }
`;

export const CautionText = styled.div`
  color: #b0b0b0;
  font-size: 14px;
  font-weight: 400;
  margin-top: 32px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 380px) {
    font-size: 11px;
  }
`;
