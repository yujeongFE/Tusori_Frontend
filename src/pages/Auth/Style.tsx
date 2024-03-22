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

export const Img = styled.img`
  width: 238px;
  margin: 38.62px 0;
  @media (max-width: 500px) {
    width: 161px;
    margin: 31px 0;
  }
`;

export const Text = styled.div`
  text-align: center;
  font-family: Pretendard-Medium;
  font-size: 22px;
  margin-top: 19px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const KakaoBtn = styled.button`
  width: 483px;
  height: 53px;
  border-radius: 12px;
  color: #2a2a2a;
  background: #fee500;
  background-image: url(${process.env.PUBLIC_URL}/assets/auth/kakao-logo.png);
  background-repeat: no-repeat;
  background-position: 32px 50%;
  background-size: 23px;
  margin-top: 40px;
  border: none;
  font-size: 18px;
  font-family: Roboto-Regular;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 350px;
  }
  @media (max-width: 500px) {
    width: 67%;
    font-size: 13px;
    height: 40px;
    background-position: 10px 50%;
    background-size: 19px;
  }
  @media (max-width: 300px) {
    font-size: 12px;
  }
`;

export const CautionText = styled.div`
  color: #b0b0b0;
  font-size: 14px;
  font-weight: 400;
  margin-top: 32px;
  @media (max-width: 768px) {
    font-size: 12px;
    width: 215px;
    text-align: center;
  }
`;
