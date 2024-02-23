import React from "react";
import Layout from "../../components/layouts/layout";
import { LoginText, Center, Text, KakaoBtn, CautionText } from "./Style";

const Index = () => {
    return (
        <Layout>
            <LoginText>로그인</LoginText>
            <Center>
                <img src={`${process.env.PUBLIC_URL}/assets/Tiger.webp`} alt="login" style={{ width: "130px", marginTop: "83px"}}/>
                <Text>'모의주식'으로 주식의<br/> 기본 과정을 알아가 볼까요?</Text>
                <KakaoBtn>카카오 로그인/회원가입</KakaoBtn>
                <CautionText>회원가입 시 모의주식의 서비스 이용 약관과 개인정보 보호정책에 동의하게 됩니다.</CautionText>
            </Center>
            
        </Layout>
    )
}

  
  export default Index;
  
  /* caution text bold */