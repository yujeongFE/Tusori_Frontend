import React from "react";
import { LoginText, Center, Img, Text, KakaoBtn, CautionText } from "./Style";

const Index: React.FC = () => {
  return (
    <>
      <LoginText>로그인</LoginText>
      <Center>
        <Img src={`${process.env.PUBLIC_URL}/assets/character.png`} alt="login" />
        <Text>
          투설이와 함께 주식의
          <br />
          기본 과정을 알아가 볼까요?
        </Text>
        <KakaoBtn>카카오로 로그인/회원가입</KakaoBtn>
        <CautionText>
          회원가입 시 모의주식의 <b>서비스 이용 약관</b>과 <b>개인정보 보호정책</b>에 동의하게 됩니다.
        </CautionText>
      </Center>
    </>
  );
};

export default Index;
